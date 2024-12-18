'use server'
import {cookies} from "next/headers";

export async function checkToken() {
    const accessToken = cookies().get(`access_token`)?.value
    const expires_at = cookies().get(`expires_at`)?.value
    const now = Date.now()

    return !!(accessToken && expires_at !== undefined && Number(expires_at) - now > 0);
}