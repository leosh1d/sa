import {createMultiStyleConfigHelpers} from "@chakra-ui/react";
import {inputAnatomy} from "@chakra-ui/anatomy";

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(inputAnatomy.keys)


const baseStyle = definePartsStyle({
    field: {
        fontVariationSettings: `"wdth" 116, "wght" 400, "GRAD" 49, "XOPQ" 87, "XTRA" 522, "YOPQ" 95, "YTAS" 750, "YTDE" -203, "YTFI" 560, "YTLC" 501, "YTUC" 738,  "opsz" 16`,
        borderRadius: '16px',
    },
})


export const inputTheme = defineMultiStyleConfig({
    baseStyle,
})
