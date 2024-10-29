'use client'
// TODO: разделить компоненты по файликам
import React, {
    useLayoutEffect,
    useCallback,
    useEffect,
    useState,
    useMemo,
    useRef,
    ReactNode,
} from "react";

import {
    useMediaQuery,
    useTheme,
    Progress,
    VStack,
    Button,
    Flex,
    Box,
} from "@chakra-ui/react";

import {motion, useAnimation, useMotionValue, AnimationControls, PanInfo} from "framer-motion";
import useBoundingRect from "@/components/hooks/useBoundingRect";
import {ChevronLeft} from "@/assets/icons/ChevronLeft";
import percentage from "@/utils/percentage";
import {ChevronRight} from "@/assets/icons/ChevronRight";


const MotionFlex = motion(Flex);

const transitionProps = {
    stiffness: 400,
    type: "spring",
    damping: 60,
    mass: 3
};

interface ChakraCarouselProps {
    children: ReactNode[],
    gap: number
}

const ChakraCarousel: React.FC<ChakraCarouselProps> = ({ children, gap }) => {
    const [trackIsActive, setTrackIsActive] = useState(false);
    const [multiplier, setMultiplier] = useState(0.35);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [constraint, setConstraint] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    const initSliderWidth = useCallback((width: number) => setSliderWidth(width), []);

    const positions = useMemo(
        () => children.map((_, index) => -Math.abs((itemWidth + gap) * index)),
        [children, itemWidth, gap]
    );

    const { breakpoints } = useTheme();

    const [isBetweenBaseAndMd] = useMediaQuery(
        `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
    );

    const [isBetweenMdAndXl] = useMediaQuery(
        `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
    );

    const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

    useEffect(() => {
        if (isBetweenBaseAndMd) {
            setItemWidth(sliderWidth - gap);
            setMultiplier(0.65);
            setConstraint(1);
        }
        if (isBetweenMdAndXl) {
            setItemWidth(sliderWidth / 2 - gap);
            setMultiplier(0.5);
            setConstraint(2);
        }
        if (isGreaterThanXL) {
            setItemWidth(sliderWidth / 3 - gap);
            setMultiplier(0.35);
            setConstraint(3);
        }
    }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

    const sliderProps = {
        setTrackIsActive,
        initSliderWidth,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap
    };

    const trackProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        sliderWidth,
        activeItem,
        constraint,
        multiplier,
        itemWidth,
        positions,
        gap
    };

    const itemProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap
    };

    return (
        <Slider {...sliderProps}>
            <Track {...trackProps}>
                {children.map((child, index) => (
                    <Item {...itemProps} index={index} key={index}>
                        {child}
                    </Item>
                ))}
            </Track>
        </Slider>
    );
};

interface SliderProps {
    setTrackIsActive: (isActive: boolean) => void,
    initSliderWidth: (width: number) => void,
    setActiveItem: React.Dispatch<React.SetStateAction<number>>,
    activeItem: number,
    constraint: number,
    itemWidth: number,
    positions: number[],
    children: ReactNode,
    gap: number
}

const Slider: React.FC<SliderProps> = ({
                                           setTrackIsActive,
                                           initSliderWidth,
                                           setActiveItem,
                                           activeItem,
                                           constraint,
                                           itemWidth,
                                           positions,
                                           children,
                                           gap
                                       }) => {
    const [ref, { width }] = useBoundingRect();

    useLayoutEffect(() => initSliderWidth(Math.round(width)), [
        width,
        initSliderWidth
    ]);

    const handleFocus = () => setTrackIsActive(true);

    const handleDecrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - positions.length) &&
        setActiveItem((prev) => prev - 1);
    };

    const handleIncrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - constraint) &&
        setActiveItem((prev) => prev + 1);
    };

    return (
        <>
            <Box
                ref={ref}
                w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
                ml={{ base: 0, md: `-${gap / 2}px` }}
                px={`${gap / 2}px`}
                position="relative"
                overflow="hidden"
            >
                {children}
            </Box>

            <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
                <Button
                    onClick={handleDecrementClick}
                    onFocus={handleFocus}
                    mr={`${gap / 3}px`}
                    color="zhgut.400"
                    opacity={0.5}
                    _active={{
                        opacity: 1
                    }}
                    variant="link"
                    minW={0}
                >
                    <ChevronLeft boxSize={9} />
                </Button>

                <Progress
                    value={percentage(activeItem, positions.length - constraint)}
                    alignSelf="center"
                    borderRadius="2px"
                    opacity={0.5}
                    bg="zhgut.50"
                    flex={1}
                    h="3px"
                    sx={{
                        "> div": {
                            backgroundColor: "zhgut.400"
                        }
                    }}
                />

                <Button
                    onClick={handleIncrementClick}
                    onFocus={handleFocus}
                    ml={`${gap / 3}px`}
                    color="zhgut.400"
                    opacity={0.5}
                    _active={{
                        opacity: 1
                    }}
                    variant="link"
                    zIndex={2}
                    minW={0}
                >
                    <ChevronRight boxSize={9} />
                </Button>
            </Flex>
        </>
    );
};

