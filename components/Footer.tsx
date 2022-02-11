import {
  Container,
  Link,
  Text
} from "@chakra-ui/react";
import NextLink from 'next/link';

const Footer = () => {

  return (
    <Container centerContent={true} textAlign='center'
      maxW={{ xl: '70ch', lg: '65ch', md: '60ch', sm: '55ch', base: 'auto' }}
      p='20px 0 10px 0' fontSize='0.8rem'
    >
      <Text variant='secondary'>
        All text licensed under the Creative Commons Attribution 4.0 International License{' '}
        <NextLink href="/copyright" passHref>
	      <Link p='0' m='0' variant='secondary'>
            (more)
	      </Link>
        </NextLink>
      </Text>
    </Container>
  );

}

export default Footer;
