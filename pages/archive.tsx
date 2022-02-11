// TODO: sort post, group by month
import { useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import NextLink from 'next/link'
import Head from 'next/head'
import {
    Text,
    Container,
    VStack,
    Heading,
    HStack,
    Input,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
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

const PostRender = ({ postData }: { postData: Meta }) => {

    return (
        <Container pt='30px' maxW='70ch'>
            <HStack align='start'>
                <VStack align='stretch'>
                    <NextLink href={`/posts/${postData.shortName}`} key={postData.shortName} passHref>
                        <Link fontSize='1.1em' fontWeight='700'
                            p='0' m='0' variant='heading'
                        >
                            {postData.title}
                        </Link>
                    </NextLink>
                    <Text variant='secondary' fontWeight='bolder'
                          fontFamily='monospace'
                          fontSize='sm'
                    >
                      {postData.date}
                    </Text>
                </VStack>
            </HStack>
        </Container>
    );

}

interface FuseResult {
    item: string,
};

const searchPosts = (listOfPosts: FuseResult[] | null, data: Meta[]) => {

    const results = listOfPosts?.map(post => {
        for (let index = 0; index < data.length; index++) {
            if (data[index].title == post.item) {
                return (data[index]);
            }
        }
    })

    return results;
}

const Archive: NextPage<Metas> = ({ data }) => {

    const searchTextColor = useColorModeValue('black', 'white');
    const options = {
        includeScore: true
    }

    const titles = data.map((post: Meta) => {
        return post.title;
    })
    const fuse = new Fuse(titles, options)
    const [useSearch, setSearch] = useState<(Meta | undefined)[] | undefined>()

    return (
        <>
            <Head>
                <title>yashKarthik</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content='Essays by yashKarthik - web3, programming, and physics.' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="robots" content="all" />

                <meta name="og:title" content='yashkarthik' />
                <meta name="og:description" content='Essays by yashKarthik -  web3, programming, and physics.' />
                <meta name="og:type" content='blog' />
                <meta name="og:image" content='https://yashkarthik.xyz/ogImage.png' />
                <meta name="og:url" content='https://yashkarthik.xyz' />

                <meta name="twitter:site" content="@_yashKarthik" />
            </Head>
            <Header />
            <Container alignItems='start' mb='100px'>
                <Heading variant='title'
                    m='50px 0 10px 20px'
                >
                    Archive
                </Heading>

                <Input variant='flushed' placeholder='Search...'
                    borderTop='none' borderX='none'
                    color={searchTextColor}
                    my='10px' mx='20px'
                    onChange={e => setSearch(searchPosts(fuse.search(e.target.value), data))}
                />

                {!useSearch || useSearch.length < 1 || useSearch == undefined ?
                    data.map((post: Meta) => {
                        console.log('aosehuant')
                        return (<PostRender postData={post} key={post.shortName} />);
                    })
                    : useSearch.map((post) => {
                        // used post! to get rid of these errors which i know will not happen
                        return (<PostRender postData={post!} key={post!.shortName} />);
                    })
                }
            </Container>
            <Footer />
        </>
    );
}

export default Archive;
