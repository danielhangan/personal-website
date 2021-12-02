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
                w="sm"
                bgGradient="conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1"
                borderRadius="5px"
            >
            <VStack
                alignItems="flex-start"
                bg={bgColor[colorMode]}
                h={["150px", "250px"]}
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
