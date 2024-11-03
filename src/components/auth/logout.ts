'use client'
import {getAccessToken} from "@/components/auth/getAccessToken";
import {deleteAccessToken} from "@/components/auth/deleteAccessToken";
import {deleteRefreshToken} from "@/components/auth/deleteRefreshToken";
import * as VKID from "@vkid/sdk";
import {deleteUserId} from "@/components/auth/deleteUserId";
import {deleteDeviceId} from "@/components/auth/deleteDeviceId";

export const LogoutAction = async ()=> {
    const token = await getAccessToken()
    await deleteAccessToken()
    await deleteRefreshToken()
    await deleteUserId()
    await deleteDeviceId()
    token && await VKID.Auth.logout(token)
}