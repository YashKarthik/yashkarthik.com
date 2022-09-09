import Image from 'next/image';
import NextLink from 'next/link';
import { colors } from './ChakraThemes';
import {
	Text,
	Heading,
	Code,
  Box,
  Link as ChakraLink,
  useColorModeValue
} from '@chakra-ui/react';

const Blockquote = (props: any) => {
  const quoteBar = useColorModeValue("#6B46C1", "#B794F4");
  const quoteBody = useColorModeValue('rgba(107, 70, 193, .1)', 'rgba(183, 148, 244, .1)');
  const quoteText = useColorModeValue(colors.secondaryText.lightMode, colors.secondaryText.darkMode);

  return (
    <blockquote
      style={{
        borderLeft: `2px solid ${quoteBar}`,
        margin:'20px 0 20px 40px',
        padding:'0',
      }}>
      <Box
        m='0'
        p='13px 2px 1px 10px'
        bg={quoteBody}
        textColor={quoteText}
        fontStyle='italic'
        fontSize='0.93em'
        {...props}
      />
    </blockquote>
  );
}

interface Image {
  alt: string,
  src: string,
  title: string
}

export const OptimizedImage = (props:Image) => (
  <Box my='10' textAlign='center'>
    <Image alt={props.alt} quality={100} src={props.src}/>
    <Text as='i' variant='secondary' fontSize='0.85em'>{props.title}</Text>
  </Box>
)

function getAnchor(text:string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

const AnchorLink = ({text}:{text:string}) => {
  return (
    <NextLink href={'#' + getAnchor(text).toString()} passHref>
      <Box>
        {text}
        <ChakraLink
          fontSize='inherit'
          fontWeight='hairline'
          fontStyle='italic'
          textDecor='underline'
          ml="2"
          opacity='0'
          _groupHover={{
            color:'purple.600',
            opacity:'1'
          }}
        >
          {'#'}
        </ChakraLink>
      </Box>
    </NextLink>
  );
}

const MDXComponents: any = {
  blockquote: (props: {children:string}) => <Blockquote {...props} />,
  code: (props: {children:string}) => <Code variant='subtle' colorScheme='purple' {...props} />,
  ul: (props: {children:string}) => <ul style={{margin:'20px 0 20px 20px'}} {...props} />,
  ol: (props: {children:string}) => <ol style={{margin:'20px 0 20px 20px'}} {...props} />,
  h3: (props: { children: string }) => <Heading role='group' id={getAnchor(props.children)} as="h4" size='md' m='2.25rem 0 0 0'><AnchorLink text={props.children} /></Heading>,
  h2: (props: { children: string }) => <Heading role='group' id={getAnchor(props.children)} as="h3" size='lg' m='2.25rem 0 .6rem 0'><AnchorLink text={props.children} /></Heading>,
  h1: (props: { children: string }) => <Heading role='group' id={getAnchor(props.children)} as="h2" size='xl' m='2.25rem 0 .7rem 0'><AnchorLink text={props.children} /></Heading>,
  a: (props: {children:string}) => <ChakraLink isExternal variant='secondary' textDecoration='underline' {...props}/>,
  p: (props: {children:string}) => <Text fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1em' }} m='1rem 0 2rem 0' mx='0' {...props} />,
}

export default MDXComponents;
