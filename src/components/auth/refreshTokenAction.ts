'use server'

import {actionAfterExchangeCode} from "@/components/auth/actionAfterExchangeCode";
import {ConfigData} from "@vkid/sdk";
import {TokenResult} from "@vkid/sdk/dist-sdk/types/auth/types";
import {getRefreshToken} from "@/components/auth/getRefreshToken";
import {getDeviceId} from "@/components/auth/getDeviceId";

interface refreshTokenProps {
    configString: string,
}

export const refreshTokenAction = async ({configString}: refreshTokenProps) => {
    const configObj = JSON.parse(configString) as ConfigData

    const refreshToken = await getRefreshToken()
    const deviceId = await getDeviceId()
    const res = await fetch('https://id.vk.com/oauth2/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: String(configObj.app),
            device_id: deviceId,
            state: configObj.state || '',
        }).toString()
    })
    const tokenResult = await res.json() as Omit<TokenResult, "id_token">

    return await actionAfterExchangeCode(tokenResult)
}
