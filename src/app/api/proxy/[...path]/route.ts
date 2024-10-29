'use server'

import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest, {params}: { params: { path: string[] } }) {
    return handleProxy(req, params.path);
}

export async function POST(req: NextRequest, {params}: { params: { path: string[] } }) {
    return handleProxy(req, params.path);
}

async function handleProxy(req: NextRequest, path: string[]) {
    try {
        const queryParams = req.nextUrl.searchParams.toString();
        const targetUrl = `https://api.example.com/${path.join('/')}${queryParams ? `?${queryParams}` : ''}`;

        const apiResponse = await fetch(targetUrl, {
            method: req.method,
            headers: {
                ...Object.fromEntries(req.headers),
                host: '', // Убираем заголовок host
            },
            body: req.method !== 'GET' ? await req.text() : undefined,
        });

        if (!apiResponse.ok) {
            return NextResponse.json(
                {error: `Failed to fetch: ${apiResponse.statusText}`},
                {status: apiResponse.status}
            );
        }

        const data = await apiResponse.json();
        return NextResponse.json(data, {status: apiResponse.status});
    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}