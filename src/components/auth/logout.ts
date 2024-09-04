'use server'

import {getAccessToken} from "@/components/auth/getAccessToken";
import * as VKID from "@vkid/sdk";
import {cookies} from "next/headers";

export const logout = async ()=> {
    const token = await getAccessToken()
    await VKID.Auth.logout(token)
    cookies().delete('access_token')
}