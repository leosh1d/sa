'use client'
import {Container} from "@chakra-ui/react";
import {WrapperProps} from "@/types/base";
import {FC} from "react";
import {Header} from "@/components/header/header";
import {Footer} from "@/components/footer";

export const DefaultLayout:FC<WrapperProps> = ({children})=> {
    return <Container maxW='container.xl'>
        <Header/>
        {children}
        <Footer/>
    </Container>
}