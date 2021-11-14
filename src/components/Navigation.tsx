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
        <Flex 
            w={{base:'2xl', md:'3xl'}} 
            alignItems="center" 
            justifyContent="space-between"
            pt={4}
            pb={8}
        >
                <Flex display={['none', 'none', 'flex', 'flex' ]}>
                        <Link href="/">
                            <Button
                                m={4}
                                ml={0}
                                p={4}
                                aria-label="Home"
                                w="100%"
                                color="brand.gray600"
                                fontWeight="lighter"
                                >
                                Home
                            </Button>
                        </Link>

                        <Link href="/posts">
                            <Button
                                m={4}
                                p={4}
                                aria-label="Blog"
                                w="100%"
                                color="brand.gray600"
                                fontWeight="lighter"
                                >
                                Blog
                            </Button>
                        </Link>

                        <Link href="/resume">
                            <Button
                                m={4}
                                p={4}
                                aria-label="Resume"
                                w="100%"
                                color="brand.gray600"
                                fontWeight="lighter"
                                >
                                Resume
                            </Button>
                        </Link>
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
                    <Link href="/">
                        <Button
                            justifyContent="flex-start"
                            aria-label="Home"
                            p={2}
                            my={2}
                            w="100vw"
                            color="brand.gray600"
                            fontWeight="lighter"
                        >
                           Home
                        </Button>
                    </Link>

                    <Link href="/about">
                        <Button
                            justifyContent="flex-start"
                            aria-label="sHome"
                            p={2} 
                            my={2}
                            w="100vw"
                            color="brand.gray600"
                            fontWeight="lighter"
                        >
                            About
                        </Button>
                    </Link>

                    <Link href="/contact">
                        <Button
                            justifyContent="flex-start"
                            aria-label="Home"
                            p={2}
                            my={2}
                            w="100vw"
                            color="brand.gray600"
                            fontWeight="lighter"
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