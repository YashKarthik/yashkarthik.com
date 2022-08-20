import { NextPage } from 'next';
import { Header } from '../components/Header';
import Head from 'next/head'
import {
    Text,
    Container,
    Heading,
    Link,
} from '@chakra-ui/react'

const Copyright: NextPage = () => {

    return (
        <>
            <Head>
                <title>yashKarthik</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content='Essays by yashKarthik licensed under CC-BY 4.0' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="robots" content="all" />

                <meta name="og:title" content='yashkarthik' />
                <meta name="og:description" content='Essays by yashKarthik licensed under CC-BY 4.0.' />
                <meta name="og:type" content='blog' />
                <meta name="og:image" content='https://yashkarthik.xyz/ogImage.png' />
                <meta name="og:url" content='https://yashkarthik.xyz' />

                <meta name="twitter:site" content="@_yashKarthik" />
            </Head>

            <Header />
            <Container alignItems='start' mb='100px'>

                <Heading m='50px 0 50px 20px' >
                    Copyright
                </Heading>

                <Text>
                  All the words on this site are licensed under a{' '}
                  <Link href='https://creativecommons.org/licenses/by/4.0/' isExternal>
                    Creative Commons Attribution 4.0 International Public License. :)
                  </Link>
                </Text>

                <Text py='3'>
                  This means you're welcome to use the content however you see fit, as long as you link back here or mention my name ("attribution"). However, it would be nice if you asked permission before republishing any full-length essays. Thanks!
                </Text>

                <Text>
                  Everything above applies to the text on the site. As to the images - a lot of them come from other sites, and God only knows what licenses I've broken by copying them here. I try to cite sources whenever I can. If I have misused any of your content, please get in{' '}
                  <Link href='https://twitter.com/_yashKarthik' isExternal>
                      touch
                  </Link>
                  {' '} and I'll try to rectify it ASAP.
                </Text>

            </Container>
        </>
    );
}

export default Copyright;
