import {
	Text,
	Heading,
	Code,
    Box
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
    type: string,
    alt: string,
    src: string,
    title: string
}

const OptimizedImage = (props:Image) => (
    <Box my='10' align='center'>
        <Image height={350} width={750} alt={props.alt} quality={100} src={props.src}/>
        <Text as='i' variant='secondary' fontSize='0.85em'>{props.title}</Text>
    </Box>
)


const MDXComponents: any = {
    p: (props: any) => <Text fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1em' }} {...props} />,
    inlineCode: (props: any) => <Code colorScheme='blue' {...props} />,
    code: (props: any) => <Code variant='outline' display='block' whiteSpace='pre' p='10px' mb='20px' colorScheme='blue' {...props} />,
    h1: (props: any) => <Heading size='lg' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
    h2: (props: any) => <Heading size='md' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
    h3: (props: string) => <Heading size='sm' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
    blockquote: (props: any) => <Blockquote {...props} />,
    img: (props: Image) => <OptimizedImage {...props}/>,
    ul: (props:any) => <ul style={{margin:'20px 0 20px 20px'}} {...props}/>
}

export default MDXComponents;
