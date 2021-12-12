import { 
    useColorMode,
    Flex,
    Button,
    IconButton,
    Switch,
    HStack,
    Collapse,
    useDisclosure,
    Box,
    Link as ChakraLink
 } from '@chakra-ui/react'
import Link from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export const Naviagation = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const menuColor = { light: 'gray.50', dark: 'brand.gray900'}
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Flex w="100%">
        <HStack
            w="100%"
            alingItems="center"
            justifyContent="space-between"
            pt={4}
            pb={8}
        >
                <Flex display={['none', 'none', 'flex', 'flex' ]}>
                        <Link href="/">
                            <Button
                                ml={0}
                                pl={3}
                                aria-label="Home"
                                >
                                Home
                            </Button>
                        </Link>

                        <Link href="/posts">
                            <Button
                                aria-label="Blog"
                                >
                                Blog
                            </Button>
                        </Link>

                        <Link href="/projects">
                            <Button
                                aria-label="Projects"
                                >
                                Projects
                            </Button>
                        </Link>

                        <Link href="/contact">
                            <Button
                                aria-label="Contact"
                                >
                                Contact
                            </Button>
                        </Link>
                </Flex> 
                    <IconButton
                        aria-label="Open Menu"
                        icon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                        onClick={onToggle}
                        />
                    <Switch
                        isChecked={isDark}
                        onChange={toggleColorMode}
                        />
            </HStack>

            {/* Mobile */}
            <Collapse in={isOpen} animateOpacity>
            <Flex
                w="100vw"
                h="100vh"
                bg={menuColor[colorMode]}
                zIndex={20}
                pos="fixed"
                top="0"
                left="2"
                overflowY="auto"
                flexDir="column"
            >
                <Flex justify="flex-start" pl={4} mt={4}>
                    <IconButton
                        aria-label="Close Menu"
                        icon={
                            <CloseIcon />
                        }
                        onClick={onToggle}
                    />
                </Flex>
                <Flex
                    w="100%"
                    flexDir="column"
                    align="flex-start"
                    p={4}
                >
                    <Link href="/">
                        <Button
                            w="95%"
                            justifyContent="flex-start"
                            aria-label="Home"
                            p={2}
                            my={2}
                        >
                           Home
                        </Button>
                    </Link>

                    <Link href="/posts">
                        <Button
                            w="95%"
                            justifyContent="flex-start"
                            aria-label="Blog"
                            p={2} 
                            my={2}
                        >
                            Blog
                        </Button>
                    </Link>

                    <Link href="/projects">
                        <Button
                            w="95%"
                            justifyContent="flex-start"
                            aria-label="projects"
                            p={2}
                            my={2}
                        >
                            Projects
                        </Button>
                    </Link>

                    <Link href="/contact">
                        <Button
                            w="95%"
                            justifyContent="flex-start"
                            aria-label="Contact"
                            p={2}
                            my={2}
                        >
                            Contact
                        </Button>
                    </Link>

                </Flex> 
            </Flex>
            </Collapse>
        </Flex>
    )
} 