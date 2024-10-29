'use client'
import {WrapperProps} from "@/types/base";
import {FC, Suspense} from "react";
import {useCommonState} from "@/state/common/commonState";
import {VkIdProvider} from "@/components/auth/vkIdProvider";

export const AuthProvider: FC<WrapperProps> = ({children}) => {
    const isAuthorized = useCommonState((state) => state.isAuthorized)



    if (!isAuthorized) {
        return <Suspense> <VkIdProvider>{children}</VkIdProvider> </Suspense>
    }
    return <>{children}</>
}