import {extendTheme} from "@chakra-ui/react";
import '@fontsource-variable/plus-jakarta-sans'
import {Heading} from "./components/heading.ts";
import themeColors from "./foundations/colors.ts";
import layerStyles from "./foundations/layer-styles.ts";
import shadowsTheme from './foundations/shadows.ts';
import fontSizes from "./foundations/font-sizes.ts";
import textStyles from "./foundations/text-styles.ts"
import {Button} from "./components/button.ts";
import global from "./foundations/global-styles.ts";

const myTheme: Record<string, any> = extendTheme({
    colors: themeColors,
    components: {
        Button,
        Heading
    },
    fonts: {
        heading: `'Plus Jakarta Sans Variable', sans-serif`,
        body: `'Plus Jakarta Sans Variable', sans-serif`
    },
    fontSizes: fontSizes,
    styles: {
        global
    },
    layerStyles: layerStyles,
    textStyles: textStyles,
    shadowsTheme
})

export default myTheme