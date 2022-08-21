import '../styles/globals.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app';

import { useEffect } from 'react';
import { Header } from "../components/Header";
import { Footer } from '../components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../themes/ChakraThemes'

import MDXComponents from '../themes/MDXStyles';
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
      <Header />
			<Component components={MDXComponents} {...pageProps} />
      <ParticlesBg />
      <Footer />
		</ChakraProvider>
	);
};

export default MyApp;
