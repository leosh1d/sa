"use client"
import {Container, Flex} from "@chakra-ui/react";
import {Logo} from "@/components/logo";
import {Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import {UserIcon} from "@/components/header/userIcon";
import {useEffect} from "react";
import {getUserDataFromVk} from "@/components/auth/getUserDataFromVk";
import {useCommonState} from "@/state/common/commonState";

export const Header = () => {
    const {vkIdConfig, isAuthorized, setUserInfo, name} = useCommonState()

    useEffect(() => {
        if (isAuthorized && vkIdConfig !== undefined && name === undefined) {
            getUserDataFromVk(setUserInfo)
        }
    }, [isAuthorized, name, setUserInfo, vkIdConfig]);


    return <Container maxW='container.xl'>

        <Flex justifyContent="space-between" alignItems="center" py={4} gap={5}>
            <Link as={NextLink} href="/">
                <Logo boxSize={24}/>
            </Link>

            {/*<Link href={'/account'}>*/}
            {/*    <Text>проходки</Text>*/}
            {/*</Link>*/}

            <UserIcon/>
        </Flex>
    </Container>

}