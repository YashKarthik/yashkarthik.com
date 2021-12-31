import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import "@fontsource/dejavu-mono"

export const colors = {
  headingTextColor: {
    lightMode: 'black',
    darkMode: '#efc473'
  },
  contentTextColor: {
    lightMode: 'black',
    darkMode: '#EDE7dd'
  },
  metadataTextColor: {
    lightMode: 'blackAlpha.700',
    darkMode: 'rgba(237, 228, 213, .8)'
  },
  bodyBackground: {
    lightMode: "#fcf7e8",
    darkMode: '#111010'
  },
  linkTextColors: {
    lightMode: '#e58b0d',
    darkMode: '#efa947'
  },
  linkSecondaryTextColors: {
    lightMode: '#af6b0a',
    darkMode: '#efc473'
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
        padding: '0', m:'0 0 20px 0',
        fontWeight:'400', fontFamily: 'helvetica',
      }),

      variants: {
        secondary: (props:any) => ({
          color: mode(
            colors.metadataTextColor.lightMode,
            colors.metadataTextColor.darkMode
          )(props),
				fontFamily: 'helvetica'
        }),

        blockquote: (props:any) => ({
          backgroundColor: mode(
            'rgba(251, 241, 199, .8)',
            'rgba(60, 56, 54, 0.3)'
          )(props),
				fontFamily: 'helvetica',
        fontSize:'0.93em', fontStyle:'italic',
        m:'0', p:'13px 2px 1px 10px'
        }),
      },
    },

    Heading: {
			baseStyle: (props:any) => ({
        color: mode(
          colors.headingTextColor.lightMode,
          colors.headingTextColor.darkMode
        )(props),
				fontFamily: 'helvetica',
				fontWeight: '700'
      }),
      variants: {
        title: (props:any) => ({
          color: mode(
            colors.headingTextColor.lightMode,
            colors.linkTextColors.darkMode
          )(props),
					fontFamily: 'helvetica',
        }),
      },
    },

    Link: {
			baseStyle: (props:any) => ({
        color: mode(
          colors.linkTextColors.lightMode,
          colors.linkTextColors.darkMode
        )(props),
				fontFamily: 'helvetica',
      }),
      variants: {
        secondary: (props:any) => ({
          color: mode(
            colors.linkSecondaryTextColors.lightMode,
            colors.linkSecondaryTextColors.darkMode
          )(props),
					fontFamily: 'helvetica',
        }),
				heading: (props:any) => ({
      	  color: mode(
      	    "#CC8828",
      	    colors.headingTextColor.darkMode
      	  )(props),
					fontFamily: 'helvetica',
					fontWeight: '700',
  				_hover:{
            textColor:mode(
              colors.linkTextColors.lightMode,
              colors.linkTextColors.darkMode
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
      li: {
        color: mode(
          colors.contentTextColor.lightMode,
          colors.contentTextColor.darkMode
        )(props),
      },
      'li::marker': {
        color: mode(
          colors.metadataTextColor.lightMode,
          colors.metadataTextColor.darkMode
        )(props),
      },
    }),
  },
})
