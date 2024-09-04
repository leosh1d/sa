'use server'

import {cookies} from "next/headers";

export const getRefreshToken = async () => {
    return cookies().get(`refresh_token`)?.value || ""
}
