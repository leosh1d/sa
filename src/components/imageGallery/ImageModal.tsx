import {AspectRatio, Box, IconButton} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {CloseIcon} from '@chakra-ui/icons';
import {FC, useState} from 'react';
import {ChevronLeft} from "@/assets/icons/ChevronLeft";
import {ChevronRight} from "@/assets/icons/ChevronRight";
import Image from 'next/image'

interface ImageModalProps {
    images: string[];
    selectedIndex: number;
    setSelectedIndex: (index: number | null) => void;
}

export const ImageModal: FC<ImageModalProps> = ({
                                                    images,
                                                    selectedIndex,
                                                    setSelectedIndex,
                                                }) => {
    const [direction, setDirection] = useState(0);

    const handleClose = () => {
        setDirection(0)
        setSelectedIndex(null);
    }
    const handleNext = () => {
        setDirection(1);
        setSelectedIndex((selectedIndex + 1) % images.length);
    };
    const handlePrev = () => {
        setDirection(-1);
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };


    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={handleClose}
            initial={{opacity: selectedIndex === null ? 0 : 1}}
            animate={{opacity: 1}}
            exit={{opacity: selectedIndex === null ? 0 : 1}}
        >
            <Box
                as={motion.div}
                key={selectedIndex}
                custom={direction}
                layoutId={`image-${images[selectedIndex]}`}
                onClick={(e) => e.stopPropagation()}
                drag="x" // Включаем перетаскивание по оси x
                dragElastic={{left: 0.8, right: 0.8, top: 0.1, bottom: 0.1}} // Небольшая "упругость" для лучшего UX
                onDragEnd={(e, {offset, velocity}) => {
                    const swipe = Math.abs(offset.x) * velocity.x;

                    if (swipe > 1000) {
                        handleNext();
                    } else if (swipe < -1000) {
                        handlePrev();
                    }
                }}
                maxW="90vw"
                maxH="90vh"
                w={'full'}
                h={'full'}
                aspectRatio={1}
                overflow='hidden'
                position={'relative'}
            >
                    <Image
                        src={images[selectedIndex]}
                        alt={`full-image-${selectedIndex}`}
                        fill
                        objectFit='cover'
                        style={{pointerEvents: 'none'}}
                    />
            </Box>
            <IconButton
                aria-label="Previous Image"
                icon={<ChevronLeft w={4} h={4}/>}
                onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                }}
                position="absolute"
                top="50%"
                left="5%"
                transform="translateY(-50%)"
                colorScheme="whiteAlpha"
            />
            <IconButton
                aria-label="Next Image"
                icon={<ChevronRight w={4} h={4}/>}
                onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                }}
                position="absolute"
                top="50%"
                right="5%"
                transform="translateY(-50%)"
                colorScheme="whiteAlpha"
            />
            <IconButton
                aria-label="Close"
                icon={<CloseIcon/>}
                onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }}
                position="absolute"
                top="5%"
                right="5%"
                colorScheme="whiteAlpha"
            />
        </motion.div>
    );
};

