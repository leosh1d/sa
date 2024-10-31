'use client'
import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from "react";
import {setDeviceIdInCookie} from "@/components/auth/setDeviceIdInCookie";
import {useCommonState} from "@/state/common/commonState";
import {exchangeCode} from "@/components/auth/exchangeCode";

// export const fetchCache = 'force-no-store'

export default function SuccessPage() {
    const params = useSearchParams()
    const code = params.get(`code`)
    const deviceId = params.get(`device_id`)
    const setIsAuthorized = useCommonState((state) => state.setIsAuthorized)
    const router = useRouter()
    const isAuthorized = useCommonState((state) => state.isAuthorized)
    const vkIdConfig = useCommonState((state) => state.vkIdConfig)

    useEffect(() => {
        if (code && deviceId && code != "" && !isAuthorized && vkIdConfig !== undefined) {
            exchangeCode({configString: JSON.stringify(vkIdConfig.get()), code, deviceId}).then(() => {
                setIsAuthorized(true)
                router.push('/')
            })
            setDeviceIdInCookie(deviceId)
        }

    }, [router, code, deviceId, setIsAuthorized, isAuthorized, vkIdConfig]);

    return <></>;
}

