'use client'
import {VStack, Text, Box} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import Script from "next/script";

export default function Home() {
    return (
        <VStack w='full' pb={24} spacing={4}>
            <EventCardFull eventType={'posvyat'} title={'посвят 24'}
                           description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'}
                           href={'/posvyat'}/>
            <Text>Тут стата будет</Text>
            <Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="studaktivbi/209"
                    data-width="100%"></Script>
        </VStack>
    );
}
