'use client'
import {WrapperProps} from "@/types/base";
import {FC, Suspense} from "react";
import {VkIdProvider} from "@/components/auth/vkIdProvider";

export const AuthProvider: FC<WrapperProps> = ({children}) => {

        return <Suspense> <VkIdProvider>{children}</VkIdProvider> </Suspense>

}