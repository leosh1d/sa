'use server'

import { getAccessToken } from "@/components/auth/getAccessToken";

// Типы для данных, которые возвращает VK API
interface VKPhotoSize {
    url: string;
    width: number;
    height: number;
    type: string;
}

interface VKPhotoItem {
    id: number;
    sizes: VKPhotoSize[];
}

interface VKResponse {
    response: {
        items: VKPhotoItem[];
    };
}

// Асинхронная функция для получения всех фотографий
export async function fetchPhotos(albumId: string): Promise<string[]> {
    const token = await getAccessToken();
    const ownerId = albumId.split("_")[0];
    const albumParsedId = albumId.split("_")[1];

    const allPhotoUrls: string[] = [];
    const count = 100; // Максимальное количество фотографий за один запрос

    for (let offset = 0; ; offset += count) {
        const response = await fetch(
            `https://api.vk.com/method/photos.get?owner_id=${ownerId}&album_id=${albumParsedId}&access_token=${process.env.VK_API_SERVICE_TOKEN}&v=5.131&offset=${offset}&count=${count}`
        );
        console.log(response)

        if (!response.ok) {
            throw new Error('Не удалось загрузить фотографии');
        }

        const data: VKResponse = await response.json();

        // Добавляем URL фотографий из текущего запроса
        const photoUrls = data.response.items.map(
            (item) => item.sizes.find((size) => size.type === 'z')?.url || ''
        );
        allPhotoUrls.push(...photoUrls);

        // Если вернулось меньше фото, чем `count`, значит, достигли конца альбома
        if (data.response.items.length < count) break;
    }

    return allPhotoUrls;
}