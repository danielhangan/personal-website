import { 
  Flex, 
  FlexProps,
  Divider,
  Stack,
  VStack,
 } from '@chakra-ui/react'
 import Link from 'next/link'

export const Footer = (props: FlexProps) => {
  
  return (
    <>
      <Divider
        w={{base: '100%', md:'3xl'}} 
        mt={8}
        />
      <Flex 
        as="footer"
        h={{base: '100%', md: '225px'}}
        w={{base: '100%', md:'3xl'}}
        mt={8}
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </VStack>

          <VStack spacing={4} w="33%" alignItems="flex-start">
            <Link href="https://twitter.com/hangandaniel" passHref>Twitter</Link>
            <Link href="https://danielhangan.medium.com/" passHref>Medium</Link>
            <Link href="https://github.com/danielhangan" passHref>Github</Link>
            <Link href="https://stackoverflow.com/cv/danielhangan" passHref>StackOverFlow</Link>
          </VStack>

          <VStack spacing={4} w="33%" alignItems="flex-start">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/tech-stack">Tech Stack</Link>
            <Link href="/contact">Contact</Link>
          </VStack>
        </Stack>
      </Flex>
      </>
  )
}

