import Image from 'next/image'
import profilePic from '../public/ogImage.png'
import { colors } from '../themes/ChakraThemes';
import {
  Container,
  Text,
  Heading,
  Box,
  Stack
} from '@chakra-ui/react';

export const AboutMe = () => {
  return (
    <Container
      mx='auto'
      centerContent={true}
      overflowWrap='anywhere'
      py={[10, 10, 100, 100, '300px']}
      px={{ xl: '0', lg: '0', md: '10px', sm: '10px', base: '20px' }}
      maxW={{ xl: '100ch', lg: '90ch', md: '80ch', sm: '70ch', base: 'auto' }}>
      <Heading
        pl='20'
        pb='4'
        alignSelf='start'
        _hover={{
          textColor: colors.accent.darkMode
        }}
      >
        About Me
      </Heading>
      <Stack
        alignItems='start'
        justifyItems='start'
        direction={['column', 'row']}
      >
        <Box
          p='5'
          maxW='250px'
        >
          <Image
            src={profilePic}
            alt='Me'
          />
        </Box>
        <Box
          px='4'
          maxW={{ xl: '65ch', lg: '65ch', md: '60ch', sm: '55ch', base: 'auto' }}
        >
          <Text
            py={5}
            fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1.09em' }}>
            Hi, I'm Yash. A programmer and writer, with a knack for "googling it" and figuring things out.
            I was introduced to computers through my school's Robotics Lab in 2017.
            Fast forward 5 years. I've progressed from scratch-like programming to python, and typescript and
            moved on from lego robots to raspberry pi and 3d printed parts.
          </Text>

          <Text fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1.09em' }}>
            Over covid, I switched from hardware to software. I threw a bunch of things to see what would stick:
            I tried out machine learning & data science, app development with Flutter, and web development.
            I decided to stick with web development to build user-facing products.
          </Text>

          <Text py={5} fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1.09em' }}>
            Over the past year I've been exploring and learning about the blockchain space.
            I dipped my foot into Ethereum by building simple smart contracts. The idea of a decentralized
            future exites me so I'm currently diving deeper into this.
          </Text>

        </Box>
      </Stack>
    </Container>
  );
}
