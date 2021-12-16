import React from 'react';
import { Header } from '../../components/Header'
import Head from 'next/head';
import { Container, Text, Box } from '@chakra-ui/react'
import { getAllPostIds, getPostData } from '../../components/processPost'

interface PostDataType {
	title: string,
	date: string,
	contentHTML: string
};

export default function Post(props: PostDataType): React.FC<JSX.Element> {
	return (
		<body>
      <Head>
        <title>{props.postData.title}</title>
      </Head>

			<main>
				<Header />
				<article>
					<Text>{props.postData.title}</Text>
					<Box>{props.postData.date}</Box>
					<Container>{props.postData.contentHTML}</Container>
				</article>
			</main>
		</body>
	);
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}
