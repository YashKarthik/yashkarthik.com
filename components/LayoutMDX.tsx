import Head from 'next/head';
import Link from 'next/link';
import Newsletter from './NewsletterSignup';
import { BsArrowRightShort } from 'react-icons/bs';
import {
  Container,
  Text,
  Divider,
  Heading,
  Spacer,
  Link as LinkStyles
} from '@chakra-ui/react';

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
    <div>
      <Head>
        <title>{props.meta.title}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={`Essay by yashKarthik - ${props.meta.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="og:title" content={props.meta.title} />
        <meta name="og:site_name" content='yashKarthik' />
        <meta name="og:description" content={`Essay by yashKarthik - ${props.meta.title}`} />
        <meta name="og:type" content='article' />
        <meta name="og:url" content={`https://yashkarthik.xyz/archive/${props.meta.shortName}`} />
        <meta name="og:image" content='https://yashkarthik.xyz./ogImage.png' />

        <meta property="article:publisher" content="https://www.yashkarthik.xyz" />
        <meta name="twitter:site" content="@_yashKarthik" />
      </Head>

      <Container
        pb={[0, 35]} px={{ xl: '0', lg: '0', md: '0', sm: '10px', base: '20px' }}
        maxW={{ xl: '65ch', lg: '65ch', md: '60ch', sm: '55ch', base: '45ch' }}
        fontSize={{ base: '1em', lg: '1.1em', xl: '1.125em' }}
        overflowWrap='anywhere'>

        <Text
          fontFamily='Space Mono'
          fontWeight='bolder'
          variant='secondary'
          fontSize='0.9em'
          m='0 0 20px 0'
          p='0'>
          {props.meta.date}
        </Text>

        <Heading
          fontWeight='bolder'
          p='0 0 5px 0'
          m='0'
          size='xl'>
          {props.meta.title}
        </Heading>

        <Text
          fontWeight='300'
          variant='secondary'
          fontSize='1em'
          m='10px 0 0 0'
          p='0'>
          {props.meta.description}
        </Text>

        <Divider m='10px 0 20px 0' />
        {props.content}

        <Link href='/archive' passHref={true}>
          <LinkStyles
            fontWeight='bolder'
            flexDir='row'
          >
            More by yashKarthik
            <BsArrowRightShort style={{ display: 'inline', verticalAlign: 'middle' }} />
          </LinkStyles>
        </Link>

        <Newsletter gapTop='6'/>

      </Container>
    </div>
  );
}
