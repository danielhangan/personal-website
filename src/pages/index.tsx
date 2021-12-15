import { Hero } from '../components/Hero'
import { Blog } from '../components/Blog'
import { Main } from '../components/Main'

import ContainerLayout from '../layouts/Container'

export default function Index () {
  return (
    <ContainerLayout>
      <Main>
        <Hero />
        {/* <Blog posts={featuredposts} home /> */}
      </Main>
    </ContainerLayout>
  )
}
