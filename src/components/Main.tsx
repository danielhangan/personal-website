import { VStack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <VStack
    // w={['full',400,672]}
    alignItems="flex-start"
    // direction={{base:'column-reverse', md:'row'}}
    // h="full"
    spacing={10}
    // px={45}
    {...props}
  /> 
)
