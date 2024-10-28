'use server'
import {cookies} from "next/headers";

export const deleteRefreshToken = async  ()=> {cookies().delete(`refresh_token`)
}