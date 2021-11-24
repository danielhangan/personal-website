import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostsSlugs, getPostData } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import {
    Heading,
    Text,
    Box,
    Code
} from '@chakra-ui/react'
import PostLayout from '../../layouts/Post';


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
            return <Text mb={4}>{children}</Text>
        },
        h2: props => {
            const { children } = props;
            return <Heading as="h2" size="lg" mt={12} mb={1}>{children}</Heading>
        },
        blockquote: props => {
            const { children } = props;
            return <Code pt={6} mb={4} color="brand.gray600" bg="brand.gray100">
                            {children}
                    </Code>
        }
    }

    return (
        <PostLayout frontMatter={post}>
            <Box pl={3} w={{base: '100%', md: '3xl'}}>
                <MDXRemote
                    components={ChakraUIRenderer(newTheme)} 
                    {...post.source}
                />
            </Box>
        </PostLayout>
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