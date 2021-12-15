import { GetStaticProps, GetStaticPaths } from 'next';
import PostLayout from '../../layouts/Post';
import { getFileBySlug, getFiles } from '../../../lib/mdx';
import MDXComponents from '../../components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote'


export default function Post({ mdxSource, frontMatter }) {

    return (
        <PostLayout frontMatter={frontMatter}>
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </PostLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getFiles('blog')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false,
    }
}


export const getStaticProps: GetStaticProps = async ( {params} ) => {
    const post = await getFileBySlug('blog', params.slug)

    return {
        props: post,
        revalidate: 60 * 60
    }
}

