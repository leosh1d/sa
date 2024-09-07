"use client"
import {Flex, Text} from "@chakra-ui/react";
import {Logo} from "@/components/logo";
import {Link} from '@chakra-ui/next-js'

export const Header = () => {
    return <Flex justifyContent="space-between" alignItems="center" py={4} gap={5}>
        <Link href="/">
            <Logo boxSize={24}/>
        </Link>

        <Link href={'/account'}>
            <Text>проходки</Text>
        </Link>

        {/*<UserIcon/>*/}
    </Flex>
}