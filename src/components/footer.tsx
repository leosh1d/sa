import {Container, HStack, Link, Text} from "@chakra-ui/react";
import {Tg} from "@/assets/icons/tg";
import {Vk} from "@/assets/icons/vk";
import NextLink from "next/link";

export const Footer = () => {
    return <Container maxW='container.xl'>

        <HStack pb={4} pt={16} justifyContent='space-between'>

            <Link as={NextLink} textDecoration='underline' target='_blank' href='/docs'>документы</Link>
            <Text w='full' textAlign='center'>

                made by <Link as={NextLink} textDecoration='underline' target='_blank'
                              href='https://t.me/leosh1d'>@leosh1d</Link> & <Link
                target='_blank' textDecoration='underline' href='https://t.me/kruzhovv'>@kruzhovv</Link></Text>
            <HStack>
                <Link as={NextLink} href='https://vk.com/studaktiv_bi'>
                    <Vk h='8' w='8'/>
                </Link>
                <Link as={NextLink} href='https://t.me/studaktivbi'>
                    <Tg h='8' w='8'/>
                </Link>
            </HStack>
        </HStack>

    </Container>
}