//import { srConfig } from '../config';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Intro } from '../components/Intro';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { Projects } from '../components/Projects';
import {
  Divider,
  Container
} from '@chakra-ui/react';

function About() {

  return (
    <>
      <Head>
        <title>yashKarthik / about</title>
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
        <Intro />
        <AboutMe />
        <Container><Divider /></Container>
        <Projects />
        <Container><Divider /></Container>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default About;