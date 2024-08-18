"use client"
import {EventCardSmall} from "./eventCard";
import ChakraCarousel from "@/components/carousel/carousel";

export const EventCarousel = () => {
    return <ChakraCarousel
     gap={32}>
        <EventCardSmall eventType={'posvyat'} title={'посвят 23'}
                        description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'}
                        href={'/posvyat'}/>
        <EventCardSmall  eventType={'posvyat'} title={'посвят 24'}
                        description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'}
                        href={'/posvyat'}/>
        <EventCardSmall  eventType={'posvyat'} title={'посвят 25'}
                        description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'}
                        href={'/posvyat'}/>
        <EventCardSmall eventType={'posvyat'} title={'посвят 25'}
                        description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'}
                        href={'/posvyat'}/>
    </ChakraCarousel>
}