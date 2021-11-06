import { VStack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <VStack
    justify="center"
    spacing={10}

    {...props}
  />
)
