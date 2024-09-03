'use server'

import {cookies} from "next/headers";

export const getCurrentUserId = async () => {
    const userId = cookies().get(`user_id`)?.value

    if(!userId) {
        return null
    }

    return `user:${userId}`
}