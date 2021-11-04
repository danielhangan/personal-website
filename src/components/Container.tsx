import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      // maxW="container.md"
      h="100vh"
      px={550}
      direction="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
