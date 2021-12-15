import { GetStaticProps } from 'next'
import React from 'react'
import { getAllFilesFrontMatter } from '../../../lib/mdx'
import { Blog } from '../../components/Blog'


export default function AllPosts(
    { 
        posts,
        home 
    } : { 
        posts: any, 
        home: React.ReactNode
    }) {
    return (
        <>
            <Blog posts={posts} />
        </>
    )
}



export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllFilesFrontMatter('blog')

    return {
        props: { posts },
        revalidate: 60 * 60
    }
}