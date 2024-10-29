'use client'
import {VStack, Container, Text} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import {VKGallery} from "@/components/vkGallery/vkGallery";
import {RegModal} from "@/components/events/regModal";

export default function Drbi() {

    return (
        <VStack w='full' pb={24} spacing={4}>
            <Container maxW='container.xl' pb={12}>
                <EventCardFull eventType={'drbi'} title={'день рождения бизнес информатики'}>
                    <Text>
                        день рождения образовательной программы «бизнес-информатика», на котором студенты и
                        преподаватели проводят совместный досуг, общаются, участвуют в квизах, смотрят на
                        выступления приглашеных гостей'</Text>
                    <RegModal/>

                    {/*<Button disabled colorScheme='zhgut'>регистрация скоро откроется!</Button>*/}
                </EventCardFull>
            </Container>

            <VKGallery albumId={`-59606656_301706867`}/>


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
