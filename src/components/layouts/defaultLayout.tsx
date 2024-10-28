'use client'
import {Container, Flex} from "@chakra-ui/react";
import {WrapperProps} from "@/types/base";
import {FC} from "react";
import {Header} from "@/components/header/header";
import {Footer} from "@/components/footer";

export const DefaultLayout:FC<WrapperProps> = ({children})=> {
    return <Container maxW='full' minH='100vh' p={0}>
        <Flex direction='column' justifyContent='space-between' minH='100vh'>
        <Header/>
        {children}
        <Footer />
        </Flex>

</Container>
}