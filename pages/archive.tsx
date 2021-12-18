// TODO: sort post, group by month

import { NextPage, GetStaticProps } from 'next';
import { Header } from '../components/Header';
import NextLink from 'next/link'
import {
	Text,
	Container,
	HStack
} from '@chakra-ui/react'
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/"
import "@fontsource/roboto/400.css"
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

//const PostRender = ({postData}: {postData: Meta}) => {
//
//	return (
//		<Container pt={[70, 70, 85, 85, 85]} maxW='70ch'>
//			<HStack>
//				<Text mr='5px'>
//					{(new Date(postData.date)).toString().slice(4, 15)}
//				</Text>
//				<NextLink href={`/posts/${postData.shortName}`} key={postData.shortName} passHref>
//					<Text fontSize='1.3em' fontFamily='Open Sans' fontWeight='700'
//						p='0' m='0'
//						_hover={{textColor:'blue.600', cursor:'pointer'}}
//					>
//						{postData.title}
//					</Text>
//				</NextLink>
//			</HStack>
//		</Container>
//	);
//
//}

const Archive: NextPage<Metas> = ({data}) => {

	console.log(data)

	return (
		<div>
			<Header />
			<Text>hello</Text>
		</div>
	);
}

export default Archive;
