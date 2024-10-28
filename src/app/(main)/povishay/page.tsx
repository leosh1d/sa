'use client'
import {VStack, Text, Container} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import {VKGallery} from "@/components/vkGallery/vkGallery";

export default function Povishay() {

    return (
        <VStack w='full' pb={24} spacing={4}>


            <Container maxW='container.xl' pb={12}>
                <EventCardFull eventType={'povishay'} title={'повышай'}>
                    <Text>
                        это интеллектуальный квиз с интересными вопросами, увлекательной программой активностей, а также
                        зажигательной дискотекой в конце от студактива бизнес-информатики вшэ</Text>
                    <Text>для каждого следующего выезда мы придумываем новую программу и тематику, чтобы каждый из вас
                        испытал кучу эмоций и с нетерпением ждал следующей весны</Text>
                    {/*<Button disabled colorScheme='zhgut'>регистрация скоро откроется!</Button>*/}
                </EventCardFull>
            </Container>

            <VKGallery albumId={`-164044497_301468823`}/>
        </VStack>

    );
}
