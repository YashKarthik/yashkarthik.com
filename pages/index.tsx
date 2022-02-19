//import type { NextPage, GetStaticProps, } from 'next'
import NextLink from 'next/link';
import {
    Container,
    Text,
    Divider,
    VStack,
    Link,
    Box
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { metaData, firstBits } from '../components/Metadata';
import Head from 'next/head';
import { useState } from 'react';
import generateRssFeed from '../components/RSSFeed';

interface Meta {
    shortName: string;
    title: string;
    date: string;
    description: string;
    content?: string;
};



export const getStaticProps = async () => {

    await generateRssFeed();

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

const PostRender = ({ postData }: { postData: Meta }) => {

    return (
        <Container p='0' pt='30px' pb='30px' maxW='70ch'
            fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1.09em' }}
        >
            <VStack align='start'>

                <NextLink href={`/archive/${postData.shortName}`} key={postData.shortName} passHref>
                    <Link variant='heading' fontSize='1.5em'
                        p='0' m='0'
                    >
                        {postData.title}
                    </Link>
                </NextLink>

                <Text fontSize='inherit'
                    p='0' m='0' variant='secondary'
                >
                    {postData.description}
                </Text>

                <Text
                    letterSpacing='0.1px' fontSize='0.9em'
                >
                    {postData.content}...{' '}
                    <NextLink href={`/archive/${postData.shortName}`} key={postData.shortName} passHref>
                        <a style={{ color: 'inherit', fontSize: '13px', textDecoration:'underline' }}
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

const RenderPosts = ({ props }: { props: Meta[] }) => {

    const [postNum, setPostNum] = useState(3); // Default number of posts dislplayed

    function handleClick():void {
        setPostNum(prevPostNum => prevPostNum + 5) // 3 is the number of posts you want to load per click
    }

    return (

        <div>
            {props.slice(0, postNum).map((post: Meta) => (
                <PostRender postData={post} key={post.shortName} />
            ))}

            {props.length > postNum ?
                <Link onClick={handleClick} fontWeight='600'
                    p='0' m='0' background='none' _hover={{ cursor: 'pointer' }}
                >Read More</Link> : <></>}

        </div>
    )
}

const Home = ({ AllFileData }: { AllFileData: Meta[] }) => {

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
            <div style={{ marginBottom: '30px' }}>
                <Header />
                <Container centerContent={true}
                    mx='auto' overflowWrap='anywhere'
                    maxW={{ xl: '70ch', lg: '65ch', md: '60ch', sm: '55ch', base: 'auto' }}
                    px={{ xl: '0', lg: '0', md: '10px', sm: '10px', base: '20px' }}
                    pt={[10, 10, 50, 50, 50]}
                >
                    <Text fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1.09em' }}

                    >
                        I explore my curiousity and share what I learn along the way. Essays about web3,
                        programming, and occasionally physics. It&apos;s my excuse for playing around with
                        new ideas and practicing the craft of writing.
                    </Text>
                    <Divider />
                    <Box>
                        <RenderPosts props={AllFileData} />
                    </Box>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Home
