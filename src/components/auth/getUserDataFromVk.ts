'use client'

import * as VKID from "@vkid/sdk";
import {getUserData} from "@/components/auth/actions/getUserData";
import {refreshTokenAction} from "@/components/auth/refreshTokenAction";
import {useCommonState} from "@/state/common/commonState";

export const getUserDataFromVk = async (callback: (info: VKID.UserInfoResult) => void) => {
    // const token = await getAccessToken()
    const vkIdConfig = useCommonState.getState().vkIdConfig;

    const data = await getUserData()
    console.warn(data)
    if (data.error) {
        console.error(data.error)
        if (vkIdConfig)
            refreshTokenAction({configString: JSON.stringify(vkIdConfig.get())})
        // await LogoutAction()
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
