import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Main } from '../../components/Main';
import { getAllPostsSlugs, getPostData } from '../../../lib/posts';


import {
    Heading,
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
    return <Main>
        <Heading as="h1">{post.title}</Heading>
        <Heading as="h4" size="md">{post.description}</Heading>
        <p>{post.date}</p>
        <div>
            <MDXRemote {...post.source} />
        </div>
    </Main>
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