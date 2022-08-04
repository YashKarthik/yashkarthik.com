import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import "@fontsource/space-grotesk"
import "@fontsource/space-mono"


export const colors = {
  backGround: {
    darkMode: '#020016'
  },
  headingText: {
    darkMode: '#e2e0f9'
  },
  primaryText: {
    darkMode: '#d7dbed'
  },
  secondaryText: {
    darkMode: '#9aa5ce'
  },
  accent: {
    darkMode: '#00ffd2'
  }
}


export const customTheme = extendTheme({
  colors: colors,

  components: {

    Text: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.primaryText.darkMode,
          colors.primaryText.darkMode,
        )(props),
        fontFamily: 'Space Grotesk',
    }),

      variants: {
        secondary: (props: any) => ({
          color: mode(
            colors.secondaryText.darkMode,
            colors.secondaryText.darkMode,
          )(props),
          fontFamily: 'Space Grotesk'
        }),

        blockquote: (props: any) => ({
          backgroundColor: mode(
            colors.accent.darkMode,
            'rgba(0, 255, 210, 0.1)'
          )(props),
          fontFamily: 'Space Grotesk',
          fontSize: '0.93em',
          fontStyle: 'italic',
          m: '0', p: '13px 2px 1px 10px'
        }),
        headerBar: (props: any) => ({
          color: mode(
            colors.headingText.darkMode,
            colors.headingText.darkMode
          )(props),
          fontFamily: 'Space Mono',
          fontSize: 'sm',
          _hover: {
            textColor: mode(
              colors.accent.darkMode,
              colors.accent.darkMode,
            )(props),
            textDecoration: 'none'
          }
        }),
      },
    },

    Heading: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.headingText.darkMode,
          colors.headingText.darkMode,
        )(props),
        fontFamily: 'Space Grotesk',
        fontWeight: '700',
      }),
    },

    Link: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.accent.darkMode,
          colors.accent.darkMode
        )(props),
        fontFamily: 'Space Grotesk',
      }),
      variants: {
        heading: (props: any) => ({
          color: mode(
            colors.headingText.darkMode,
            colors.headingText.darkMode
          )(props),
          fontFamily: 'Space Grotesk',
          fontWeight: '700',
          _hover: {
            textColor: mode(
              colors.accent.darkMode,
              colors.accent.darkMode,
            )(props),
            textDecoration: 'none'
          }
        }),
        headerBar: (props: any) => ({
          color: mode(
            colors.headingText.darkMode,
            colors.headingText.darkMode
          )(props),
          fontFamily: 'Space Mono',
          fontSize: 'sm',
          _hover: {
            textColor: mode(
              colors.accent.darkMode,
              colors.accent.darkMode,
            )(props),
            textDecoration: 'none'
          }
        }),
      },
    },
  },

  styles: {
    global: (props: any) => ({
      html: {
        background: mode(
          colors.backGround.darkMode,
          colors.backGround.darkMode
        )(props),

        minH: '100%',
        minW: '100%',

      },
      body: {
        background: mode(
          colors.backGround.darkMode,
          colors.backGround.darkMode
        )(props),
      },
      li: {
        color: mode(
          colors.primaryText.darkMode,
          colors.primaryText.darkMode
        )(props),
        marginTop: '5px',
      },
      'li::marker': {
        color: mode(
          colors.secondaryText.darkMode,
          colors.secondaryText.darkMode
        )(props),
      },
    }),
  },
})
