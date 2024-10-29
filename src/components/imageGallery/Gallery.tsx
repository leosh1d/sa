import {FC, useState} from 'react';
import {SimpleGrid, Box, Skeleton} from '@chakra-ui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {ImageModal} from './ImageModal';
import Image from 'next/image'
import ImageWithSkeleton from "@/components/imageGallery/imageWithSkeleton";

interface GalleryProps {
    images: string[];
    loading?: boolean
}

export const Gallery: FC<GalleryProps> = ({images, loading}) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <SimpleGrid key={selectedIndex} columns={[2, 3, 4, 8]} spacing="3px" w={'full'} p="3px">
            {!loading ? images.map((src, index) => (
                <Box aspectRatio={1} key={index} as={motion.div} layoutId={`image-${src}`}
                     onClick={() => setSelectedIndex(index)} cursor="pointer" position='relative'>
                    <ImageWithSkeleton fill={true} src={src} alt={`image-${index}`}
                           style={{opacity: selectedIndex === index ? 0 : 1, zIndex: -1, objectFit: 'cover'}}
                    />
                </Box>
            )) : Array(24).fill('').map((_val, index) =>
                <Box aspectRatio={1} w={'full'} key={index}>
                    <Skeleton w={'full'} h={'full'}/>
                </Box>
            )
            }
            <AnimatePresence>
                {selectedIndex !== null && (
                    <ImageModal
                        images={images}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                    />
                )}
            </AnimatePresence>
        </SimpleGrid>
    );
};

