'use server'

import {getAccessToken} from "@/components/auth/getAccessToken";

export const getUserData = async ()=> {
    const token = await getAccessToken()

    console.warn(token)
    const res = await fetch('https://api.vk.com/method/account.getProfileInfo?' + new URLSearchParams({
        access_token: token,
        v: '5.199'
    }).toString(), {
        method: "POST"
    })
    console.warn(await res.json())
    if(!res.ok){
        throw res
    }
    return await res.json()
}