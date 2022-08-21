import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import "@fontsource/space-grotesk"
import "@fontsource/space-mono"

export const colors = {
  backGround: {
    lightMode: "white",
    darkMode: '#0E0F14'
  },
  headingText: {
    lightMode: "black",
    darkMode: 'white',
  },
  primaryText: {
    lightMode: "black",
    darkMode: 'gray.300'
  },
  secondaryText: {
    lightMode: 'gray.600',
    darkMode: 'gray.400',
  },
  accent: {
    lightMode: 'purple.600',
    darkMode: 'purple.300'
  },
  bordersAndShadows: {
    lightMode: 'black',
    darkMode: "#1a1c26"
  }
}


export const customTheme = extendTheme({
  colors: colors,

  components: {

    Text: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.primaryText.lightMode,
          colors.primaryText.darkMode,
        )(props),
        fontFamily: 'Space Grotesk',
    }),

      variants: {
        secondary: (props: any) => ({
          color: mode(
            colors.secondaryText.lightMode,
            colors.secondaryText.darkMode,
          )(props),
          fontFamily: 'Space Grotesk'
        }),

        blockquote: (props: any) => ({
          backgroundColor: mode(
            'rgba(107, 70, 193, .1)', // same as colors.accent.lightMode but with opacity 0.1
            'rgba(0, 255, 210, 0.1)'
          )(props),

          color: mode(
            colors.secondaryText.lightMode,
            colors.secondaryText.darkMode,
          )(props),

          fontFamily: 'Space Grotesk',
          fontSize: '0.93em',
          fontStyle: 'italic',
          m: '0', p: '13px 2px 1px 10px'
        }),
      },
    },

    Heading: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.headingText.lightMode,
          colors.headingText.darkMode,
        )(props),
        fontFamily: 'Space Grotesk',
        fontWeight: '700',
      }),
    },

    Link: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.accent.lightMode,
          colors.accent.darkMode
        )(props),
        fontFamily: 'Space Grotesk',
      }),
      variants: {
        heading: (props: any) => ({
          color: mode(
            colors.headingText.lightMode,
            colors.headingText.darkMode
          )(props),
          fontFamily: 'Space Grotesk',
          _hover: {
            textColor: mode(
              colors.accent.lightMode,
              colors.accent.darkMode,
            )(props),
            textDecoration: 'none'
          }
        }),
      },
    },

    Container: {
      baseStyle: (props: any) => ({
        bgColor: mode(
          colors.backGround.lightMode,
          colors.backGround.darkMode
        )(props),
      }),
    },

  },

  styles: {
    global: (props: any) => ({
      html: {
        background: mode(
          'rgba(255,255,255,0)',
          'rgba(255,255,255,0)',
        )(props),
      },

      body: {
        background: mode(
          'rgba(255,255,255,0)',
          colors.backGround.darkMode
        )(props),
      },
      '::-moz-selection': {
        background: mode(
          'gray.200',
          'gray.800'
        )(props),
      },
      '::selection': {
        background: mode(
          'gray.200',
          'gray.800'
        )(props),
      },

      li: {
        color: mode(
          colors.primaryText.lightMode,
          colors.primaryText.darkMode
        )(props),
        marginTop: '5px',
      },
      'li::marker': {
        color: mode(
          colors.secondaryText.lightMode,
          colors.secondaryText.darkMode
        )(props),
      },
    }),
  },
})
