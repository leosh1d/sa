'use server'
import {google} from "googleapis";
import {eventType} from "@/consts/events";
import {getUserId} from "@/components/auth/getUserId";


export interface LinkRega {
    date: string,
    type: eventType,
    checkIsConfirmed: boolean,
    isEmptyId: boolean
}

export async function LinkUserId(fio: string): Promise<LinkRega[]> {

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

    const rowIndex = values.findIndex((item) => item[1].toLowerCase().replace(' ', '') === fio.toLowerCase().replace(' ', ''));
    const rega: string[] = values.find((item) => item[1].toLowerCase().replace(' ', '') === fio.toLowerCase().replace(' ', '')) || [];


    if (rega.length === 0) {
        return []
    }

    const checkIsConfirmed = rega[6] === "TRUE";

    const userId = await getUserId()
    if ((rega[8] === '' || rega[8] === undefined) && userId && userId !== 'undefined') {
        const updateRange = `рега клиентура!I${rowIndex + 1}`; // Преобразуем индекс строки в номер (нумерация начинается с 1)
        await sheets.spreadsheets.values.update({
            spreadsheetId: spreadsheetId as string,
            range: updateRange,
            valueInputOption: "RAW",
            requestBody: {
                values: [[userId]], // Записываем userId в ячейку
            },
        });

        return [{
            date: rega[0],
            type: "drbi",
            checkIsConfirmed,
            isEmptyId: false
        }]
    } else {
        return [{
            date: rega[0],
            type: "drbi",
            checkIsConfirmed,
            isEmptyId: true
        }]
    }
}