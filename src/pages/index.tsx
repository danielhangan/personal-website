import { Hero } from '../components/Hero'
import { Main } from '../components/Main'
import { GetStaticProps } from 'next'

import { getAllFilesFrontMatter } from '../../lib/mdx'

import ContainerLayout from '../layouts/Container'
import { FeaturedPost } from '../components/FeaturedPost'

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