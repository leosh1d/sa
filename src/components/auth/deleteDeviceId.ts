'use server'
import {cookies} from "next/headers";

export const deleteDeviceId = async () => {
    cookies().delete(`refresh_token`)
}