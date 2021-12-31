import {
	Text,
	Heading,
	Code,
} from '@chakra-ui/react';
import { colors } from './ChakraThemes';

const Blockquote = (props:any) => (
<>
  <blockquote style={{borderLeft: '2px solid rgba(80, 73, 69, 0.7)', padding:'0'}}>
    <Text variant='blockquote'
			{...props} />
  </blockquote>
</>
)


const MDXComponents:any = {
	p: (props:any) => <Text fontSize={{base: '0.95em',sm:'1em', md:'1.05em', lg:'1.05em', xl: '1em'}} {...props} />,
	inlineCode: (props:any) => <Code colorScheme='orange' {...props} />,
	code: (props:any) => <Code colorScheme='orange' {...props} />,
	h1: (props:any) => <Heading size='lg' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
	h2: (props:any) => <Heading size='md' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
	h3: (props:any) => <Heading size='sm' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
	blockquote: (props:any) => <Blockquote {...props} />,
  li: (props:any) => <li as='Text' style={{color: colors.contentTextColor}} {...props} />
}

export default MDXComponents;
