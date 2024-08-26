'use client'
import {VStack, Box, Card,Text, Stack} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import {useRef} from "react";
import ChakraCarousel from "@/components/carousel/carousel";
import {CoordCard} from "@/components/coordCard";

export default function Home() {

    const ref = useRef<HTMLDivElement>(null)

    return (
        <VStack w='full' pb={24} spacing={4}>
            <EventCardFull eventType={'posvyat'} title={'посвят 24'}
                           description={'студактив бизнес-информатики готовит первокурсникам выезд в пансионат на выходные, состоящий из командного тематического квеста, розыгрыша призов, дискотеки и секретной части, о которой вы узнаете только на самом мероприятии'}
                           href={'/posvyat'}/>

            <Stack spacing={4} direction={{base: 'column', md: 'row'}}>
                <CoordCard name='сластионов никита' img='/ns.jpeg' description='руководитель студактива бизнес-информатики' tgLink='slastionov'/>
                <CoordCard name='воробьев кирилл' img='/vk.jpeg' description='главный координатор посвята 2024' tgLink='jknfeel'/>
                <CoordCard name='софия маслова' img='/sm.jpeg' description='глава программы' tgLink='kruzhovv'/>

                <CoordCard name='рыжов кирилл' img='/rk.jpeg' description='глава SMM и медиа отдела' tgLink='sofams'/>

            </Stack>

            {/*<Box ref={ref}/>*/}
            {/*<Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="posvyat2024/3"*/}
            {/*        onReady={() => {*/}
            {/*            const elem = document.getElementById('telegram-post-posvyat2024-3')*/}
            {/*            if (!ref?.current || !elem) {*/}
            {/*                return*/}
            {/*            }*/}

            {/*            ref?.current && elem && ref.current.appendChild(elem);*/}
            {/*            const elemDoc = (elem as HTMLIFrameElement).contentDocument*/}
            {/*            elemDoc && (elemDoc.body.style.background = '#F3F5FF')*/}
            {/*        }}/>*/}

        </VStack>
    );
}
