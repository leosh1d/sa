'use client'
import { useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from "react";
import * as VKID from "@vkid/sdk";
import {actionAfterExchangeCode} from "@/components/auth/actionAfterExchangeCode";
import {setDeviceIdInCookie} from "@/components/auth/setDeviceIdInCookie";
import {useCommonState} from "@/state/common/commonState";

export default function SuccessPage() {
    const params = useSearchParams()
    const code = params.get(`code`)
    const deviceId = params.get(`device_id`)
    const setIsAuthorized = useCommonState((state) => state.setIsAuthorized)
    const router = useRouter()

    useEffect(() => {
        if (code && deviceId && code!="") {
            VKID.Auth.exchangeCode(code, deviceId).then((r) => {
                actionAfterExchangeCode(r).then(() => {
                    setIsAuthorized(true)
                    router.push('/')
                })
            })

            setDeviceIdInCookie(deviceId)
        }


    }, [router, code, deviceId, setIsAuthorized]);


    return null;
}