'use client'
import * as VKID from '@vkid/sdk';
import {baseDomainDev, baseDomainProd} from "@/consts/app";
import {WrapperProps} from "@/types/base";
import {FC, useEffect} from "react";
import {useCommonState} from "@/state/common/commonState";
import {getRefreshToken} from "@/components/auth/getRefreshToken";
import {deleteRefreshToken} from "@/components/auth/deleteRefreshToken";
import {checkToken} from "@/components/auth/checkToken";
import {getUserId} from "@/components/auth/getUserId";
import {getVerifierAndChallengeCodes} from "@/components/auth/getVerifierAndChallengeCodes";
import {refreshTokenAction} from "@/components/auth/refreshTokenAction";
import {getAccessToken} from "@/components/auth/getAccessToken";

export const SCOPE = 'email phone vkid.personal_info'

const initVKID = async (domain: string) => {
    const {codeChallenge} = await getVerifierAndChallengeCodes()
    return VKID.Config.init({
        app: Number(process.env.NEXT_PUBLIC_VKID_APP_ID), // Идентификатор приложения.
        redirectUrl: domain, // Адрес для перехода после авторизации.
        state: 'studaktivstudaktiv2112',
        scope: SCOPE, // Список прав доступа, которые нужны приложению.
        mode: VKID.ConfigAuthMode.Redirect, // По умолчанию авторизация открывается в новой вкладке.
        codeChallenge: codeChallenge,
    })
}


export const VkIdProvider: FC<WrapperProps> = ({children}) => {
    const {vkIdConfig: stateVkIdConfig, setVkIdConfig, setIsAuthorized} = useCommonState()

    useEffect(() => {
        if (stateVkIdConfig === undefined) {
            const baseDomain = process.env.NODE_ENV === "development" ? baseDomainDev : baseDomainProd;
            initVKID(baseDomain).then((config) => {
                setVkIdConfig(config)
            })
        }
    }, [setVkIdConfig, stateVkIdConfig]);


    useEffect(() => {
        const checkTokenAction = async () => {

            const access_token = await getAccessToken()

            if (access_token === "") {
                setIsAuthorized(false)

                return
            }

            const isValidToken = await checkToken()
            const isUserId = await getUserId()
            const isAuth = isValidToken && (isUserId !== null && isUserId !== undefined)

            if (isAuth) {
                setIsAuthorized(true)
            } else {
                const refreshToken = await getRefreshToken()
                if (refreshToken != "" && stateVkIdConfig) {
                    try {
                        refreshTokenAction({configString: JSON.stringify(stateVkIdConfig.get())}).then(() => {
                            setIsAuthorized(true)
                        })
                    } catch (err) {
                        console.error(err)
                        await deleteRefreshToken()
                        setIsAuthorized(false)
                    }
                } else {
                    setIsAuthorized(false)
                }
            }
        }
        checkTokenAction()
    }, [setIsAuthorized, stateVkIdConfig]);


    if (stateVkIdConfig === undefined) {
        return null
    }

    return <>{children}</>
}