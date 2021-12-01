import React from 'react'
import { Date } from '../components/Date'
import {
    Box,
    Heading,
    VStack,
    Text,
    Flex
} from '@chakra-ui/react'
import { CalendarDate } from '@emotion-icons/bootstrap'

export const FeaturedPost = ({ post } : {
    post: {
        slug: string,
        title: string,
        date: string
    }
}) => {
    return (
        <VStack
            w="sm"
            alignItems="flex-start"
            h={["150px", "250px"]}
            borderRadius="10px"
            borderWidth="5px"
            p={4}
            // mr={2}
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
    )
}
