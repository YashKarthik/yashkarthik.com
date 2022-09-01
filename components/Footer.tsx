import {
  Container,
  Link,
  Text
} from "@chakra-ui/react";
import NextLink from 'next/link';

export const Footer = () => {

  return (
    <Container
      centerContent={true}
      textAlign='center'
      fontSize='0.8rem'
      px={{ xl: '0', lg: '0', md: '10px', sm: '10px', base: '20px' }}
      maxW={{ xl: '70ch', lg: '65ch', md: '60ch', sm: '55ch', base: 'auto' }}
    >
      <Text p='1' variant='secondary'>
        All text licensed under the Creative Commons Attribution 4.0 International License{' '}
        <NextLink href="/copyright" passHref>
	        <Link p='0' m='0'>
            (more)
	        </Link>
        </NextLink>
      </Text>

    </Container>
  );

}
