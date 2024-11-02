'use client'

import * as VKID from "@vkid/sdk";
import {getUserData} from "@/components/auth/actions/getUserData";
import {LogoutAction} from "@/components/auth/logout";

export const getUserDataFromVk = async (callback: (info: VKID.UserInfoResult) => void) => {
    // const token = await getAccessToken()
    // const setIsAuthorized = useCommonState.getState().setIsAuthorized;

    const data = await getUserData()
    console.warn(data)
    if (data.error) {
        console.error(data.error)
        await LogoutAction()
    } else {
        callback({
            user: {
                avatar: data.response.photo_200,
                first_name: data.response.first_name,
                last_name: data.response.last_name,
                phone: data.response.phone,
            }
        })
    }

}
