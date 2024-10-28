'use client'
import {VStack, Text, Container} from "@chakra-ui/react";
import {EventCardFull} from "@/components/events/eventCard";
import {VKGallery} from "@/components/vkGallery/vkGallery";

export default function Lpf() {

    return (
        <VStack w='full' pb={24} spacing={4}>

            <Container maxW='container.xl' pb={12}>
                <EventCardFull eventType={'lpf'} title={'летний поход факультета'}>
                    <Text>
                        лпф — традиционный поход факультета высшей школы бизнеса ниу вшэ. в первые выходные после окончания летней сессии все студенты, выпускники и преподаватели собирают рюкзаки, готовят палатки и спальники и отправляются на поляну в хотьково, чтобы как следует отдохнуть на природе. уже много лет студактив организовывает мероприятие, где можно развлечься после недели экзаменов, найти новых друзей и встретить старых, спеть песни под гитару и приготовить походную еду на костре, а главное прочувствовать теплую атмосферу студенчества. все, кто хоть раз был на лпф скажут, что они испытали море эмоций и хотят приехать еще.</Text>
                    {/*<Button disabled colorScheme='zhgut'>регистрация скоро откроется!</Button>*/}
                </EventCardFull>
            </Container>

            <VKGallery albumId={`-181838664_292788722`}/>
        </VStack>

    );
}
