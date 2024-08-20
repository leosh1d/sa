import {ReactNode} from "react";

export interface WrapperProps {
    children: ReactNode;
}
export interface Page {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}