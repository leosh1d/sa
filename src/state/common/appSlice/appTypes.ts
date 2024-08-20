import {Config} from "@vkid/sdk/dist-sdk/types/core/config";
import {UserInfoResult} from "@vkid/sdk";

export interface AppSliceData {
    vkIdConfig: Config | undefined;
    isAuthorized: boolean,
    img: string | undefined;
    name: string | undefined;
}

export interface AppSliceActions {
    setVkIdConfig: (payload: Config) => void;
    setIsAuthorized: (payload: boolean) => void;
    setUserInfo: (payload: UserInfoResult) => void;
}

export interface AppSlice extends AppSliceData, AppSliceActions {}