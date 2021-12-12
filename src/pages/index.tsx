import { Hero } from '../components/Hero'
import { Blog } from '../components/Blog'
import { Main } from '../components/Main'
import { GetStaticProps } from 'next'
import { getLatestPostsData } from '../../lib/posts'

import ContainerLayout from '../layouts/Container'

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
        {/* <Blog posts={featuredposts} home /> */}
      </Main>
    </ContainerLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const featuredposts = await getLatestPostsData()

  return {
    props: {
      featuredposts: featuredposts.posts,
    },
    revalidate: 60 * 60
  }
}