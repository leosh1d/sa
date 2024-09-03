'use server'
import {google} from "googleapis";
import {getCurrentUser} from "@/components/auth/getCurrentUser";
import {eventType} from "@/consts/events";
import {getCurrentUserId} from "@/components/auth/getUserId";


export interface Rega {
    date: string,
    type: eventType,
    checkIsConfirmed: boolean,
    docsIsConfirmed: boolean,
}


export async function getRegi():Promise<Rega[]> {

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.SHEETS_EMAIL,
            private_key: process.env.SHEETS_KEY?.split(String.raw`\n`).join('\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
    });

    const sheets = google.sheets({version: 'v4', auth});

    const spreadsheetId = process.env.SHEETS_TABLE_ID;
    const range = 'рега перваши!A:L';


    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId as string,
        range: range as string,
    });

    const user_id = await getCurrentUserId();

    if(!user_id){
        return []
    }

    const values = response.data?.values
    if(!user_id || !values){
        return []
    }

    const rega:string[] = values.find((item)=> item[11] === user_id) || [];

    if(rega.length === 0){
        return []
    }

    const checkIsConfirmed = rega[9] === "TRUE";
    const docsIsConfirmed = rega[10] === "TRUE"


    return [{
        date: rega[0],
        type:"posvyat",
        checkIsConfirmed,
        docsIsConfirmed
    }]
}