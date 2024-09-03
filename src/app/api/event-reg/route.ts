'use server'

import {NextResponse} from "next/server";
import {google} from "googleapis";
import {toNodeReadable} from "@/utils/toNodeReadable";

export async function POST(request: Request) {

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.SHEETS_EMAIL,
            private_key: process.env.SHEETS_KEY?.split(String.raw`\n`).join('\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
    });

    const sheets = google.sheets({version: 'v4', auth});
    const drive = google.drive({version: 'v3', auth});


    const spreadsheetId = process.env.SHEETS_TABLE_ID;
    const range = 'рега перваши!A:L';

    const formData = await request.formData()

    const fio = formData.get('fio')
    const social = formData.get('social')

    const living = formData.get('living')
    const phone = formData.get('phone')

    const token = formData.get('token')
    const docs = formData.get(`docs`) as File

    let publicDocsUrl = ''
    if(docs){
    const docsMetadata = {
        'name': docs.name,
    };

    const docsMedia = {
        mimeType: 'application/octet-stream',
        body: toNodeReadable(docs.stream()),
    };

        const response = await drive.files.create({
        requestBody: docsMetadata,
        media: docsMedia,
        fields: 'id',
    });

    const fileId = response.data.id;

    if (fileId === null) {
        return NextResponse.json({message: `File cant load`}, {status: 400});
    }

    // Make the file public
    await drive.permissions.create({
        fileId,
        requestBody: {
            role: 'reader',
            type: 'anyone'
        }
    });


    publicDocsUrl = `https://drive.google.com/file/d/${fileId}/view`;
}
    // Get the public URL
    const check = formData.get(`check`) as File
        const checkMetadata = {
            'name': check.name,
        };

        const checkMedia = {
            mimeType: 'application/octet-stream',
            body: toNodeReadable(check.stream()),
        };

        const responseCheck = await drive.files.create({
            requestBody: checkMetadata,
            media: checkMedia,
            fields: 'id',
        });

        const checkFileId = responseCheck.data.id;

        if (!checkFileId) {
            return NextResponse.json({message: `File cant load`}, {status: 400});
        }

        // Make the file public
        await drive.permissions.create({
            fileId: checkFileId,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        });

        // Get the public URL
       const publicCheckUrl = `https://drive.google.com/file/d/${checkFileId}/view`;

    try {
        const appendResponse =  await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[new Date().toLocaleString("ru-RU", {timeZone: "Europe/Moscow"}), fio, social, `'${phone}`, '', living, '', publicDocsUrl, publicCheckUrl, 'false', 'false', token]],
            },
        });

        return NextResponse.json({message: 'Data added successfully'}, {status: 200});
    } catch (error) {
        console.error('Error writing to sheet:', error);
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
    }

}