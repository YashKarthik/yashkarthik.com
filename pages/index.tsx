import Head from 'next/head';
import NextLink from 'next/link';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { colors } from '../themes/ChakraThemes';
import { metaData, Meta } from '../scripts/Metadata';
import { generateRssFeed } from '../scripts/RSSFeed';
import {
  Container,
  Text,
  Divider,
  VStack,
  Link,
  Box
} from '@chakra-ui/react';

export const getStaticProps = async () => {

  await generateRssFeed();

  const metadata = await metaData()
    .then(m => m.props.sortedData);

  return {
    props: {
      metadata
    }
  }
}

const PostRender = ({ postData }: { postData: Meta }) => {

  return (
    <Container
      px='2'
      py='2'
      my='3'
      maxW='70ch'
      fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1.09em' }}
      bgColor='#0a081e'
      border='2px dashed #110f26'
      borderRadius='3'>
      <VStack align='start'>

        <NextLink
          href={`/archive/${postData.shortName}`}
          key={postData.shortName} passHref>
          <Link
            variant='heading'
            fontSize='1.5em'
            p='0' m='0'>
            {postData.title}
          </Link>
        </NextLink>

        <Text
          fontSize='inherit'
          p='0' m='0'
          variant='secondary'>
          {postData.description}
        </Text>

        <Text
          letterSpacing='0.1px'
          fontSize='0.9em'>

          {postData.long_desc}...{' '}
          <NextLink
            href={`/archive/${postData.shortName}`}
            key={postData.shortName}
            style={{ color: 'inherit', fontSize: '13px', textDecoration: 'underline' }}
            passHref>
            More
          </NextLink>
        </Text>

        <Text
          fontWeight='500'
          fontSize='0.9em'
          variant='secondary'
          fontFamily='Space Mono'
          m='0' opacity='0.7'>
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

    <>
      {props.slice(0, postNum).map((post: Meta) => (
        <PostRender postData={post} key={post.shortName} />
      ))}

      {props.length > postNum &&
        <Link
          onClick={handleClick}
          fontWeight='600'
          p='0' m='0'
          background='none'
          _hover={{ cursor: 'pointer' }}>
          Read More
        </Link>
      }
    </>
  );
}

const Home = ({ metadata }: { metadata: Meta[] }) => {

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
        <Container
          centerContent={true}
          overflowWrap='anywhere'
          mx='auto'
          py={[10, 10, 50, 50, 50]}
          px={{ xl: '0', lg: '0', md: '10px', sm: '10px', base: '20px' }}
          maxW={{ xl: '70ch', lg: '65ch', md: '60ch', sm: '55ch', base: 'auto' }}>
          <Text
            pb='10px'
            fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1.09em' }}>
            I explore my curiousity and share what I learn along the way. Essays about web3,
            programming, and occasionally physics. It&apos;s my excuse for playing around with
            new ideas and practicing the craft of writing.
          </Text>
          <Divider borderColor={colors.secondaryText.darkMode} />
          <Box>
            <RenderPosts props={metadata} />
          </Box>
        </Container>

      </div>
      <Footer />
    </>
  );
}

export default Home;
