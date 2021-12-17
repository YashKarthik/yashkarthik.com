import { Header } from '../components/Header'
import { Container, Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
		<Box bgColor='light.background'>
			<Header />
			<Container pt={[70, 70, 85, 85, 85]} maxW='70ch'>
				About Page
			</Container>
		</Box>
	)
}

export default Home
