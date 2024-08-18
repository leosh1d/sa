"use client"

import {chakra, HTMLChakraProps} from "@chakra-ui/react";

export const ChevronLeft = (props: HTMLChakraProps<`svg`>)=> {
    return <chakra.svg viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg"{...props}>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M19.8638 20.1045C19.517 20.8717 18.6163 21.2114 17.8519 20.8633L6.31885 15.6116C3.22705 14.2037 3.22705 9.7963 6.31885 8.3884L17.8519 3.13666C18.6163 2.78859 19.517 3.12834 19.8638 3.89551C20.2106 4.66267 19.8721 5.56675 19.1078 5.91481L7.57471 11.1666C6.86122 11.4915 6.86122 12.5085 7.57471 12.8334L19.1078 18.0852C19.8721 18.4333 20.2106 19.3373 19.8638 20.1045Z"
              fill="currentColor"/>
    </chakra.svg>
}