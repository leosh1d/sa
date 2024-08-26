import MarkdownInit, {MarkdownToJSX} from "markdown-to-jsx";
import {FC} from "react";
import {Heading, Text} from "@chakra-ui/react";

export const Markdown:FC<{
    [key: string]: any;
    children: string;
    options?: MarkdownToJSX.Options;
}> = ({key, children, options})=> {
    return <MarkdownInit children={children} key={key} options={{
        ...options,

        overrides: {
            h1: Heading,
            h2: Heading,
            h3: Heading,
            h4: Heading,
            h5: Heading,
            h6: Heading,
            p: Text,
        },
    }}/>
}