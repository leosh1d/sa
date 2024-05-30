import { extendTheme, defineStyle } from '@chakra-ui/react'
import '@fontsource-variable/roboto-flex/full.css';

const headingFlex = defineStyle({
    fontVariationSettings: `"wdth" 137, "wght" 650, "GRAD" -200, "XOPQ" 122, "XTRA" 533, "YOPQ" 79, "YTAS" 709, "YTDE" -203, "YTFI" 788, "YTLC" 416, "YTUC" 712, "opsz" 48`,
    fontSize: `3rem`
})

const theme = extendTheme({
    colors: {
        'deepBlue': {
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
        }
    },
    fonts: {
        body: `"Roboto Flex Variable", -apple-system, sans-serif`,
        heading: `"Roboto Flex Variable", -apple-system, sans-serif`,
    },
    styles: {
        global: {
            body: {
                backgroundColor: '#F3F5FF',
                color: `deepBlue.500`,

                fontVariationSettings: `"wdth" 116, "wght" 400, "GRAD" 49, "XOPQ" 87, "XTRA" 522, "YOPQ" 95, "YTAS" 750, "YTDE" -203, "YTFI" 788, "YTLC" 501, "YTUC" 738,  "opsz" 16` ,
            },
        },
    },
    components: {
        Heading: {
            variants: {
                flex: headingFlex
            }
        },
        Button: {
            baseStyle: {
                borderRadius: '8px',
                fontVariationSettings: `"wdth" 116, "wght" 400, "GRAD" 49, "XOPQ" 87, "XTRA" 522, "YOPQ" 95, "YTAS" 750, "YTDE" -203, "YTFI" 788, "YTLC" 501, "YTUC" 738,  "opsz" 16`,
            }

        }
    }
})

export default theme