'use client'

import * as VKID from "@vkid/sdk";
import {getAccessToken} from "@/components/auth/getAccessToken";
import {getUserData} from "@/components/auth/actions/getUserData";

export const getUserDataFromVk = async(callback:(info: VKID.UserInfoResult) => void) => {
    const token = await getAccessToken()
    const data2 = await getUserData()
    console.warn(data2)
    const info = await VKID.Auth.userInfo(token)
    console.warn(info)
    callback(info)
}
