'use server'

import {getAccessToken} from "@/components/auth/getAccessToken";
import {cookies} from "next/headers";

export const getUserData = async () => {
    const token = await getAccessToken()

    const res = await fetch('https://api.vk.com/method/account.getProfileInfo?' + new URLSearchParams({
        access_token: token,
        v: '5.199'
    }).toString(), {
        method: "POST"
    })

    const unpdacked = await res.json()

    cookies().set(`user_id`, unpdacked.response.id)

    return unpdacked
}