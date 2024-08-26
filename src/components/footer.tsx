import {HStack, Link, Text, VStack} from "@chakra-ui/react";
import {Vk} from "@/assets/icons/vk";
import {Tg} from "@/assets/icons/tg";

export const Footer = ()=> {
    return <VStack pb={4}>
        <HStack>
            <Link href='https://vk.com/studaktiv_bi'>
                <Vk h='16' w='16'/>
            </Link>
            <Link href='https://t.me/studaktivbi'>
                <Tg h='16' w='16'/>
            </Link>

        </HStack>
    <Text  w='full' textAlign='center'>made by <Link textDecoration='underline' target='_blank' href='https://t.me/leosh1d'>@leosh1d</Link> & <Link target='_blank' textDecoration='underline' href='https://t.me/kruzhovv'>@kruzhovv</Link></Text>
        <Text w='full' textAlign='center'>copyright студактив)</Text>

    </VStack> }