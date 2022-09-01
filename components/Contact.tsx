import { colors } from '../themes/ChakraThemes';
import { AiOutlineMail } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri'
import { IoMdCopy } from 'react-icons/io'
import {
  Container,
  Text,
  Heading,
  HStack,
  IconButton,
  Link,
  useClipboard
} from '@chakra-ui/react';

const Contact = () => {

  const name = 'yashkarthik1019'
  const domain = 'protonmail.com'
  const { hasCopied, onCopy } = useClipboard(name + '@' + domain);

  return (
    <Container
      my='52'
      h='200px'
      flexDir='column'
      justifyContent='space-evenly'
    >
      <HStack alignItems='end'>
        <Text color={colors.accent.darkMode}>So...</Text>
        <Heading size='md'> Get in Touch? </Heading>
      </HStack>

      <Text variant='secondary' pt='2'>
        I’m currently looking for new opportunities in blockchain development.
        Whether you wanna collaborate or just want to say hi, my inbox is always open.
      </Text>

      <HStack pt='5' justifyContent='center'>
        <IconButton
          as={Link}
          variant='outline'
          colorScheme='purple'
          borderRadius={2}
          aria-label='DM on Twitter'
          icon={<RiTwitterLine />}
          href="https://twitter.com/_yashKarthik"
        />

        <IconButton
          as={Link}
          variant='outline'
          colorScheme='purple'
          borderRadius={2}
          aria-label='Email'
          onClick={onCopy}
          icon={hasCopied ? <IoMdCopy /> : <AiOutlineMail  /> }
        />
      </HStack>
    </Container>
  );
}

export default Contact;
