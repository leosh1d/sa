import type {Metadata} from "next";
import {Providers} from "@/app/(main)/providers";

import { Roboto_Flex } from 'next/font/google'
import {WrapperProps} from "@/types/base";

const roboto_flex = Roboto_Flex({ subsets: ["latin", "cyrillic"],  variable: '--font-robotoFlex',
axes: ['GRAD', 'XOPQ', 'XTRA', 'YOPQ', 'YTAS', 'YTDE', 'YTFI', 'YTLC', 'YTUC', 'opsz', 'slnt', 'wdth']
});

export const metadata: Metadata = {
    title: "студактив",
    description: "студактив бизнес информатики",
};


export default function RootLayout({
                                       children,
                                   }: WrapperProps
) {
    return (
            <html lang="ru" className={roboto_flex.className}>
                <body><Providers>
                            {children}
                </Providers></body>
            </html>

    );
}
