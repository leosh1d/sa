'use client'
import {VStack} from "@chakra-ui/react";
import {EventCard} from "@/components/events/eventCard";
import {EventCarousel} from "@/components/events/eventCarousel";
import {PromoSection} from "@/components/promoSection";

export default function Home() {
  return (
      <VStack w='full'>
        <EventCard active eventType={'posvyat'} title={'посвят 24'} description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'} href={'/posvyat'}/>
          <PromoSection/>
        <EventCarousel/>
      </VStack>
  );
}
