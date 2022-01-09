import React from "react";
import { Flex, VStack, useColorMode, FlexProps } from "@chakra-ui/react";

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
            h="100%"
            minH="950px"
            px={6}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
        >
        <VStack 
            h="100%"
            w={{base: '100%', md:'2xl'}}
            spacing={12}
        >
            <Naviagation />
                {children}
            {/* <Footer /> */}
        </VStack>
        </Flex>
    )
}