import type { NextPage, GetStaticProps, } from 'next'
import NextLink from 'next/link'
import {
	Container,
	Text,
	Divider,
	VStack,
	Link
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { metaData, firstBits } from '../components/Metadata'
import '@fontsource/open-sans'

interface Meta {
	shortName: string,
	title: string,
	date: string,
	description: string,
	content: string
};



export const getStaticProps = async () => {
	
	const allFilesMetadata = await metaData();
	const metadata = allFilesMetadata.props.sortedData;
	const AllFileData = await firstBits(metadata)
		.then(arrMetaData => { return arrMetaData; })
		.catch(e => console.log('ERROr in reading', e))

  return {
    props: {
			AllFileData 
		}
  }
}

const PostRender = ({postData}: {postData:Meta}) => {

	return (
		<Container p='0' pt='30px' maxW='70ch'
			fontSize={{base: '0.95em',sm:'1em', md:'1.05em', lg:'1.05em', xl: '1.09em'}}
		>
			<VStack align='start'>

				<NextLink href={`/posts/${postData.shortName}`} key={postData.shortName} passHref>
					<Link variant='heading' fontSize='1.5em'
						p='0' m='0'
						_hover={{textColor:'blue.600', cursor:'pointer'}}
					>
						{postData.title}
					</Link>
				</NextLink>

				<Text fontFamily='Open Sans' fontSize='inherit'
					p='2px' variant='description'
				>
					{postData.description}
				</Text>

				<Text variant='secondary' fontFamily='Open Sans'
					letterSpacing='0.1px' fontSize='0.9em'
				>
					{postData.content} ...{' '}
					<NextLink href={`/posts/${postData.shortName}`} key={postData.shortName} passHref>
						<a style={{color:'inherit', fontSize:'13px'}}
						>
						More</a>
					</NextLink>
				</Text>

				<Text fontWeight='500' fontSize='0.9em' variant='secondary'
					fontFamily='DejaVu Mono' m='0' opacity='0.7'
				>
				{postData.date}
				</Text>
			</VStack>
		</Container>
	);
}

const Home = ({ AllFileData }:{AllFileData:Meta[]}) => {
	
  return (
		<div>
			<Header />
			<Container pt={[10, 10, 50, 50, 50]}
				centerContent={true} mx='auto'
				maxW={{xl:'70ch', lg:'65ch', md:'60ch', sm:'55ch', base:'auto'}}
				px={{xl:'0', lg:'0', md:'10px', sm:'10px', base:'0'}}
				overflowWrap='anywhere'
			>
				<Text fontSize={{base: '0.95em',sm:'1em', md:'1.05em', lg:'1.05em', xl: '1.09em'}}
				>
					I explore my curiousity and share what I learn along the way. Essays on web3,
					economics, and internet culture. It&apos;s my excuse for playing around with
					new ideas and practicing the art of writing.
				</Text>
				<Divider />
				<PostRender postData={AllFileData[1]}/>
			</Container>
		</div>
	)
}

export default Home
