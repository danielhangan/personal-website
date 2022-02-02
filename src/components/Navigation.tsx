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
import { useRouter } from 'next/router'
import DarkModeSwitch from './DarkModeSwitch'

export const Naviagation = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const menuColor = { light: 'gray.50', dark: 'brand.gray900'}
    const { isOpen, onToggle } = useDisclosure()
    const router = useRouter()

    let currentPath = router.route.split("/")[1]

    currentPath === "" ? currentPath = "home" : currentPath

    return (
        <Flex w={{base: '100%', md:"700px"}}>
        <HStack
            w="100%"
            alignItems="center"
            justifyContent="space-between"
            pt={4}
            pb={8}
        >
                <Flex display={['none', 'none', 'flex', 'flex' ]}>
                        <Link href="/" passHref>
                            <Button
                                fontWeight={currentPath === "home" ? "bold" : "normal"}
                                aria-label="Home"
                                >
                                Home
                            </Button>
                        </Link>

                        <Link href="/posts" passHref>
                            <Button
                                fontWeight={currentPath === "posts" ? "bold" : "normal"}
                                aria-label="Blog"
                                >
                                Posts
                            </Button>
                        </Link>

                        <Link href="https://danielhangan.notion.site/Daniel-Hangan-Software-Engineer-c72811ac4c3f4b739c5d3e167046086b" passHref>
                            <Button
                                aria-label="Resume"
                                >
                                Resume
                            </Button>
                        </Link>
                </Flex> 
                    <IconButton
                        aria-label="Open Menu"
                        ml="0 !important"
                        icon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                        onClick={onToggle}
                    />
                    <DarkModeSwitch />
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
                    <Link href="/" passHref>
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

                    <Link href="/posts" passHref>
                        <Button
                            w="95%"
                            justifyContent="flex-start"
                            aria-label="Blog"
                            p={2} 
                            my={2}
                        >
                            Posts
                        </Button>
                    </Link>
                    <Link href="https://danielhangan.notion.site/Daniel-Hangan-Software-Engineer-c72811ac4c3f4b739c5d3e167046086b" passHref>
                        <Button
                            w="95%"
                            justifyContent="flex-start"
                            aria-label="Resume"
                            p={2}
                            my={2}
                            >
                            Resume
                        </Button>
                    </Link>
                </Flex> 
            </Flex>
            </Collapse>
        </Flex>
    )
} 