import { colors } from '../themes/ChakraThemes';
import {
  Heading,
  HStack,
  Text,
  Container
} from '@chakra-ui/react';

export const Intro = () => (
  <Container
    my='28'
    h='200px'
    display='flex'
    flexDir='column'
    justifyContent='space-evenly'
  >
    <HStack alignItems='end'>
      <Text color={colors.accent.darkMode}>Hi, my name is</Text>
      <Heading> Yash Karthik </Heading>
    </HStack>

    <HStack pt='5' alignItems='end'>
      <Heading
        size='lg'
        color={colors.secondaryText.darkMode}
      >
        Coding the Future
      </Heading>
      <Text color={colors.accent.darkMode}>(and writing about it)</Text>
    </HStack>

    <Text variant='secondary' pt='5'>
      I’m a software developer specializing in smart contract engineering and backend development.
      Currently, I’m focused on building accessible, human-centered interfaces at Invento Robotics.
    </Text>

    <Text variant='secondary' pt='3'>
      The learn-by-doing culture of this space helped me get my hands dirty building stuff. This blog is my attempt
      at giving back to the internet for others to follow.
    </Text>

  </Container>
);
