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
    Code,
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
    return (
    <HeaderLayout frontMatter={post}>
        <Text>
            <MDXRemote 
                components={ChakraUIRenderer()} 
                {...post.source}
            />
        </Text>
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