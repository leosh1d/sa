'use client'
import {WrapperProps} from "@/types/base";
import {FC, Suspense, useEffect} from "react";
import {useCommonState} from "@/state/common/commonState";
import {VkIdProvider} from "@/components/auth/vkIdProvider";
import {getUserDataFromVk} from "@/components/auth/getUserDataFromVk";

export const AuthProvider: FC<WrapperProps> = ({children}) => {
    const isAuthorized = useCommonState((state) => state.isAuthorized)
    const setUserInfo = useCommonState((state) => state.setUserInfo)

    useEffect(() => {
        if (isAuthorized) {
            getUserDataFromVk(setUserInfo)
        }
    }, [isAuthorized, setUserInfo]);


    if (!isAuthorized) {
        return <Suspense> <VkIdProvider>{children}</VkIdProvider> </Suspense>
    }
    return <>{children}</>
}