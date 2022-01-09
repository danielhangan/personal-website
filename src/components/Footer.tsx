import { 
  Flex, 
  FlexProps,
  HStack,
  Text,
  Box,
  Link as ChakraLink
 } from '@chakra-ui/react'
 import Link from 'next/link'

export const Footer = (props: FlexProps) => {
  
  return (
      <Flex 
        as="footer"
        h="100%"
        w={{base: '100%', md:'2xl'}}
        flexDir="column"
        alignItems="bottom"
      > 
        <HStack>
          <Text>
            Twitter
          </Text>
          <Text>
            LinkedIn
          </Text>
          <Text>
            Github
          </Text>
        </HStack>
          <Text>
            Copyright © 2022 Daniel Hangan. Site source on GitHub.
          </Text>
      </Flex>
  )
}

