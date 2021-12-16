import React from 'react';
import { Header } from '../../components/Header'
import Head from 'next/head';
import { Container, Text, Box } from '@chakra-ui/react'
import { getAllPostIds, getPostData, AllPostIdsStructure } from '../../components/processPost'

interface PostDataType {
	
	postData: {
		title: string,
		date: string,
		contentHTML: string
	}

};

// render function
export default function Post(props: PostDataType) {
	return (
		<html>
      <Head>
        <title>{props.postData.title}</title>
      </Head>

			<main>
				<Header />
				<article>
					<Text>{props.postData.title}</Text>
					<Box>{props.postData.date}</Box>
					<Container dangerouslySetInnerHTML={{__html: props.postData.contentHTML}} />
				</article>
			</main>
		</html>
	);
}

interface PathParamsType {
	params: {
		id: number
	}
}

// params is part of a context object; context.params contains route parameters like id.
export async function getStaticProps({ params: { id } }: PathParamsType ) {
	const postData = await getPostData(id);
	return {
		props: {
			postData
		}
	}
}

interface PathReturnType {
	paths: AllPostIdsStructure[];
	fallback: boolean;
}

export async function getStaticPaths(): Promise<PathReturnType> {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}
