import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
		<>
			<Header />
			<Container pt={[70, 70, 85, 85, 85]} maxW='70ch'>
				I explore my curiousity and share what I learn along the way. Essays on web3,
				economics, and internet culture. It&apos;s my excuse for playing around with
				new ideas and practicing the art of writing.
			</Container>
		</>
	)
}

export default Home
