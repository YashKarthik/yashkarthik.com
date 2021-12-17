import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXStyles';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<ChakraProvider resetCSS={false}>
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</ChakraProvider>
	);
};

export default MyApp
