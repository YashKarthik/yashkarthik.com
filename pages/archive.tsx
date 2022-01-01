// TODO: sort post, group by month
import { useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Header } from '../components/Header';
import NextLink from 'next/link'
import {
	Text,
	Container,
  VStack,
	Heading,
  HStack,
  Spacer,
  Input,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import "@fontsource/dejavu-mono"
import { metaData } from '../components/Metadata';
import Fuse from 'fuse.js';

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
      <HStack align='start'>
			  <VStack align='stretch'>
			  	<NextLink href={`/posts/${postData.shortName}`} key={postData.shortName} passHref>
			  		<Link fontSize='1.3em' fontWeight='700'
			  			p='0' m='0' variant='heading'
			  		>
			  			{postData.title}
			  		</Link>
			  	</NextLink>
          <Text variant='secondary'>
            {postData.description}
          </Text>
			  </VStack>
        <Spacer />
			  <Text variant='secondary' fontWeight='500'
			  	fontFamily='DejaVu Mono' m='0' p='7px 0 0 0'
          fontSize='sm'
			  >
			  {postData.date}
			  </Text>
      </HStack>
		</Container>
	);

}

interface FuseResult {
  item: string,
};

const searchPosts = (listOfPosts:FuseResult[]|null, data:Meta[]) => {

  const results = listOfPosts?.map(post => {
    for (let index = 0; index < data.length; index++) {
      if (data[index].title == post.item) {
        return (data[index]);
      }
    }
  })

  return results;
}

const Archive: NextPage<Metas> = ({data}) => {

  const searchTextColor = useColorModeValue('black', 'white');
  const options = {
    includeScore: true
  }

  const titles = data.map((post:Meta) => {
    return post.title;
  })
  const fuse = new Fuse(titles, options)
  const [ useSearch, setSearch ] = useState<(Meta | undefined)[] | undefined>()

	return (
		<>
			<Header />
			<Container alignItems='start'>
			<Heading variant='title'>Archive</Heading>

        <Input variant='flushed' placeholder='Search...'
          borderTop='none' borderX='none'
          color={searchTextColor}
          m='0 0 30px 0'
          onChange={e => setSearch(searchPosts(fuse.search(e.target.value), data))}
          />

				{!useSearch || useSearch.length < 1 || useSearch == undefined?
          data.map((post:Meta) => {
            console.log('aosehuant')
				  	return (<PostRender postData={post} key={post.shortName}/>);
				  })
          :useSearch.map((post) => {
				  	return (<PostRender postData={post} key={post.shortName}/>); //get rid of these fake errors
				  })
        }
			</Container>
		</>
	);
}

export default Archive;
