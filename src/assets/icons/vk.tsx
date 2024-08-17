"use client"


import {chakra, HTMLChakraProps} from "@chakra-ui/react";

export const Vk = (props: HTMLChakraProps<`svg`>)=> {
    return <chakra.svg width="65" height="64" viewBox="0 0 65 64" fill="none"
                       xmlns="http://www.w3.org/2000/svg"{...props}>
            <rect x="0.5" width="64" height="64" rx="22" fill="#0077FF"/>
            <path
                d="M33.571 42.5781C21.8896 42.5781 15.2268 34.6366 14.9492 21.4219H20.8006C20.9928 31.1211 25.3065 35.2296 28.7234 36.0767V21.4219H34.2333V29.787C37.6074 29.4269 41.152 25.615 42.3479 21.4219H47.8577C46.9394 26.5892 43.0954 30.4011 40.3619 31.9682C43.0954 33.2389 47.4735 36.5637 49.1392 42.5781H43.0741C41.7714 38.5544 38.5257 35.4413 34.2333 35.0178V42.5781H33.571Z"
                fill="white"/>
    </chakra.svg>

}