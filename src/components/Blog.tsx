import React from "react";

import ContainerLayout from "../layouts/Container";
import { Main } from '../components/Main'
import { Date } from '../components/Date'
import { FeaturedPost } from "./FeaturedPost";
import {
    Heading,
    Box,
    Text,
    Flex,
    VStack,
    Stack,
    Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

import { ArrowRight } from "@emotion-icons/bootstrap";


export const Blog = ({ posts, home } : { posts?: any, home? : React.ReactNode }) => {
    return (
        <>
        {home? (
            <Flex 
                direction="column"
                w={{base: "100%", md: "2xl"}}
                spacing={12}
            >
                <Heading>Latest Posts</Heading>
                <Stack
                    direction={["column", "row"]}
                    my={4}
                    spacing={2}
                >
                    {posts.map((post) => (
                        <FeaturedPost key={post.slug} post={post} />
                    ))}
                </Stack>
                    <Link href="/posts" passHref>
                        <Flex alignItems="center">
                                <ChakraLink>
                                    Read more <ArrowRight size="18px" />
                                </ChakraLink>
                        </Flex>
                    </Link>
            </Flex>
        ) : (
        <ContainerLayout>

            <Main>
                <VStack
                    w={{base:'100%', md:'2xl'}}
                    alignItems="flex-start"
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
                        {posts.map((post: any) => (
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

                                    <Text>{post.summary}</Text>
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