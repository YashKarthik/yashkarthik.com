import { FormEvent, useState } from 'react';
import thumbImg from '../public/thelatenightbuilders.png'
import Image from 'next/image'
import { colors } from '../themes/ChakraThemes';
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

const Newsletter = ({gapTop}:{gapTop: string}) => {

  const [buttonText, setButtonText] = useState('Subscribe');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ buttonTheme, setButtonTheme ]= useState('purple');

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email: string = event.currentTarget!.email.value;
    setIsLoading(true);

    const res = await fetch('/api/newsletterSignup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    });

    setIsLoading(false);
    if (res.status == 200) {
      setButtonText('Subbed!');
      setButtonTheme('green');
    }
    else {
      setButtonText('Error. Plz reload');
      setButtonTheme('red');
    }

    const r = await res.json()
    console.log(res.status, res.statusText, `Error: ${r.error}` );

  }

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
        <form onSubmit={e => handleSignup(e)}>
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
              name='email'
              _hover={{}}
            />
          </FormControl>

          <Spacer />

          <FormControl w='auto'>
            {buttonText != 'Subbed!'
              ? <Button
                  type='submit'
                  value='Submit'
                  name='subscribe'
                  isLoading={isLoading}
                  borderRadius='2'
                  variant='outline'
                  colorScheme={buttonTheme}
                >
                  {buttonText}
                </Button>
              : <Button
                  as='a'
                  borderRadius='2'
                  variant='outline'
                  colorScheme='green'
                  target='_blank'
                  href="https://www.getrevue.co/profile/yashkarthik"
                >
                Read
                </Button>
            }
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
