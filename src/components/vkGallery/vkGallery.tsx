import React, {useEffect, useState} from 'react';
import {fetchPhotos} from "@/components/vkGallery/vkFetchPhotos";
import {Gallery} from "@/components/imageGallery/Gallery";
import {useCommonState} from "@/state/common/commonState";
import {Text} from "@chakra-ui/react"


interface VKGalleryProps {
    albumId: string;
}

export const VKGallery: React.FC<VKGalleryProps> = ({albumId}) => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const isAuthorized = useCommonState((state) => state.isAuthorized)

    useEffect(() => {
        const loadPhotos = async () => {
            setLoading(true);
            try {
                const photoUrls = await fetchPhotos(albumId);
                console.warn(photoUrls)
                setPhotos(photoUrls);
            } catch (err) {
                console.warn(err)
            } finally {
                setLoading(false);
            }
        };

        if (isAuthorized) loadPhotos();
    }, [isAuthorized, albumId]);

    if (!isAuthorized) {
        return <Text opacity={0.5}>Авторизуйся через вк, чтобы посмотреть фотографии мероприятия прошлого года</Text>
    }

    return (
        <Gallery loading={loading} images={photos}/>
    );
};

