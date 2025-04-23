'use client'
import {Container, VStack} from "@chakra-ui/react";
import {EventCard} from "@/components/events/eventCard";
import {EventCarousel} from "@/components/events/eventCarousel";
import {PromoSection} from "@/components/promoSection";

export default function Home() {
    return (
        <Container maxW='container.xl' minH='100vh'>
            <VStack w='full'>
                <EventCard active eventType={'povishay'} title={'гори ясно'}
                           description={''}
                           href={'/povishay'}/>
                <PromoSection/>
                <EventCarousel/>
            </VStack>
        </Container>

    );
}
