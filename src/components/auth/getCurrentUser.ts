'use server'

import {cookies} from "next/headers";
import {getUserByAccessToken} from "@/app/api/userActions/getUserByAccessToken";
import {User} from "@/app/api/userActions/userActions";

export const getCurrentUser = async () => {
    const accessToken = cookies().get(`access_token`)?.value

    if(!accessToken) {
        return null
    }

    const user =  await getUserByAccessToken(accessToken)

    return await user.json() as User
}