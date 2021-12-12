import { VStack, StackProps } from '@chakra-ui/react'
import React from 'react'

export const Main = (props: StackProps, children: React.ReactNode) => (
  <VStack
    w={{base:'100%', md:'2xl'}}
    alignItems="flex-start"
    pl={3}
    minH="lg"
    spacing={12}
    {...props}
  />
)
