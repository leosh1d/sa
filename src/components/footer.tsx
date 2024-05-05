import {Stack, Text, Link} from '@chakra-ui/react'
export const Footer = ()=> {
    return <Stack  w={`full`}>
        <Text fontSize={'3rem'} fontWeight={`bold`} color={'#14FFF1'}>Copyright SABI Disigned by <Link href={'https://t.me/kruzhovv'} textDecoration={`underline`}>@kruzhovv</Link>, created by <Link href={'https://t.me/leosh1d'} textDecoration={`underline`}>@leosh1d</Link></Text>
    </Stack>;
}