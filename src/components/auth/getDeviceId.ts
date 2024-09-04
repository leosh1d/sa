'use server'
import {cookies} from "next/headers";

export const getDeviceId = async ()=> {

    return cookies().get(`deviceId`)?.value || ""
}