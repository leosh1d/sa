'use client'
import {VStack, Text, Container} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import {VKGallery} from "@/components/vkGallery/vkGallery";

export default function Posvyat() {

    return (
            <VStack w='full' pb={24} spacing={4}>


                <Container maxW='container.xl' pb={12}>
                    <EventCardFull eventType={'posvyat'} title={'посвят'}>
                        <Text>
                            студактив бизнес-информатики готовит первокурсникам выезд в пансионат на выходные, состоящий из командного тематического квеста, розыгрыша призов, дискотеки и секретной части, о которой вы узнаете только на самом мероприятии</Text>
                        {/*<Button disabled colorScheme='zhgut'>регистрация скоро откроется!</Button>*/}
                    </EventCardFull>
                </Container>

                <VKGallery albumId={`-226849674_302660158`}/>
        </VStack>

    );
}
