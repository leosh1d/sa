import { extendTheme, defineStyle } from '@chakra-ui/react'
import '@fontsource-variable/roboto-flex/full.css';

const headingFlex = defineStyle({
    fontVariationSettings: `"wdth" 137, "wght" 650, "GRAD" -200, "XOPQ" 122, "XTRA" 533, "YOPQ" 79, "YTAS" 709, "YTDE" -203, "YTFI" 788, "YTLC" 416, "YTUC" 712`,
    fontSize: `3rem`
})

const theme = extendTheme({
    colors: {
        'deepBlue': `#2E3976`
    },
    fonts: {
        heading: `'Roboto Flex Variable', sans-serif`,
        body: `'Roboto Flex Variable', sans-serif`,
    },
    styles: {
        global: {
            body: {
                backgroundColor: '#F3F5FF',
                color: `deepBlue`
            },
        },
    },
    components: {
        Heading: {
            variants: {
                flex: headingFlex
            }
        },
        Text: {
            baseStyle: {
                fontVariationSettings: `"wdth" 116, "wght" 400, "GRAD" 49, "XOPQ" 87, "XTRA" 522, "YOPQ" 95, "YTAS" 750, "YTDE" -203, "YTFI" 788, "YTLC" 501, "YTUC" 738`,
            }
        },
        Button: {
            baseStyle: {
                backgroundColor: 'deepBlue',
                color: `white`,
                fontVariationSettings: `"wdth" 116, "wght" 400, "GRAD" 49, "XOPQ" 87, "XTRA" 522, "YOPQ" 95, "YTAS" 750, "YTDE" -203, "YTFI" 788, "YTLC" 501, "YTUC" 738`,
                borderRadius: '8px',
            }

        }
    }
})

export default theme