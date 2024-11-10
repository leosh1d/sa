'use client'
import {Container, Flex, Text} from "@chakra-ui/react";
import {WrapperProps} from "@/types/base";
import {FC} from "react";
import {useCommonState} from "@/state/common/commonState";
import {VkIdOneTap} from "@/components/auth/vkIdOneTap";

export const AuthLayout: FC<WrapperProps> = ({children}) => {
    const isAuthorized = useCommonState((state) => state.isAuthorized)
    const isAuthorizedCheck = useCommonState((state) => state.isAuthorizedCheck)

    if (!isAuthorized && isAuthorizedCheck) {
        return <Container maxW='full' minH='100vh' p={0} as={Flex} justifyContent='center' alignItems='center' flexDirection='column' gap={4}>
            <Text>
                войди через вк чтобы пользоваться сайтом
            </Text>
            <VkIdOneTap/>
        </Container>
    }

    return <>
        {children}
    </>
}