import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
		<>
			<Header />
			<Text position='absolute' left='50%' top='300'>Hello World</Text>
		</>
	)
}

export default Home
