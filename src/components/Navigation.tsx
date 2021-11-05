import { useState } from 'react'
import { 
    useColorMode,
    Flex,
    Stack,
    Button,
    Link as ChakraLink
 } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export const Naviagation = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [ display, changeDisplay ] = useState('none')

    return (
        <Flex m={7} pt={4} pb={8} alignItems="flex-start">
            <Stack direction="row" spacing={4}>
                <Button size="sm" variant="ghost">
                    <ChakraLink
                        href="/"
                        flexGrow={3}
                        mx={2}
                    >
                        Home
                    </ChakraLink>
                </Button>

                <Button size="sm" variant="ghost">
                    <ChakraLink
                        href="/about"
                        flexGrow={3}
                        mx={2}
                    >
                        About
                    </ChakraLink>
                </Button>

                <Button size="sm" variant="ghost">
                    <ChakraLink
                        href="/contact"
                        flexGrow={3}
                        mx={2}
                    >
                        Contact
                    </ChakraLink>
                </Button>
            </Stack>
        </Flex>
    )
} 