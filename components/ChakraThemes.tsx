import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

export const colors = {
    headingTextColor: {
        lightMode: 'blue.600',
        darkMode: 'blue.300'
    },
    contentTextColor: {
        lightMode: 'black',
        darkMode: 'white'
    },
    metadataTextColor: {
        lightMode: 'gray.600',
        darkMode: 'gray.400'
    },
    bodyBackground: {
        lightMode: "white",
        darkMode: '#0d0d0f'
    },
    linkTextColors: {
        lightMode: 'blue.600',
        darkMode: 'blue.300'
    },
    linkSecondaryTextColors: {
        lightMode: 'blue.700',
        darkMode: 'blue.300'
    },
}


export const customTheme = extendTheme({
    colors: colors,

    components: {

        Text: {
            baseStyle: (props: any) => ({
                color: mode(
                    colors.contentTextColor.lightMode,
                    colors.contentTextColor.darkMode
                )(props),
                padding: '0', m: '0 0 20px 0', opacity: '0.9',
                fontWeight: '400', fontFamily: 'helvetica',
            }),

            variants: {
                secondary: (props: any) => ({
                    color: mode(
                        colors.metadataTextColor.lightMode,
                        colors.metadataTextColor.darkMode
                    )(props),
                    fontFamily: 'helvetica'
                }),

                blockquote: (props: any) => ({
                    //          backgroundColor: mode(
                    //            'blue.50',
                    //            'blue.900'
                    //          )(props),
                    fontFamily: 'helvetica',
                    fontSize: '0.93em', fontStyle: 'italic',
                    m: '0', p: '13px 2px 1px 10px'
                }),
            },
        },

        Heading: {
            baseStyle: (props: any) => ({
                color: mode(
                    colors.headingTextColor.lightMode,
                    colors.headingTextColor.darkMode
                )(props),
                fontFamily: 'helvetica',
                fontWeight: '700',
            }),
            variants: {
                title: (props: any) => ({
                    color: mode(
                        'black',
                        'white'
                    )(props),
                    fontFamily: 'helvetica',
                    opacity: '.9'
                }),
            },
        },

        Link: {
            baseStyle: (props: any) => ({
                color: mode(
                    colors.linkTextColors.lightMode,
                    colors.linkTextColors.darkMode
                )(props),
                fontFamily: 'helvetica',
            }),
            variants: {
                secondary: (props: any) => ({
                    color: mode(
                        colors.linkSecondaryTextColors.lightMode,
                        colors.linkSecondaryTextColors.darkMode
                    )(props),
                    fontFamily: 'helvetica',
                    opacity: '0.9'
                }),
                heading: (props: any) => ({
                    color: mode(
                      'black',
                      'blue.300'
                    )(props),
                    fontFamily: 'helvetica',
                    fontWeight: '700',
                    _hover: {
                        textColor: mode(
                          colors.linkTextColors.lightMode,
                          'blue.500'
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
                    colors.bodyBackground.lightMode,
                    colors.bodyBackground.darkMode
                )(props),
              borderTopWidth: {base: 'none', md: '12px'},
              borderTopStyle: {base: 'none', md: 'solid'},
              borderTopColor: {base: 'none', md: 'blue.700'},

              borderLeftWidth: {base: 'none', md: '20px'},
              borderLeftStyle: {base: 'none', md: 'solid'},
              borderLeftColor: {base: 'none', md: 'blue.700'},
            },
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
