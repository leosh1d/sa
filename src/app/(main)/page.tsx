'use client'
import {VStack} from "@chakra-ui/react";
import {EventCard} from "@/components/events/eventCard";
import {EventCarousel} from "@/components/events/eventCarousel";
import {PromoSection} from "@/components/promoSection";

export default function Home() {
  return (
      <VStack w='full'>
        <EventCard active eventType={'posvyat'} title={'посвят 24'} description={'студактив готовит первокурсникам выезд в пансионат на выходные, состоящий из командного тематического квеста, розыгрыша призов, дискотеки и секретной части'} href={'/posvyat'}/>
          <PromoSection/>
        <EventCarousel/>
      </VStack>
  );
}
