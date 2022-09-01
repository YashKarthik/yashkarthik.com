import '../styles/globals.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { Header } from "../components/Header";
import { Footer } from '../components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../themes/ChakraThemes'

import MDXComponents from '../themes/MDXStyles';
import ParticlesBg from '../components/ParticlesBg';

const setSmoothScroll = (isSmooth: boolean) => {
  document.documentElement.style.scrollBehavior = isSmooth ? 'smooth' : 'auto';
}

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    setSmoothScroll(true)
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
	}, [router])


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
