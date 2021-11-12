import { 
    useColorMode,
    Flex,
    Button,
    IconButton,
    Switch,
    HStack,
    Collapse,
    useDisclosure,
    Link as ChakraLink
 } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export const Naviagation = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const { isOpen, onToggle } = useDisclosure()

    return (
        <HStack justify="center">

        {/* Desktop */}
        <Flex 
            w={{base:'2xl', md:'3xl'}} 
            alignItems="center" 
            justifyContent="space-between"
            pt={4}
            pb={8}
        >
                <Flex display={['none', 'none', 'flex', 'flex' ]}>
                        <ChakraLink href="/" m={4} ml={0}>
                            <Button
                                variant="ghost"
                                aria-label="Home"
                                p={4}
                                w="100%"
                                >
                                Home
                            </Button>
                        </ChakraLink>

                        <ChakraLink href="/about" m={4}>
                            <Button
                                variant="ghost"
                                aria-label="Home"
                                p={4}
                                w="100%"
                                >
                                About
                            </Button>
                        </ChakraLink>

                        <ChakraLink href="/contact" m={4}>
                            <Button
                                variant="ghost"
                                aria-label="Home"
                                p={4}
                                w="100%"
                                >
                                Contact
                            </Button>
                        </ChakraLink>
                </Flex>
                <IconButton
                    aria-label="Open Menu"
                    mr={4}
                    icon={<HamburgerIcon />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={onToggle}
                    />
                <Switch 
                    color="green"
                    isChecked={isDark}
                    onChange={toggleColorMode}
                    />
            </Flex>

            {/* Mobile */}
            <Collapse in={isOpen} animateOpacity>
            <Flex
                w="100vw"
                h="100vh"
                bgColor="gray.50"
                zIndex={20}
                pos="fixed"
                top="0"
                left="2"
                overflowY="auto"
                flexDir="column"
            >
                <Flex justify="flex-start" p={4}>
                    <IconButton
                        aria-label="Close Menu"
                        icon={
                            <CloseIcon />
                        }
                        onClick={onToggle}
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="flex-start"
                    p={4}
                >
                    <ChakraLink href="/">
                        <Button
                            justifyContent="flex-start"
                            variant="ghost"
                            aria-label="Home"
                            p={2}
                            my={2}
                            w="100vw"
                        >
                           Home
                        </Button>
                    </ChakraLink>

                    <ChakraLink href="/about">
                        <Button
                            justifyContent="flex-start"
                            variant="ghost"
                            aria-label="sHome"
                            p={2} 
                            my={2}
                            w="100vw"
                        >
                            About
                        </Button>
                    </ChakraLink>

                    <ChakraLink href="/contact">
                        <Button
                            justifyContent="flex-start"
                            variant="ghost"
                            aria-label="Home"
                            p={2}
                            my={2}
                            w="100vw"
                        >
                            Contact
                        </Button>
                    </ChakraLink>
                </Flex> 
            </Flex>
            </Collapse>
        </HStack>
    )
} 