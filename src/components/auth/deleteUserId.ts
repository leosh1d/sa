'use server'
import {cookies} from "next/headers";

export const deleteUserId = async () => {
    cookies().delete(`user_id`)
}