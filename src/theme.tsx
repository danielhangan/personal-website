import { extendTheme, withDefaultSize, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme(
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
    fonts: {
      heading: 'Montserrat',
      body: 'Karla'
    },
    breakpoints,
    components: {
      Text: {
        baseStyle: (props) => ({
          fontWeight: "lighter",
          fontSize: "16px",
          color: props.colorMode == "dark" ? "brand.gray300" : "brand.gray600"
        })
      },
      Heading: {
        baseStyle: {
          letterSpacing: "2px"
        }
      },
      Code: {
        baseStyle: (props) => ({
          width: "100%",
          p: "8px",
          color: props.colorMode == "dark" ? "brand.gray300" : "brand.gray600"
        })
      },
      Link: {
        baseStyle: (props) => ({
          color: props.colorMode == "dark" ? "brand.gray300" : "brand.gray600",
          _hover: {
            color: props.colorMode == "dark" ? "brand.gray100" : "brand.gray900",
            textDecorationLine: "none"
          },
          cursor: 'pointer'
        })
      },
      Button: {
        variants: {
          ghost: (props) => ({
            color: props.colorMode == "dark" ? "brand.gray300" : "brand.gray600",
            fontWeight: "lighter",
            mx: "8px",
            _hover: {
              bg: props.colorMode == "dark" ? "brand.gray600" : "brand.gray300"
            },
          })
        },
        defaultProps: {
          size:"md",
          variant: "ghost"
        }
      }
    }
  }
)

export default theme
