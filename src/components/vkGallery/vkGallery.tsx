import React, {useEffect, useState} from 'react';
import {fetchPhotos} from "@/components/vkGallery/vkFetchPhotos";
import {Gallery} from "@/components/imageGallery/Gallery";


interface VKGalleryProps {
    albumId: string;
}

export const VKGallery: React.FC<VKGalleryProps> = ({albumId}) => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadPhotos = async () => {
            setLoading(true);
            try {
                const photoUrls = await fetchPhotos(albumId);
                setPhotos(photoUrls);
            } catch (err) {
                console.warn(err)
            } finally {
                setLoading(false);
            }
        };

        loadPhotos();
    }, [ albumId]);

    // if (!isAuthorized) {
    //     return <Text opacity={0.5}>Авторизуйся через вк, чтобы посмотреть фотографии мероприятия прошлого года</Text>
    // }

    return (
        <Gallery loading={loading} images={photos}/>
    );
};

