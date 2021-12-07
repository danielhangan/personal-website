import { GraphQLClient, gql } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";

const client = new GraphQLClient(process.env.NEXT_GRAPHCMS_URL)

interface IProject {
   title: string,
   slug: string,
   stack: string,
   short_description: string,
   long_description: string,
   imageUrl: {
       url: string
   },
   date: string,
   badge: string,
   link: string
}

export async function getAllProjectsData() {

    const query = gql`
            query AllPosts {
            projects (orderBy: createdAt_DESC) {
                title
                slug
                stack
                description
                longDescription
                images {
                url
                }
                date
                badge
                link
            }
        }
    `

    const data = await client.request(query)
    
    if (!data) {
        return {
            notFound: true
        }
    }

    return data
}

