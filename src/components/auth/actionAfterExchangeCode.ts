'use server'

import {TokenResult} from "@vkid/sdk";
import {cookies} from "next/headers";
import {addUser, getUserById, updateUser, User} from "@/app/api/userActions/userActions";

export const actionAfterExchangeCode = async (r: Omit<TokenResult, 'id_token'>)=> {
    cookies().set(`access_token`, r.access_token)
    cookies().set(`refresh_token`, r.refresh_token)
    const expires_at = (Math.floor(Date.now()/1000) + r.expires_in) * 1000
    cookies().set(`expires_at`, `${expires_at}`)

    const userInDBRes = await getUserById(r.user_id)
    const userInDB:User | null = await userInDBRes.json()

    if(userInDB === null){
        await addUser(r.user_id, {
            access_token: r.access_token,

            events: []
        })
    } else if (userInDB.access_token !== r.access_token) {
        await updateUser(r.user_id, {
            access_token: r.access_token,
        })
    }

}