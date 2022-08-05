import { colors } from '../themes/ChakraThemes';
import {
  Container,
  Text,
  Heading,
  Box,
  Stack,
  Grid,
  GridItem
} from '@chakra-ui/react';

export const Projects = () => {
  return (
    <Container
      mx='auto'
      centerContent={true}
      overflowWrap='anywhere'
      py={[10, 10, 100, 100, '300px']}
      px={{ xl: '0', lg: '0', md: '10px', sm: '10px', base: '20px' }}
      maxW={{ xl: '100ch', lg: '90ch', md: '80ch', sm: '70ch', base: 'auto' }}>
      <Heading
        _hover={{
          textColor: colors.accent.darkMode
        }}
      >
        Some Things I've built
      </Heading>
      <Box>
        Hey
      </Box>
    </Container>
  );
}
