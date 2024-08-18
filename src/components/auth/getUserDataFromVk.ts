'use client'

import {getCurrentUser} from "@/components/auth/getCurrentUser";
import * as VKID from "@vkid/sdk";

export const getUserDataFromVk = async(callback:(info: VKID.UserInfoResult) => void) => {
    const user = await getCurrentUser();
    if(user === null){
        return null
    }
    const info = await VKID.Auth.userInfo(user.access_token)
    console.warn(info)
    callback(info)
}
