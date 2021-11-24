import HeaderLayout from '../layouts/Post'
import { Container } from '../components/Container'
import { Naviagation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Blog } from '../components/Blog'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import {
  Flex
} from '@chakra-ui/react'

const Index = () => (
  <Container>
    <Naviagation />
    <Main>
      <Hero />
      <Blog home/>
    </Main>
    <Footer />
    {/* <HeaderLayout home>
    </HeaderLayout> */}
    {/* <Naviagation />
    <Main>
      <Hero />
    </Main> */}

    {/* <Main>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA /> */}
  </Container>
)

export default Index
