import {Container, HStack, Link, Text} from "@chakra-ui/react";
import {Tg} from "@/assets/icons/tg";
import {Vk} from "@/assets/icons/vk";

export const Footer = () => {
    return <Container maxW='container.xl'>

        <HStack pb={4} pt={16} justifyContent='space-between'>

            <Link textDecoration='underline' target='_blank' href='https://docs.google.com/document/d/1Px0K5OMevtgZlM4Iydj3Mdm2Zn9AjA-WDYcWKZTlnM0/edit?usp=sharing'>документы</Link>
            <Text w='full' textAlign='center'>

                made by <Link textDecoration='underline' target='_blank'
                              href='https://t.me/leosh1d'>@leosh1d</Link> & <Link
                target='_blank' textDecoration='underline' href='https://t.me/kruzhovv'>@kruzhovv</Link></Text>
            <HStack>
                <Link href='https://vk.com/studaktiv_bi'>
                    <Vk h='8' w='8'/>
                </Link>
                <Link href='https://t.me/studaktivbi'>
                    <Tg h='8' w='8'/>
                </Link>
            </HStack>
        </HStack>

    </Container>
}