import { extendTheme, useColorModeValue } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const colors = {
  headingTextColor: {
    lightMode: 'black',
    darkMode: 'whiteAlpha.900'
  },
  contentTextColor: {
    lightMode: 'gray.700',
    darkMode: 'gray.300'
  },
  metadataTextColor: {
    lightMode: 'gray.500',
    darkMode: 'rgba(145, 169, 201, .8)'
  },
  bodyBackground: {
    lightMode: 'white',
    darkMode: '#121419'
  },
  linkTextColors: {
    lightMode: 'blue.600',
    darkMode: 'blue.300'
  },
  linkSecondaryTextColors: {
    lightMode: '#375e8e',
    darkMode: 'rgba(117, 185, 234, .9)'
  },
}


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
				fontFamily: 'IBM Plex Sans'
        }),
        description: (props:any) => ({
          color: mode(
            colors.contentTextColor.lightMode,
            colors.contentTextColor.darkMode
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
					fontWeight: '700',
  				_hover:{
            textColor:mode(
              colors.linkTextColors.lightMode,
              colors.linkTextColors.darkMode,
            )(props),
            textDecoration: 'none'
          }
      	}),
      },
    },
  },

  styles: {
    global: (props:any) => ({
      body: {
        background: mode(
          colors.bodyBackground.lightMode,
          colors.bodyBackground.darkMode
        )(props),
      },
    }),
  },
})
