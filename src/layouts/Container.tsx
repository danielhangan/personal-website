import React from "react";
import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

import { Naviagation } from "../components/Navigation";
import { Footer } from "../components/Footer";


export default function ContainerLayout({
    children,
} : {
    children: React.ReactNode,
}) {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'gray.50', dark: 'gray.900'}

    const color = { light: 'black', dark: 'white'}

    return (
        <Flex
            direction="column"
            alignItems="center"
            h="auto"
            px={6}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
        >
            <Naviagation />
                {children}
            <Footer />
        </Flex>
    )
}