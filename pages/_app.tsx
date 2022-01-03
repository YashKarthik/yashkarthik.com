import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXStyles';
import '../styles/globals.css'
import { customTheme } from '../components/ChakraThemes'

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
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</ChakraProvider>
	);
};

export default MyApp
