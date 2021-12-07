import { Hero } from '../components/Hero'
import { Blog } from '../components/Blog'
import { Main } from '../components/Main'
import { GetStaticProps } from 'next'
import { getFeaturedPostsData } from '../../lib/posts'

import ContainerLayout from '../layouts/Container'
import {
  Flex,
  Box,
  Heading
} from '@chakra-ui/react'
import { getAllProjectsData } from '../../lib/projects'

export default function Index (
  {
    featuredposts,
    latestprojects
  } : {
    featuredposts: object
    latestprojects: object
  }) {
  return (
    <ContainerLayout>
      <Main>
        <Hero />
        <Blog posts={featuredposts} home />
      </Main>
    </ContainerLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const featuredposts = await getFeaturedPostsData()
  const latestprojects = await getAllProjectsData()

  return {
    props: {
      featuredposts: featuredposts.posts,
      latestprojects: latestprojects.projects
    },
    revalidate: 60 * 60
  }
}