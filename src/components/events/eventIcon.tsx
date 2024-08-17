"use client"

import {eventType} from "@/consts/events";
import {HTMLChakraProps, chakra} from "@chakra-ui/react";
import {FC} from "react";

interface EventIconProps extends HTMLChakraProps<"svg">{
    eventType: eventType
}

export const PosvyatIcon = (props: HTMLChakraProps<"svg">) => (
    <chakra.svg
                viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd"
              d="M56.947 148.991L43.3101 128.177L62.9207 99.3235L79.4232 119.777L174.394 41L240.423 43.7023L224.415 109.88L119.252 173.707L134.79 195.845L99.7511 204.172L83.8589 184.755L38.4352 214.831L20.9963 203.613L16 178.597L56.947 148.991ZM92.7073 137.158L106.859 155.659L205.306 95.9083L212.915 64.4533L181.888 63.1835L92.7073 137.158Z"
              fill="currentColor"/>

    </chakra.svg>
)


export const EventIcon: FC<EventIconProps> = ({eventType, ...props}) => {
    switch (eventType) {
        case 'posvyat':
            return <PosvyatIcon  {...props}/>
        default:
            return <PosvyatIcon  {...props}/>
    }
}