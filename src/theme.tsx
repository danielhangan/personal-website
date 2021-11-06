import { extendTheme, withDefaultSize, withDefaultColorScheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme(
  withDefaultSize({
    size: "sm",
    components: ['Button']
  }),
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Switch']
  }),
  {
  colors: {
    brand: {
      gray50: '#F7FAFC',
      gray100: '#EDF2F7',
      gray200: '#E2E8F0',
      gray300: '#CBD5E0',
      gray400: '#A0AEC0',
      gray500: '#718096',
      gray600: '#4A5568',
      gray700: '#2D3748',
      gray800: '#1A202C',
      gray900: '#171923'
    }
  },
  fonts,
  breakpoints
})

export default theme
