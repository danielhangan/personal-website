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
import Link from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export const Naviagation = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const { isOpen, onToggle } = useDisclosure()

    return (
        <HStack justify="center">
        {/* Desktop */}
        {/* TODO: responsive Flex for IconButton (maybe from default theme) */}
        <Flex 
            w={{base:'2xl',md:'3xl'}}
            alignItems="center"
            justifyContent="space-between"
            pt={4}
            pb={8}
        >
                <Flex display={['none', 'none', 'flex', 'flex' ]} mt={2}>
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

                        <Link href="/resume">
                            <Button
                                aria-label="Resume"
                                >
                                Resume
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
                    w="100%"
                    justifyContent="flex-start"
                    aria-label="Open Menu"
                    mr={4}
                    icon={<HamburgerIcon />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={onToggle}
                    />
                <Switch
                    // w="100vw"
                    // justifyContent="right"
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
                    <Link href="/">
                        <Button
                            justifyContent="flex-start"
                            aria-label="Home"
                            p={2}
                            my={2}
                            vw="100%"
                        >
                           Home
                        </Button>
                    </Link>

                    <Link href="/posts">
                        <Button
                            justifyContent="flex-start"
                            aria-label="Blog"
                            p={2} 
                            my={2}
                            vw="100%"
                        >
                            Blog
                        </Button>
                    </Link>

                    <Link href="/projects">
                        <Button
                            justifyContent="flex-start"
                            aria-label="projects"
                            p={2}
                            my={2}
                            vw="100%"
                        >
                            Projects
                        </Button>
                    </Link>

                    <Link href="/resume">
                        <Button
                            justifyContent="flex-start"
                            aria-label="Resume"
                            p={2}
                            my={2}
                            vw="100%"
                        >
                            Resume
                        </Button>
                    </Link>

                    <Link href="/contact">
                        <Button
                            justifyContent="flex-start"
                            aria-label="Contact"
                            p={2}
                            my={2}
                            vw="100%"
                        >
                            Contact
                        </Button>
                    </Link>

                </Flex> 
            </Flex>
            </Collapse>
        </HStack>
    )
} 