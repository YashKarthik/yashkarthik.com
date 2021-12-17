import {
	Text,
	Heading,
	Code,
} from '@chakra-ui/react';

const Paragraph = (props:any) => {
	return (
		<Text p='0' m='0 0 20px 0'
			fontWeight='400' fontSize={{base: '0.95em',sm:'1em', md:'1.075em', lg:'1.1em', xl: '1.125em'}}
			textColor='blackAlpha.800' letterSpacing='0.015em'
		{...props} />
	);
}

const Blockquote = (props:any) => (
<>
  <blockquote style={{borderLeft: '2px solid #718096', padding:'0', backgroundColor:'#E2E8F0'}}>
    <Text fontSize='0.93em' fontStyle='italic' 
				m='0' p='13px 2px 1px 10px'
			{...props} />
  </blockquote>
</>
)


const MDXComponents:any = {
	p: (props:any) => <Paragraph {...props} />,
	inlineCode: (props:any) => <Code p='1'{...props} />,
	code: (props:any) => <Code p='1'{...props} />,
	h1: (props:any) => <Heading size='lg' m='2px 0 5px 0' p='2px 0 5px 0' {...props} />,
	h2: (props:any) => <Heading size='md' p='0' m='15px 0 0px 0' {...props} />,
	blockquote: (props:any) => <Blockquote {...props} />
}

export default MDXComponents;
