import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import useSWR from 'swr';
import { GraphQLClient, gql } from 'graphql-request';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Main } from '../../components/Main';


import {
    Heading,
    useColorMode,
    Flex,
    VStack,
    Link as ChakraLink
} from '@chakra-ui/react'

const client = new GraphQLClient(process.env.NEXT_GRAPHCMS_URL);

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
    const slug = params.slug as string;
    
    const query = gql`
        query Post($slug: String!) {
            post(where: { slug: $slug }) {
                id
                slug
                title
                description
                text
                date
                image {
                    url
                }
            }
        }
    `

    const data: { post: IPost | null } = await client.request(query, { slug });

    if (!data.post) {
        return {
            notFound: true,
        };
    }

    const source = await serialize(data.post.text);

    return {
        props: {post: { ...data.post, source }},
        revalidate: 60 * 60
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        query Posts {
            posts {
               slug 
            }
        }
 
    `
    const data = await client.request(query);

    const paths = data.posts.map(post => ({
        params: {
            slug: post.slug,
        },
    }))

    return {
        paths,
        fallback: "blocking",
    };
};