import { extendTheme, theme as baseTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

// 2. Objects can be created inside the extendTheme function or elsewhere and imported
const colors = {
  headingTextColor: {
    lightMode: 'black',
    darkMode: 'whiteAlpha.800'
  },
  contentTextColor: {
    lightMode: 'gray.700',
    darkMode: 'gray.300'
  },
  metadataTextColor: {
    lightMode: 'gray.600',
    darkMode: 'gray.400'
  },
  bodyBackground: {
    lightMode: 'white',
    darkMode: '#121419'
  },
  linkTextColors: {
    lightMode: 'blue.600',
    darkMode: 'blue.400'
  },
  linkSecondaryTextColors: {
    lightMode: 'blue.700',
    darkMode: 'blue.200'
  },
}

// 3. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  colors: colors,

  components: {
    Text: {
			baseStyle: (props:any) => ({
        color: mode(
          colors.contentTextColor.lightMode,
          colors.contentTextColor.darkMode
        )(props),
				fontFamily: 'IBM Plex Sans'
      }),
      variants: {
        secondary: (props:any) => ({
          color: mode(
            colors.metadataTextColor.lightMode,
            colors.metadataTextColor.darkMode
          )(props),
        }),
        description: (props:any) => ({
          color: mode(
            colors.headingTextColor.lightMode,
            colors.headingTextColor.darkMode
          )(props),
        }),
      },
    },
    Heading: {
			baseStyle: (props:any) => ({
        color: mode(
          colors.headingTextColor.lightMode,
          colors.headingTextColor.darkMode
        )(props),
				fontFamily: 'IBM Plex Sans',
				fontWeight: '700'
      }),
    },
    Link: {
			baseStyle: (props:any) => ({
        color: mode(
          colors.linkTextColors.lightMode,
          colors.linkTextColors.darkMode
        )(props),
				fontFamily: 'IBM Plex Sans',
      }),
      variants: {
        secondary: (props:any) => ({
          color: mode(
            colors.linkSecondaryTextColors.lightMode,
            colors.linkSecondaryTextColors.darkMode
          )(props),
					fontFamily: 'IBM Plex Sans',
        }),
				heading: (props:any) => ({
      	  color: mode(
      	    colors.headingTextColor.lightMode,
      	    colors.headingTextColor.darkMode
      	  )(props),
					fontFamily: 'IBM Plex Sans',
					fontWeight: '700'
      	}),
      },
    },
  },

  styles: {
    global: (props:any) => ({
      // Optionally set global CSS styles
      body: {
        background: mode(
          colors.bodyBackground.lightMode,
          colors.bodyBackground.darkMode
        )(props),
      },
    }),
  },
})
