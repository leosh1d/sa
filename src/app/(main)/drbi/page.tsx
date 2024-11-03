'use client'
import {VStack, Container, Text} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import {VKGallery} from "@/components/vkGallery/vkGallery";
import {RegModal} from "@/components/events/regModal";
import {CoordCard} from "@/components/coordCard";

export default function Drbi() {

    return (
        <VStack w='full' pb={24} spacing={4}>
            <Container maxW='container.xl' pb={12}>
                <EventCardFull eventType={'drbi'} title={'день рождения бизнес-информатики'} coords={<>
                    <CoordCard name={'рыжов кирилл'} img={'/rk.jpeg'} description={'главный координатор'} tgLink={'kruzhovv'}/>
                    <CoordCard name={'эрика касенова'} img={'/erika.jpg'} description={'координатор программы'} tgLink={'ellanta'}/>
                    <CoordCard name={'алексей пудочев'} img={'/ap.jpeg'} description={'координатор пиара'} tgLink={'leosh1d'}/>
                </>}>
                    <Text>
                        день рождения образовательной программы «бизнес-информатика», на котором студенты и
                        преподаватели проводят совместный досуг, общаются, смотрят на
                        выступления приглашеных гостей</Text>
                    <RegModal/>

                    {/*<Button disabled colorScheme='zhgut'>регистрация скоро откроется!</Button>*/}
                </EventCardFull>
            </Container>

            <VKGallery albumId={`-228114756_306372358`}/>


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
