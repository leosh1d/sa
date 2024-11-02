'use client'
import {getAccessToken} from "@/components/auth/getAccessToken";
import {deleteAccessToken} from "@/components/auth/deleteAccessToken";
import {deleteRefreshToken} from "@/components/auth/deleteRefreshToken";
import * as VKID from "@vkid/sdk";

export const LogoutAction = async ()=> {
    const token = await getAccessToken()
    await deleteAccessToken()
    await deleteRefreshToken()
    token && await VKID.Auth.logout(token)
}