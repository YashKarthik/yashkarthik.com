import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MDXComponents from '../themes/MDXStyles';
import '../styles/globals.css'
import { customTheme } from '../themes/ChakraThemes'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
		window.addEventListener('beforeunload', () => localStorage.removeItem('chakra-ui-color-mode'))
  	window.addEventListener('unload', () => localStorage.removeItem('chakra-ui-color-mode'))
  	return () => {
  	  window.removeEventListener('beforeunload', () => localStorage.removeItem('chakra-ui-color-mode'))
  	  window.removeEventListener('unload', () => localStorage.removeItem('chakra-ui-color-mode'))
  	}
	}, [])


  return (
		<ChakraProvider theme={customTheme}>
			<Component {...pageProps} components={MDXComponents} />
		</ChakraProvider>
	);
};

export default MyApp
