'use client'

import {ChakraProvider} from '@chakra-ui/react'
import theme from "@/app/(main)/theme";
import {WrapperProps} from "@/types/base";
import {FC} from "react";
import {AuthProvider} from "@/components/auth/authProvider";

export const Providers: FC<WrapperProps> = ({children}) => {
    return <AuthProvider>
        <ChakraProvider theme={theme}>
                {children}
        </ChakraProvider>

    </AuthProvider>
}
