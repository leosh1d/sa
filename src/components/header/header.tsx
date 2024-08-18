"use client"
import {Flex} from "@chakra-ui/react";
import {Logo} from "@/components/logo";
import {UserIcon} from "@/components/header/userIcon";
import {Link} from '@chakra-ui/next-js'

export const Header = () => {
    return <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Link href="/">
            <Logo boxSize={24}/>
        </Link>

        <UserIcon/>
    </Flex>
}