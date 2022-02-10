import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'
import { GetStaticProps } from 'next'
import { getAllFilesFrontMatter } from '../../lib/mdx'
import { FeaturedPost } from '../components/FeaturedPost'
import { Footer } from '../components/Footer'
import ContainerLayout from '../layouts/Container'

export default function Index ({posts} : {posts:any}) {

  const lastpost = posts.sort(function(a, b) {
    let aDate: any = new Date(a.date),
    bDate: any = new Date(b.date)

    return bDate - aDate
  })
  return (
      <ContainerLayout>
        <Main>
          <Hero />
          <FeaturedPost post={lastpost[0]} />
        </Main>
      </ContainerLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllFilesFrontMatter('blog')

    return {
        props: { posts },
        revalidate: 60 * 60
    }
}