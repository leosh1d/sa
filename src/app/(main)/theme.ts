import { extendTheme, defineStyle, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { avatarAnatomy } from '@chakra-ui/anatomy'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(avatarAnatomy.keys)

const headingFlex = defineStyle({
    fontVariationSettings: `"wdth" 137, "wght" 650, "GRAD" -200, "XOPQ" 122, "XTRA" 533, "YOPQ" 79, "YTAS" 709, "YTDE" -203, "YTFI" 560, "YTLC" 416, "YTUC" 712, "opsz" 48`,
    fontSize: `3rem`
})

const d1 = defineStyle({
        fontVariationSettings: `"wdth" 117, "wght" 800, "GRAD" -200, "XOPQ" 96, "XTRA" 500, "YOPQ" 48, "YTAS" 750, "YTDE" -203, "YTFI" 560, "YTLC" 460, "YTUC" 712, "opsz" 48`,
        fontSize: `3rem`
    }
)


const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        'zhgut': {
            50: `#5E6DC1`,
            100: `#4D5DBA`,
            200: `#4352AB`,
            300: `#3C4A99`,
            400: `#354187`,
            500: `#2E3976`,
            600: `#242C5C`,
            700: `#212854`,
            800: `#1D244C`,
            900: `#1A2043`
        },
        'lobotomia': {
                "50": "#FFE5ED",
                "100": "#FFB8CD",
                "200": "#FF8AAD",
                "300": "#FF5C8D",
                "400": "#FF2E6C",
                "500": "#FF004C",
                "600": "#CC003D",
                "700": "#99002E",
                "800": "#66001F",
                "900": "#33000F"
        },
        'scumbria': `#B7C2D9`,
        'fentanylLight': '#F7F8FF'
    },
    fonts: {
        heading: 'var(--font-robotoFlex)',
        body: 'var(--font-robotoFlex)',
    },

    styles: {
        global: {
            body: {
                backgroundColor: '#F3F5FF',
                color: `zhgut.500`,

                fontVariationSettings: `"wdth" 116, "GRAD" 49, "XOPQ" 87, "XTRA" 522, "YOPQ" 95, "YTAS" 750, "YTDE" -203, "YTFI" 560, "YTLC" 501, "YTUC" 738,  "opsz" 16` ,
            },
        },
    },
    components: {
        Heading: {
            defaultProps: {
                variant: 'd1'
            },
            variants: {
                flex: headingFlex, d1: d1
            }
        },
        Button: {
            baseStyle: {
                borderRadius: '16px',
                fontVariationSettings: `"wdth" 116, "wght" 400, "GRAD" 49, "XOPQ" 87, "XTRA" 522, "YOPQ" 95, "YTAS" 750, "YTDE" -203, "YTFI" 560, "YTLC" 501, "YTUC" 738,  "opsz" 16`,
            }

        }
    }
})

export default theme