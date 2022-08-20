import '../styles/globals.css';
import '../styles/globals.css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import MDXComponents from '../themes/MDXStyles';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../themes/ChakraThemes'
import ParticlesBg from '../components/ParticlesBg';

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
			<Component components={MDXComponents} {...pageProps} />
      <ParticlesBg />
		</ChakraProvider>
	);
};

export default MyApp;
