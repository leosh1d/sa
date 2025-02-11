import { create } from 'zustand'
import {AppSlice} from "@/state/common/appSlice/appTypes";
import {appInitialData} from "@/state/common/appSlice/appSlice";

export const useCommonState = create<AppSlice>((set) => ({
    ...appInitialData,
    setVkIdConfig: ((payload) =>
        set({vkIdConfig: payload})
    ),
    setIsAuthorized: ((payload) =>
            set({isAuthorized: payload, isAuthorizedCheck: true})
    ),

    setUserInfo: ((payload) => set({img: payload.user.avatar, name: `${payload.user.first_name} ${payload.user.last_name}`, phone: payload.user.phone,first_name: payload.user.first_name ,last_name: payload.user.last_name})),
}))
