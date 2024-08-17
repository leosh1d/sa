"use client"

import {chakra, HTMLChakraProps} from "@chakra-ui/react";

export const ChevronRight = (props: HTMLChakraProps<`svg`>)=> {
    return <chakra.svg viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg"{...props}>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M4.13616 3.8955C4.48296 3.12834 5.38373 2.78859 6.1481 3.13666L17.6811 8.3884C20.7729 9.7963 20.7729 14.2037 17.6811 15.6116L6.1481 20.8633C5.38373 21.2114 4.48296 20.8717 4.13616 20.1045C3.78936 19.3373 4.12787 18.4333 4.89224 18.0852L16.4253 12.8334C17.1388 12.5085 17.1388 11.4915 16.4253 11.1666L4.89224 5.91481C4.12787 5.56674 3.78936 4.66267 4.13616 3.8955Z"
              fill="currentColor"/>
    </chakra.svg>

}