'use server'

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import {eventType} from "@/consts/events";

interface purchasedEvent {
    type: eventType
    cost: number
    date: string
}
export interface User {
    access_token: string;
    events: purchasedEvent[]
}

export const addUser = async (user_id: number, user: User) => {
    await kv.hmset(`user:${user_id}`, {...user});
};

export const getUserById = async (user_id: number) => {
    const result = await kv.hgetall(`user:${user_id}`);
    if (result === null || Object.keys(result).length === 0) return NextResponse.json(null);
    return NextResponse.json(result)
};

export const updateUser = async (user_id: number, user: Partial<User>): Promise<void> => {
   await kv.hmset(`user:${user_id}`, user);
};