'use server'

import {cookies} from "next/headers";

export const setUserId = async (val: string) => {
    cookies().set(`user_id`, val)
}

