'use server'

import {cookies} from "next/headers";

export const setDeviceIdInCookie = async (deviceId: string) => {
    cookies().set(`deviceId`, deviceId)
    return null
}

export const getDeviceId = async ()=> {

    return cookies().get(`deviceId`)?.value || ""

}