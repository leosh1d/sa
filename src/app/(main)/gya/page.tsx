'use client'
import {VStack, Box, Card, Text, Stack, Container, Button} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import {useRef} from "react";
import {CoordCard} from "@/components/coordCard";
import {VKGallery} from "@/components/vkGallery/vkGallery";

export default function Gya() {

    return (
        <VStack w='full' pb={24} spacing={4}>


            <Container maxW='container.xl' pb={12}>
                <EventCardFull eventType={'gya'} title={'гори ясно'}>
                    <Text>
                        это ежегодное мероприятие СтудАктива Бизнес-информатики, посвящённое масленице 🥞</Text>

                    <Text>каждый год мы готовим увлекательную программу, собираемся вместе, угощаем гостей блинами, запиваем напитками разного уровня крепости и танцуем до утра</Text>
                    {/*<Button disabled colorScheme='zhgut'>регистрация скоро откроется!</Button>*/}
                </EventCardFull>
            </Container>

            <VKGallery albumId={`-88110222_301961850`}/>
        </VStack>

    );
}
