import '@fontsource/montserrat'
import '@fontsource/karla'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { prismDarkTheme, prismLightTheme } from '../../styles/prism'

const GlobalStyles = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme}
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </ChakraProvider>
  )
}

export default MyApp
