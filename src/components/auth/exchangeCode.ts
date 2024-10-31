'use server'
import {actionAfterExchangeCode} from "@/components/auth/actionAfterExchangeCode";
import {ConfigData} from "@vkid/sdk";
import {getVerifierAndChallengeCodes} from "@/components/auth/getVerifierAndChallengeCodes";
import {TokenResult} from "@vkid/sdk/dist-sdk/types/auth/types";

interface exchangeCodeProps {
    configString: string,
    code: string,
    deviceId: string,
}

export const exchangeCode = async ({configString, code, deviceId}: exchangeCodeProps) => {
    const configObj = JSON.parse(configString) as ConfigData

    const { codeVerifier} = await getVerifierAndChallengeCodes()


    const res = await fetch('https://id.vk.com/oauth2/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code_verifier: codeVerifier || '',
            redirect_uri: configObj.redirectUrl,
            code: code,
            client_id: String(configObj.app),
            device_id: deviceId,
            state: configObj.state || '',
        }).toString()
    })

    const tokenResult = await res.json() as Omit<TokenResult, "id_token">

    return await actionAfterExchangeCode(tokenResult)
}
