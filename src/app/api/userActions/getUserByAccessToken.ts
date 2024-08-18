'use server'

import {kv} from "@vercel/kv";
import {NextResponse} from "next/server";

export const getUserByAccessToken = async (access_token: string)=> {
    const keys = await kv.keys('*');
    for (const key of keys) {
        const user = await kv.hgetall(key);
        if (user && user.access_token === access_token) {
            return NextResponse.json({ ...user, user_id: key})
        }
    }
    return NextResponse.json(null);
};