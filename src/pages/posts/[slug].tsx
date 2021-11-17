import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostsSlugs, getPostData } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Main } from '../../components/Main';
import HeaderLayout from '../../layouts/Header';


import {
    Heading,
    Text,
    Flex,
    Box,
    Image,
} from '@chakra-ui/react'


interface IPost {
    id: string,
    slug: string,
    date: string,
    title: string,
    text: string,
    description: string,
    image: {
        url: string
    },
    source: { compiledSource: string }
}

export default function Post({ post } : {post: IPost}) {

    const newTheme: object = {
        p: props => {
            const { children } = props;
            return <Text mb={8}>{children}</Text>
        },
        h2: props => {
            const { children } = props;
            return <Heading as="h2" mt={12} mb={1}>{children}</Heading>
        }
    }

    return (
        <HeaderLayout frontMatter={post}>
            <Box pl={['auto', 'auto', 3]} vw="100%">
                <MDXRemote
                    components={ChakraUIRenderer(newTheme)} 
                    {...post.source}
                />
            </Box>
        </HeaderLayout>
    )
}

export const getStaticProps: GetStaticProps = async ( {params} ) => {
    const postData = await getPostData(params.slug as string)

    return {
        props: postData,
        revalidate: 60 * 60
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPostsSlugs()

    return {
        paths,
        fallback: "blocking",
    }
}