import '@fontsource/montserrat'
import '@fontsource/karla'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { NextSeo } from "next-seo";
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
    <NextSeo
          title="Daniel Hangan"
          titleTemplate="Daniel Hangan"
          defaultTitle="Daniel Hangan"
          description="A full stack web developer, who is passionate about market intelligence, machine learning and blockchain. By day I am probably busy building the next startup market intelligence tech @ Radicle Insights, and by night learning and contributing."
          canonical="https://www.danielhangan.com/"
          openGraph={{
            url: "https://www.danielhangan.com/",
            title: "Daniel Hangan",
            description: "A full stack web developer, who is passionate about market intelligence, machine learning and blockchain. By day I am probably busy building the next startup market intelligence tech @ Radicle Insights, and by night learning and contributing.",
            images: [
              {
                url: "/profile.png",
                width: 800,
                height: 420,
                alt: "Daniel Hangan",
              },
            ],
          }}
          twitter={{
            handle: "@hangandaniel",
            site: "@hangandaniel",
            cardType: "summary_large_image",
          }}
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
