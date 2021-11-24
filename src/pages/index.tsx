import { Hero } from '../components/Hero'
import { Blog } from '../components/Blog'
import { Main } from '../components/Main'

import ContainerLayout from '../layouts/Container'
import {
  Flex
} from '@chakra-ui/react'

const Index = () => (
  <ContainerLayout>
    <Main>
      <Hero />
      <Blog home/>
    </Main>
  </ContainerLayout>
)

export default Index
