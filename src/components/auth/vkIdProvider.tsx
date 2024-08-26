'use client'
import * as VKID from '@vkid/sdk';
import {baseDomain} from "@/consts/app";
import {WrapperProps} from "@/types/base";
import {FC, useEffect} from "react";
import {useCommonState} from "@/state/common/commonState";
import {useSearchParams} from "next/navigation";
import {actionAfterExchangeCode} from "@/components/auth/actionAfterExchangeCode";


const initVKID = () => VKID.Config.init({
    app: Number(process.env.NEXT_PUBLIC_VKID_APP_ID), // Идентификатор приложения.
    redirectUrl: baseDomain, // Адрес для перехода после авторизации.
    state: 'dj29fnsadjsd82', // Произвольная строка состояния приложения.
    codeVerifier: 'FGH767Gd65', // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
    scope: 'email phone vkid.personal_info', // Список прав доступа, которые нужны приложению.
    mode: VKID.ConfigAuthMode.InNewTab // По умолчанию авторизация открывается в новой вкладке.
})

export const VkIdProvider: FC<WrapperProps> = ({children}) => {
    const {vkIdConfig: stateVkIdConfig, setVkIdConfig, setIsAuthorized} = useCommonState()
    useEffect(() => {
        if (stateVkIdConfig === undefined) {
            const config = initVKID()
            setVkIdConfig(config)
        }
    }, [setVkIdConfig, stateVkIdConfig]);

    const params = useSearchParams()
    const code = params.get(`code`)
    const deviceId = params.get(`device_id`)

    useEffect(() => {
        if(code && deviceId){
            VKID.Auth.exchangeCode(code, deviceId).then((r) => {
                actionAfterExchangeCode(r).then(()=> {
                    setIsAuthorized(true)
                })
            })
        }
    }, [code, deviceId, setIsAuthorized]);


    return <>{children}</>
}