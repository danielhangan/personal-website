import { GetStaticProps } from 'next'
import { getAllPostsData } from '../../../lib/posts'
import React from 'react'
import { Blog } from '../../components/Blog'


export default function AllPosts(
    { 
        allposts,
        home 
    } : { 
        allposts: any, 
        home: React.ReactNode
    }) {
    return (
        <>
            <Blog posts={allposts} />
        </>
    )
}



export const getStaticProps: GetStaticProps = async () => {
    const allposts = await getAllPostsData()

    return {
        props: { 
            allposts: allposts.posts,
        },
        revalidate: 60 * 60
    }
}