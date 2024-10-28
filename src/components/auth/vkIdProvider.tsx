'use client'
import * as VKID from '@vkid/sdk';
import {baseDomain} from "@/consts/app";
import {WrapperProps} from "@/types/base";
import {FC, useEffect} from "react";
import {useCommonState} from "@/state/common/commonState";
import {actionAfterExchangeCode} from "@/components/auth/actionAfterExchangeCode";
import {getRefreshToken} from "@/components/auth/getRefreshToken";
import {getDeviceId} from "@/components/auth/getDeviceId";
import {deleteRefreshToken} from "@/components/auth/deleteRefreshToken";
import {checkToken} from "@/components/auth/checkToken";
import {getUserId} from "@/components/auth/getUserId";


const initVKID = () => VKID.Config.init({
    app: Number(process.env.NEXT_PUBLIC_VKID_APP_ID), // Идентификатор приложения.
    redirectUrl: baseDomain, // Адрес для перехода после авторизации.
    state: 'dj29fnsadjsd82', // Произвольная строка состояния приложения.
    codeVerifier: 'FGH767Gd65', // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
    scope: 'email phone vkid.personal_info', // Список прав доступа, которые нужны приложению.
    mode: VKID.ConfigAuthMode.InNewTab // По умолчанию авторизация открывается в новой вкладке.
})

export const VkIdProvider: FC<WrapperProps> = ({children}) => {
    const {vkIdConfig: stateVkIdConfig, setVkIdConfig, setIsAuthorized, isAuthorized} = useCommonState()

    useEffect(() => {
        if (stateVkIdConfig === undefined) {
            const config = initVKID()
            setVkIdConfig(config)
        }
    }, [setVkIdConfig, stateVkIdConfig]);


    useEffect(() => {
        const refreshTokenAction = async () => {
            const refreshToken = await getRefreshToken()
            const deviceId = await getDeviceId()

            if (refreshToken) {
                try {
                    const result = await VKID.Auth.refreshToken(refreshToken, deviceId);
                    actionAfterExchangeCode(result).then(() => {
                        setIsAuthorized(true)
                    })
                } catch (err) {
                    console.error(err)
                    deleteRefreshToken()
                }
            }
        }

        if (!isAuthorized) {
            refreshTokenAction()
        }

    }, [isAuthorized, setIsAuthorized]);

    useEffect(() => {
        const checkTokenAction = async () => {
            const isValidToken = await checkToken()
            const isUserId = await getUserId()
            const isAuth = isValidToken && isUserId !== null

            setIsAuthorized(isAuth)
        }
        checkTokenAction()
    }, [setIsAuthorized]);

    return <>{children}</>
}