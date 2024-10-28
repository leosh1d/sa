'use client'
import {Container, VStack} from "@chakra-ui/react";
import {EventCard} from "@/components/events/eventCard";
import {EventCarousel} from "@/components/events/eventCarousel";
import {PromoSection} from "@/components/promoSection";

export default function Home() {
    return (
        <Container maxW='container.xl' minH='100vh'>
            <VStack w='full'>
                <EventCard active eventType={'drbi'} title={'др би'}
                           description={'день рождения образовательной программы «бизнес-информатика», на котором студенты и преподаватели проводят совместный досуг, общаются, участвуют в квизах, смотрят на выступления приглашеных гостей'}
                           href={'/drbi'}/>
                <PromoSection/>
                <EventCarousel/>
            </VStack>
        </Container>

    );
}
