'use server'
import {google} from "googleapis";
import {eventType} from "@/consts/events";

export type ticketType = 'обычный' | 'випка'

export interface Rega {
    name: string,
    date: string,
    ticketType: ticketType,
    type: eventType,
    checkIsConfirmed: boolean,
    usedTicker: boolean,
    id: string
}

export async function getRegi(token: string): Promise<Rega[]> {

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.SHEETS_EMAIL,
            private_key: process.env.SHEETS_KEY?.split(String.raw`\n`).join('\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
    });

    const sheets = google.sheets({version: 'v4', auth});

    const spreadsheetId = process.env.SHEETS_TABLE_ID;
    const range = 'рега клиентура!A:J';


    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId as string,
        range: range as string,
    });

    const values = response.data?.values

    if (!values) {
        return [];
    }


    const regi: string[][] = values.filter((item) => (item[8] || '').toLowerCase() === token) || [];

    if (regi.length === 0) {
        return []
    }

    return regi.map((rega) => ({
        name: rega[1],
        ticketType: rega[4] as ticketType,
        date: rega[0],
        type: "drbi",
        checkIsConfirmed: rega[6] === "TRUE",
        usedTicker: rega[9] === 'TRUE',
        id: rega[8]
    }))
}