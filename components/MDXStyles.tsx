import {
	Text,
	Heading,
	Code,
} from '@chakra-ui/react';
import '@fontsource/open-sans'
import '@fontsource/roboto'
import '@fontsource/roboto'
import '@fontsource/ibm-plex-sans'
import '@fontsource/ibm-plex-sans/700.css'

const Paragraph = (props:any) => {
	return (
		<Text p='0' m='0 0 20px 0'
			fontWeight='400' fontSize={{base: '0.95em',sm:'1em', md:'1.05em', lg:'1.05em', xl: '1.09em'}}
			fontFamily='IBM Plex Sans' letterSpacing='0.015em'
		{...props} />
	);
}

const Blockquote = (props:any) => (
<>
  <blockquote style={{borderLeft: '2px solid #718096', padding:'0'}}>
    <Text fontSize='0.93em' fontStyle='italic' backgroundColor='rgba(45, 55, 72, 0.25)'
				m='0' p='13px 2px 1px 10px'
			{...props} />
  </blockquote>
</>
)


const MDXComponents:any = {
	p: (props:any) => <Paragraph {...props} />,
	inlineCode: (props:any) => <Code p='1'{...props} />,
	code: (props:any) => <Code p='1'{...props} />,
	h1: (props:any) => <Heading size='xl' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
	h2: (props:any) => <Heading size='lg' m='5px 0 5px 0' p='5px 0 0px 0' {...props} />,
	blockquote: (props:any) => <Blockquote {...props} />
}

export default MDXComponents;
