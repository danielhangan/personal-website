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

export default function Index (
  {
    featuredposts
  } : {
    featuredposts: object
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

  return {
    props: {
      featuredposts: featuredposts.posts,
    },
    revalidate: 60 * 60
  }
}