import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

//const styles = {
//	global: (props:any) => ({
//    body: {
//      bg: mode('white', '#0c0c0c')(props),
//    },
//  }),
//};

const headings = {
	light: {
		h1: 'blue.600',
		h2: 'blue.700',
	},
	dark: {
		h1: 'blue.500',
		h2: 'blue.400',
	},
}

const theme = extendTheme({
	//styles,
	headings
})

export default theme