interface TrackProps {
    setTrackIsActive: (isActive: boolean) => void,
    trackIsActive: boolean,
    setActiveItem: React.Dispatch<React.SetStateAction<number>>,
    activeItem: number,
    constraint: number,
    multiplier: number,
    itemWidth: number,
    positions: number[],
    children: ReactNode
}

const Track: React.FC<TrackProps> = ({
                                         setTrackIsActive,
                                         trackIsActive,
                                         setActiveItem,
                                         activeItem,
                                         constraint,
                                         multiplier,
                                         itemWidth,
                                         positions,
                                         children
                                     }) => {
    const [dragStartPosition, setDragStartPosition] = useState(0);
    const controls: AnimationControls = useAnimation();
    const x = useMotionValue(0);
    const node = useRef<HTMLDivElement | null>(null);

    const handleDragStart = () => setDragStartPosition(positions[activeItem]);

    const handleDragEnd = (_:MouseEvent, info:PanInfo) => {
        const distance = info.offset.x;
        const velocity = info.velocity.x * multiplier;
        const direction = velocity < 0 || distance < 0 ? 1 : -1;

        const extrapolatedPosition =
            dragStartPosition +
            (direction === 1
                ? Math.min(velocity, distance)
                : Math.max(velocity, distance));

        const closestPosition = positions.reduce((prev, curr) => {
            return Math.abs(curr - extrapolatedPosition) <
            Math.abs(prev - extrapolatedPosition)
                ? curr
                : prev;
        }, 0);

        if (!(closestPosition < positions[positions.length - constraint])) {
            setActiveItem(positions.indexOf(closestPosition));
            controls.start({
                x: closestPosition,
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps
                }
            });
        } else {
            setActiveItem(positions.length - constraint);
            controls.start({
                x: positions[positions.length - constraint],
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps
                }
            });
        }
    };

    const handleResize = useCallback(
        () =>
            controls.start({
                x: positions[activeItem],
                transition: {
                    ...transitionProps
                }
            }),
        [activeItem, controls, positions]
    );

    const handleClick = useCallback(
        (event: MouseEvent) =>
            node.current && node.current.contains(event.target as Node)
                ? setTrackIsActive(true)
                : setTrackIsActive(false),
        [setTrackIsActive]
    );

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (trackIsActive) {
                if (activeItem < positions.length - constraint) {
                    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                        event.preventDefault();
                        setActiveItem((prev) => prev + 1);
                    }
                }
                if (activeItem > positions.length - positions.length) {
                    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                        event.preventDefault();
                        setActiveItem((prev) => prev - 1);
                    }
                }
            }
        },
        [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
    );

    useEffect(() => {
        handleResize();

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClick);
        };
    }, [handleClick, handleResize, handleKeyDown, positions]);

    return (
        <>
            {itemWidth && (
                <VStack ref={node} spacing={5} alignItems="stretch">
                    <MotionFlex
                        dragConstraints={node}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        animate={controls}
                        style={{ x }}
                        drag="x"
                        _active={{ cursor: "grabbing" }}
                        minWidth="min-content"
                        flexWrap="nowrap"
                        cursor="grab"
                    >
                        {children}
                    </MotionFlex>
                </VStack>
            )}
        </>
    );
};

interface ItemProps {
    setTrackIsActive: (isActive: boolean) => void,
    setActiveItem:  React.Dispatch<React.SetStateAction<number>>,
    activeItem: number,
    constraint: number,
    itemWidth: number,
    positions: number[],
    children: ReactNode,
    index: number,
    gap: number
}

const Item: React.FC<ItemProps> = ({
                                       setTrackIsActive,
                                       setActiveItem,
                                       activeItem,
                                       constraint,
                                       itemWidth,
                                       positions,
                                       children,
                                       index,
                                       gap
                                   }) => {
    const [userDidTab, setUserDidTab] = useState(false);

    const handleFocus = () => setTrackIsActive(true);

    const handleBlur = () => {
        userDidTab && index + 1 === positions.length && setTrackIsActive(false);
        setUserDidTab(false);
    };

    const handleKeyUp = (event: React.KeyboardEvent) =>
        event.key === "Tab" &&
        !(activeItem === positions.length - constraint) &&
        setActiveItem(index);

    const handleKeyDown = (event: React.KeyboardEvent) => event.key === "Tab" && setUserDidTab(true);

    return (
        <Flex
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            w={`${itemWidth}px`}
            _notLast={{
                mr: `${gap}px`
            }}
            py="4px"
        >
            {children}
        </Flex>
    );
};

export default ChakraCarousel;