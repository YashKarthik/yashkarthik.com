// TODO: sort post, group by month

import { NextPage, GetStaticProps } from 'next';
import { Header } from '../components/Header';
import NextLink from 'next/link'
import {
	Text,
	Container,
  VStack,
	Heading,
	Flex
} from '@chakra-ui/react'
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/"
import "@fontsource/dejavu-mono"
import { metaData } from '../components/Metadata';

interface Meta {
	shortName: string,
	title: string,
	date: string,
	description: string
};

interface Metas {
	data: Meta[]
}



export const getStaticProps: GetStaticProps<Metas> = async () => {
	
	const allFilesMetadata = await metaData();
	const data = allFilesMetadata.props.sortedData;

  return {
    props: {
			data
		}
  }
}

const PostRender = ({postData}: {postData: Meta}) => {

	return (
		<Container pt='30px' maxW='70ch'>
			<VStack align='start'>
				<NextLink href={`/posts/${postData.shortName}`} key={postData.shortName} passHref>
					<Text fontSize='1.3em' fontFamily='Open Sans' fontWeight='700'
						p='0' m='0'
						_hover={{textColor:'blue.600', cursor:'pointer'}}
					>
						{postData.title}
					</Text>
				</NextLink>
				<Text textColor='gray.500' fontWeight='500'
					fontFamily='DejaVu Mono' m='0'
				>
				{postData.date}
				</Text>
			</VStack>
		</Container>
	);

}

const Archive: NextPage<Metas> = ({data}) => {

	console.log(data)

	return (
		<Flex direction='column'>
			<Header />
			<Container alignItems='start' pt='20px'>
			<Heading fontFamily='Open Sans'>Archive</Heading>
				{data.map((post:Meta) => {
					return (<PostRender postData={post} key={post.shortName}/>);
				})}
			</Container>
		</Flex>
	);
}

export default Archive;
