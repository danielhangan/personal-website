import { GraphQLClient, gql } from "graphql-request";

// Not sure if I need these yet
import { serialize } from 'next-mdx-remote/serialize';


const client = new GraphQLClient(process.env.NEXT_GRAPHCMS_URL)

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

export async function getAllPostsData() {
    
    const query = gql`
        query AllPosts {
            posts {
                date
                description
                id
                slug
                title
            }
        }
    `
    const data = await client.request(query)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return data
}

export async function getFeaturedPostsData() {
    
    const query = gql`
        query FeaturedPosts {
            posts (where: {featured: true}) {
                slug
                title
                date
            }
        }
    `
    const data = await client.request(query)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return data
}

export async function getPostData(slug: string) {
    
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
        post: {
            ...data.post, source
        }
    }
}

export async function getAllPostsSlugs() {
    const query = gql`
        query posts {
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

    return paths
}
