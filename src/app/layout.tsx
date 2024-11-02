import {Providers} from "@/app/(main)/providers";


import {Roboto_Flex} from 'next/font/google'
import {WrapperProps} from "@/types/base";
import Script from "next/script";

const roboto_flex = Roboto_Flex({
    subsets: ["latin", "cyrillic"], variable: '--font-robotoFlex',
    axes: ['GRAD', 'XOPQ', 'XTRA', 'YOPQ', 'YTAS', 'YTDE', 'YTFI', 'YTLC', 'YTUC', 'opsz', 'slnt', 'wdth']
});


export default function RootLayout({
                                       children,
                                   }: WrapperProps
) {
    return (
        <html lang="ru" className={roboto_flex.className}>
        <head>
            <title>студактив</title>
            <meta
                name="description"
                content="студактив бизнес информатики"/>
            <Script
                id="inline-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    <!-- Yandex.Metrika counter -->
                    <script type="text/javascript" >
                       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                       m[i].l=1*new Date();
                       for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                       k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                    
                       ym(97446082, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                       });
                    </script>
                    <noscript><div><img src="https://mc.yandex.ru/watch/97446082" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                    <!-- /Yandex.Metrika counter -->    `,
                }}
            />        </head>
        <body><Providers>
            {children}
        </Providers></body>
        </html>

    );
}
