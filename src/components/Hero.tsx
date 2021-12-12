import {
    Heading,
    Text,
    HStack,
    VStack,
    Box,
    Flex,
    Image,
    Link as ChakraLink,
    useColorMode 
} from '@chakra-ui/react'
import { Article } from 'emotion-icons/material'
import { Twitter, Github } from 'emotion-icons/bootstrap'


export const Hero = ({
    name,
    job_title,
    company,
    description,
    github,
    twitter
} : {
    name: string,
    job_title: string,
    company: string,
    description: string,
    github: string,
    twitter: string
}) => {
    const { colorMode } = useColorMode()
    const iconColor = { light: 'white', dark: '#171923'}

    return (
        <VStack 
            alignItems="flex-start"
            spacing={12}
            pt={12}
        >
        <Flex 
            direction={['column', 'row']} 
            alignItems={['flex-start', 'center']}

        >
            <Box 
                bgGradient="linear-gradient(to right, #de6262, #ffb88c)"
                borderRadius="full"
                mr={[0, 4, 4]}
                mb={[4, 0 ,0]}
            >
                <Image 
                    p={1}
                    src="/images/profile.jpeg"
                    boxSize="100px"
                    borderRadius="full"
                />
            </Box>

            <Box>
                <VStack
                    alignItems="flex-start" 
                >
                    <Heading size="xl">
                        {name} 
                    </Heading>

                    <Text fontSize="lg">
                        {job_title} @ 
                        <ChakraLink href="https://radicleinsights.com">{company}</ChakraLink>
                    </Text>
                </VStack>

            </Box>
        </Flex>

        <Box>
            <Text fontSize="xl">
                {description}
            </Text>
        </Box>

            <HStack w="75%" spacing={8}>
                <Flex alignItems="center" direction={["column", "row"]}>
                    <Box
                        borderRadius="10px"
                        bgGradient="linear-gradient(to right, #de6262, #ffb88c)"
                        p={1}
                    >
                        <Article color={iconColor[colorMode]} size="25px" />
                    </Box>
                    <ChakraLink href="/posts" fontSize="lg" ml={1}>
                       Posts
                    </ChakraLink>
                </Flex>

                <Flex alignItems="center" direction={["column", "row"]}>
                    <Box
                        borderRadius="10px"
                        bgGradient="linear-gradient(to right, #de6262, #ffb88c)"
                        p={1}
                    >
                        <Github color={iconColor[colorMode]} size="25px" />
                    </Box>
                    <ChakraLink href={github} fontSize="lg" ml={1} isExternal>
                        Github
                    </ChakraLink>
                </Flex>

                <Flex alignItems="center" direction={["column", "row"]}>
                    <Box
                        borderRadius="10px"
                        bgGradient="linear-gradient(to right, #de6262, #ffb88c)"
                        p={1}
                    >
                        <Twitter color={iconColor[colorMode]} size="25px" />
                    </Box>
                    <ChakraLink href={twitter} fontSize="lg" ml={1} isExternal>
                        Twitter
                    </ChakraLink>
                </Flex>
            </HStack>
        </VStack>
    )
}

Hero.defaultProps = {
    name: 'Daniel Hangan',
    job_title: "Python Software Engineer",
    company: 'Radicle Insights',
    description: 'Heey. Great to see you here. I work in tech but I share anything that might help people grow, learn, become more mindful and healty.',
    github: 'https://github.com/danielhangan',
    twitter: 'https://twitter.com/HanganDaniel'
}