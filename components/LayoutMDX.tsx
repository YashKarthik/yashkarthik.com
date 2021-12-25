import { Header } from '../components/Header';
import { Container, Text, Divider, Heading } from '@chakra-ui/react'
import Head from 'next/head'

interface Props {
	meta: {
		shortName: string,
		title: string,
		date: string,
		description: string
	},

	content: string
}

export default function LayoutMDX(props: Props) {
	
	return (
		<>
      <Head>
				<title>{props.meta.title}</title>
        <meta name="description" content={`Essay by yashKarthik.eth - ${props.meta.title}`} />

        <meta name="og:description" content={`Essay by yashKarthik.eth - ${props.meta.title}`} />
        <meta name="og:title" content={props.meta.title} />
        <meta name="og:site_name" content={'yashkarthik.eth'} />
        <meta name="og:type" content={'article'} />
        <meta name="og:url" content={`https://yashkarthik.eth.link/posts/${props.meta.shortName}`} />
        <meta name="og:image" content='https://yashkarthik.eth.link/public/ogImage.png' />
      </Head>

			<Header />

			<Container pt={[0, 55]} px={{xl:'0', lg:'0', md:'0', sm:'10px', base:'20px'}} 
				maxW={{xl:'70ch', lg:'65ch', md:'60ch', sm:'55ch', base:'45ch'}}
				fontSize={{base: '0.9em',sm:'0.95em', md:'1em', lg:'1.1em', xl: '1.125em'}}
			>

				<Text variant='secondary' fontFamily='monospace' fontSize='1.3em'>
					{props.meta.date}
				</Text>
				<Heading p='0' m='0' size='2xl' fontWeight='bolder'>{props.meta.title}</Heading>
				<Text fontWeight='300' fontSize='1.125em' letterSpacing='0.015em'
					p='10px 0 5px 0' m='20px 0 5px 0' variant='secondary'
				>
					{props.meta.description}
				</Text>
				<Divider mb='20px'/>
				{props.content}

			</Container>

		</>
	);
}
