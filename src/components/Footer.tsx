import { 
  Flex, 
  FlexProps,
  Divider,
  Stack,
  VStack,
  Link as ChakraLink
 } from '@chakra-ui/react'
 import Link from 'next/link'

export const Footer = (props: FlexProps) => {
  
  return (
    <>
      <Divider />
      <Flex 
        as="footer"
        h="full"
        w={{base: '100%', md:'2xl'}}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Stack 
          direction={['column', 'row']} 
          w='100%'
          pl={3}
          spacing={2}
        >
          <VStack spacing={4} w="33%" alignItems="flex-start">
            <Link href="/" passHref>
              <ChakraLink>Home</ChakraLink>
            </Link>
            <Link href="/about" passHref>
              <ChakraLink>About</ChakraLink>
            </Link>
            <Link href="/posts" passHref>
              <ChakraLink>Blog</ChakraLink>
            </Link>
            <Link href="/projects" passHref>
              <ChakraLink>Projects</ChakraLink>
            </Link>
          </VStack>

          <VStack spacing={4} w="33%" alignItems="flex-start">
            <Link href="https://twitter.com/hangandaniel" passHref>
              <ChakraLink>Twitter</ChakraLink>
            </Link>
            <Link href="https://linkedin.com/in/danielhangan/" passHref>
              <ChakraLink>LinkedIn</ChakraLink>
            </Link>
            <Link href="https://github.com/danielhangan" passHref>
              <ChakraLink>Github</ChakraLink>
            </Link>
            <Link href="https://stackoverflow.com/cv/danielhangan" passHref>
              <ChakraLink>StackOverFlow</ChakraLink>
            </Link>
          </VStack>

          <VStack spacing={4} w="33%" alignItems="flex-start">
            <Link href="/resume" passHref>
              <ChakraLink>Resume</ChakraLink>
            </Link>
            <Link href="/tech-stack" passHref>
              <ChakraLink>Tech Stack</ChakraLink>
              </Link>
            <Link href="/contact" passHref>
              <ChakraLink>Contact</ChakraLink>
            </Link>
          </VStack>
        </Stack>
      </Flex>
      </>
  )
}

