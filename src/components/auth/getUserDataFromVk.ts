'use client'

import * as VKID from "@vkid/sdk";
import {getUserData} from "@/components/auth/actions/getUserData";

export const getUserDataFromVk = async (callback: (info: VKID.UserInfoResult) => void) => {
    // const token = await getAccessToken()
    // const setIsAuthorized = useCommonState.getState().setIsAuthorized;

    const data = await getUserData()
    if (data.error) {
        console.error(data.error)
        // setIsAuthorized(false)
        // deleteAccessToken()
        // deleteRefreshToken()
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
