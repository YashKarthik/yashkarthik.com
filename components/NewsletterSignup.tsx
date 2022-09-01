import {
  Box,
  useColorModeValue,
  Text,
  FormControl,
  Input,
  Stack,
  Button,
  Spacer,
  Link
} from "@chakra-ui/react";
import thumbImg from '../public/thelatenightbuilders.png'
import Image from 'next/image'
import { colors } from '../themes/ChakraThemes';

const Newsletter = ({gapTop}:{gapTop: string}) => {

  const boxColor = useColorModeValue(
    colors.bordersAndShadows.lightMode,
    colors.bordersAndShadows.darkMode,
  );

  return (
    <Box
      id='newsletter-container'
      bg={boxColor}
      borderRadius='6'
      mt={gapTop}
    >
      <Stack direction='column'>
        <Stack
          direction='row'
        >
          <Stack direction='column' p='4' pb='0'>
            <Text
              fontSize='2xl'
              fontWeight='600'
              color='white'
            >
              The Latenight Builders
            </Text>
            <Text
              color='gray.400'
              pt='1'
            >
              Get a front row seat to my experiments,
              failures and insights from them. Weekly
              updates on stuff I'm building, nuggets on crypto,
              code and biz, and insights from across the web.
            </Text>
          </Stack>
          <Box
            p='4'
            maxW={{base:'0', md:'165px'}}
          >
            <Image
              src={thumbImg}
              alt='Me'
            />
          </Box>
        </Stack>
        <form
          action='https://www.getrevue.co/profile/yashkarthik/add_subscriber'
          method='post'
          target='_blank'
        >
          <Stack
            direction='row'
            px='4' pb='4'
          >
          <FormControl>
            <Input
              focusBorderColor='purple.300'
              variant={'filled'}
              bgColor='gray.900'
              textColor='white'
              borderWidth={1}
              borderRadius='2'
              id={'email'}
              type={'email'}
              required
              placeholder={'Your email...'}
              aria-label={'Your Email'}
              name='member[email]'
              _hover={{}}
            />
          </FormControl>

          <Spacer />

          <FormControl w='auto'>
            <Button
              colorScheme='purple'
              variant='outline'
              borderRadius='2'
              type='submit'
              value='Submit'
              name='member[subscribe]'
            >
              Subscribe
            </Button>
          </FormControl>
          </Stack>
        </form>

        <Text
          textAlign='center'
          variant='secondary'
          fontSize='0.8em'
          pb='4' px='4'
        >
          By subscribing, you agree with Revue’s{' '}
          <Link href='https://www.getrevue.co/terms' isExternal>
            Terms of Service
          </Link>
          {' '}and {' '}
          <Link href='https://www.getrevue.co/privacy' isExternal>
            Privacy Policy
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}

export default Newsletter;
