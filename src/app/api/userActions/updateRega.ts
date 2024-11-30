'use server'
import {google} from "googleapis";
import {Rega, ticketType} from "@/app/api/userActions/getRegi";


export async function UpdateRega(fio: string): Promise<Rega[]> {

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


    console.warn(rega)
    if (rega.length === 0) {
        return []
    }

    if (rega[9] === 'FALSE' || rega[9] === '') {
        const updateRange = `рега клиентура!J${rowIndex + 1}`; // Преобразуем индекс строки в номер (нумерация начинается с 1)
        await sheets.spreadsheets.values.update({
            spreadsheetId: spreadsheetId as string,
            range: updateRange,
            valueInputOption: "RAW",
            requestBody: {
                values: [[true]],
            },
        });

        return [{
            id: rega[8],
            date: rega[0],
            name: rega[1],
            type: "drbi",
            checkIsConfirmed: rega[6] === "TRUE",
            ticketType: rega[4] as ticketType,
            usedTicker: true,
        }]
    } else {
        return [{
            id: rega[8],
            date: rega[0],
            name: rega[1],
            type: "drbi",
            checkIsConfirmed: rega[6] === "TRUE",
            ticketType: rega[4] as ticketType,
            usedTicker: false,
        }]
    }
}