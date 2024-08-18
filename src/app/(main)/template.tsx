import {WrapperProps} from "@/types/base";
import {DefaultLayout} from "@/components/layouts/defaultLayout";

export default function RootTemplate ({children}: WrapperProps) {
    return <DefaultLayout>
        {children}
    </DefaultLayout>
}