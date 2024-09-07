'use server'
import {google} from "googleapis";
import {eventType} from "@/consts/events";


export interface Rega {
    date: string,
    type: eventType,
    checkIsConfirmed: boolean,
    docsIsConfirmed: boolean,
}


export async function getRegi(fio: string):Promise<Rega[]> {

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

    const values = response.data?.values

    if(!values) {
        return [];
    }


    const lowerFio = fio.toLowerCase()
    const rega:string[] = values.find((item)=> item[1].toLowerCase() === lowerFio) || [];

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