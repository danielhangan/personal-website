import React from 'react'
import { Date } from '../components/Date'
import {
    Box,
    Heading,
    VStack,
    Text,
    Flex,
    useColorMode,
    Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'
import { CalendarDate } from '@emotion-icons/bootstrap'

export const FeaturedPost = ({ post } : {
    post: {
        slug: string,
        title: string,
        date: string
    }
}) => {
    
    const { colorMode } = useColorMode()
    const bgColor = { light: "white", dark: "black"}


    return (
        <Link href={`/posts/${post.slug}`}>
            <ChakraLink
                w={["100%", "lg"]}
                bgGradient="linear-gradient(to right, #de6262, #ffb88c)"
                borderRadius="5px"
                transition="all .2s ease-in-out"
                _hover={{transform: "scale(1.015)"}}
            >
            <VStack
                alignItems="flex-start"
                bg={bgColor[colorMode]}
                h="200px"
                p={4}
                m={1}
            >
                    <Box>
                        <Heading size="md">{post.title}</Heading>
                    </Box>

                    <Flex direction="row" h="100%" alignItems="end" textAlign="center">
                        <Box display="flex" alignItems="center">
                            <CalendarDate size="25px" />
                            <Text display="flex" ml={2} pt="5px" fontSize="md">
                                <Date dateString={post.date} />
                            </Text>
                        </Box>
                    </Flex>
            </VStack>
            </ChakraLink>
        </Link>
    )
}
