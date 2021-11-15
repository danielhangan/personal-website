import { Flex, useColorMode, FlexProps,  } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      h="auto"
      px={6}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}