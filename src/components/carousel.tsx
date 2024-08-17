"use client"
import {FC, ReactNode, useEffect, useRef, useState} from "react";
import {Box, HStack, IconButton} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronLeft} from "@/assets/icons/ChevronLeft";
import {ChevronRight} from "@/assets/icons/ChevronRight";

interface CarouselProps {
    items: ReactNode[];
    itemsToShow?: number;  // количество отображаемых элементов за один раз
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

interface CarouselItemProps {
    currentItems: ReactNode[];
    direction: number;
    setMaxH: (val: number) => void;
}

const CarouselItem: FC<CarouselItemProps> = ({currentItems, direction, setMaxH}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current && setMaxH(ref.current.getBoundingClientRect().height);
    }, [setMaxH]);

    return (
        <motion.div
            ref={ref}
            style={{
                position: 'absolute',
                display: 'flex',
                gap: '16px' // Пробел между элементами
            }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: {type: "spring", stiffness: 300, damping: 30},
                opacity: {duration: 0.2}
            }}
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
        >
            {currentItems}
        </motion.div>
    );
}

export const Carousel: FC<CarouselProps> = ({items, itemsToShow = 3}) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const [maxH, setMaxH] = useState(0);

    const maxHeightHandler = (val: number) => {
        if (val > maxH) {
            setMaxH(val);
        }
    };

    const currentItems = items.slice(page * itemsToShow, page * itemsToShow + itemsToShow);

    return (
        <Box h={maxH} w="full" p={4} position="relative">
            <HStack justifyContent="space-between" alignItems="center" mb={4} position={'absolute'} inset={0} px={4}>
                <IconButton
                    colorScheme={'zhgut'}
                    zIndex={2}
                    aria-label="previous"
                    icon={<ChevronLeft boxSize={6} />}
                    boxSize={12}
                    onClick={() => paginate(-1)}
                    isDisabled={page === 0}  // Отключить кнопку на первой странице
                />
                <IconButton
                    colorScheme={'zhgut'}
                    zIndex={2}
                    aria-label="next"
                    boxSize={12}
                    icon={<ChevronRight boxSize={6} />}
                    onClick={() => paginate(1)}
                    isDisabled={page * itemsToShow + itemsToShow >= items.length}  // Отключить кнопку на последней странице
                />
            </HStack>

            <AnimatePresence initial={false} custom={direction}>
                <CarouselItem setMaxH={maxHeightHandler} currentItems={currentItems} direction={direction} />
            </AnimatePresence>
        </Box>
    );
}