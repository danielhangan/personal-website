import { VStack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <VStack
    h="full"
    w="full"
    px={45}
    spacing={10}
    alignItems="flex-start"
    {...props}
  /> 
)
