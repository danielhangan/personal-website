import { VStack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <VStack
    w={{base:'100%', md:'3xl'}}
    // justifyContent="center"
    spacing={12}

    {...props}
  />
)
