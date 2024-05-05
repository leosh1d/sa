import { extendTheme } from '@chakra-ui/react'
import '@fontsource/comic-neue'

const theme = extendTheme({
    fonts: {
        heading: `'Comic Neue', sans-serif`,
        body: `'Comic Neue', sans-serif`,
    },
})

export default theme