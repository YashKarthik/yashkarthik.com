import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import {
  Box,
  Heading,
  HStack,
  Text,
  Center
} from '@chakra-ui/react';

function About() {

  return (
    <>
      <Head>
        <title>About yashKarthik</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content='About yashKarthik - programmer and writer.' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="all" />

        <meta name="og:title" content='About yashkarthik' />
        <meta name="og:description" content='About yashKarthik -  programmer and writer' />
        <meta name="og:type" content='blog' />
        <meta name="og:image" content='https://yashkarthik.xyz/ogImage.png' />
        <meta name="og:url" content='https://yashkarthik.xyz' />

        <meta name="twitter:site" content="@_yashKarthik" />
      </Head>

      <div style={{ marginBottom: '30px' }}>
        <Header />
        <Box>
          <Center
            my='28'
            bgColor='blue'
            h='200px'
            display='flex'
            flexDir='column'
            justifyContent='space-evenly'
          >
            <Heading> PROGRAMMER AND WRITER </Heading>
            <HStack>
              <Heading> CODING THE FUTURE  </Heading>
              <Text>(and writing about it)</Text>
            </HStack>
            <Heading> NOW AVAILABLE FOR YOU </Heading>
          </Center>

          <AboutMe />
          <Projects />
        </Box>
      </div>
    </>
  )
}

export default About;
