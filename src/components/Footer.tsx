import { 
  Flex, 
  FlexProps,
  HStack,
  Text,
  Box,
  Link as ChakraLink
 } from '@chakra-ui/react'
 import Link from 'next/link'

import { Github, Twitter, Linkedin } from 'emotion-icons/bootstrap'

export const Footer = (props: FlexProps) => {
  
  return (
      <Flex 
        as="footer"
        h="100%"
        pl={4}
        pb={4}
        w={{base: '100%', md:'2xl'}}
        flexDir="column"
        justifyContent="end"
        alignItems="center"
      > 
        <HStack spacing={4} my={2} alignItems="center">
          <ChakraLink href="https://twitter.com/hangandaniel" isExternal>
            <Twitter size="20px" />
          </ChakraLink>
          <ChakraLink href="https://linkedin.com/in/danielhangan" isExternal>
            <Linkedin size="20px" />
          </ChakraLink>
          <ChakraLink href="https://github.com/danielhangan" isExternal>
            <Github size="20px" />
          </ChakraLink>
        </HStack>
          <Text>
            Copyright © 2022 Daniel Hangan. Site source on <ChakraLink>Github.</ChakraLink>
          </Text>
      </Flex>
  )
}

