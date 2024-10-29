'use server'

import {getAccessToken} from "@/components/auth/getAccessToken";

export const getUserData = async ()=> {
    const token = await getAccessToken()

    const res = await fetch('https://api.vk.com/method/account.getProfileInfo?' + new URLSearchParams({
        access_token: token,
        v: '5.199'
    }).toString(), {
        method: "POST"
    })
    if(!res.ok){
        throw res.json()
    }
    return await res.json()
}