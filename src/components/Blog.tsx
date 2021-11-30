import React from "react";

import ContainerLayout from "../layouts/Container";
import { Main } from '../components/Main'
import { Date } from '../components/Date'
import {
    Heading,
    Box,
    Text,
    Flex,
    VStack,
    Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'


export const Blog = ({ posts, home } : { posts?: any, home? : React.ReactNode }) => {

    return (
        <>
        {home? (
            <Text>3 posts</Text>
        ) : (
        <ContainerLayout>

            <Main>
                <VStack
                    w={{base:'100%', md:'3xl'}}
                    alignItems="flex-start"
                    pl={3}
                    spacing={12}
                    >
                    <Box>
                        <Heading size="xl" mb={4}>Blog</Heading>
                        <Text>
                            I have been writing casually about programming, health and productivity.
                            You can find more articles on my <ChakraLink fontWeight="bold" href="https://danielhangan.medium.com/">
                                 medium page.
                            </ChakraLink>
                        </Text>
                    </Box>

                    <Box w="100%">
                        <Heading size="xl" mb={4}>All Posts</Heading>
                        {posts.map((post) => (
                            <Box key={post.id} mb={6}>
                                    <Flex
                                        direction={{base: 'column', md:'row'}}
                                        mb={2}
                                        >
                                        <Heading size="md" w={{base: 'auto', md:'75%'}}>
                                            <Link href={`/posts/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </Heading>
                                        <Text w={{base: 'auto', md:'25%'}} textAlign={["start", "start", "end"]} fontSize="sm">
                                            <Date dateString={post.date}/>
                                        </Text>
                                    </Flex>

                                    <Text>{post.description}</Text>
                            </Box>
                        ))} 
                    </Box>  
                </VStack>
            </Main>
        </ContainerLayout>
        )}
        </>
    )
}