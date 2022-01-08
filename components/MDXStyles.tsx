import {
	Text,
	Heading,
	Code,
    Box,
    Link as ChakraLink
} from '@chakra-ui/react';
import Image from 'next/image';

const Blockquote = (props:any) => (
<>
  <blockquote style={{borderLeft: '2px solid #2c5282', padding:'0', margin:'20px 0 20px 40px'}}>
    <Text variant='blockquote'
			{...props} />
  </blockquote>
</>
)

interface Image {
    alt: string,
    src: string,
    title: string
}

export const OptimizedImage = (props:Image) => (
    <Box my='10' align='center'>
        <Image alt={props.alt} quality={100} src={props.src}/>
        <Text as='i' variant='secondary' fontSize='0.85em'>{props.title}</Text>
    </Box>
)

const MDXComponents: any = {
    p: (props: string) => <Text fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1em' }} m='1rem 0 2rem 0' mx='0' {...props} />,
    h1: (props: string) => <Heading size='lg' m='2.25rem 0 .7rem 0' {...props} />,
    h2: (props: string) => <Heading size='md' m='2.25rem 0 .6rem 0' {...props} />,
    h3: (props: string) => <Heading size='sm' m='2.25rem 0 .5rem 0' {...props} />,
    a: (props: any) => <ChakraLink isExternal variant='secondary' textDecoration='underline' {...props}/>,
    ul: (props: string) => <ul style={{margin:'20px 0 20px 20px'}} {...props} />,
    blockquote: (props: string) => <Blockquote {...props} />,
    inlineCode: (props: string) => <Code colorScheme='blue' {...props} />,
    code: (props: any) => <Code variant='outline' display='block' whiteSpace='pre' p='10px' mb='20px' colorScheme='blue' {...props} />,
}

export default MDXComponents;
