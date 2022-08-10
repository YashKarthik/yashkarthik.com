import { colors } from '../themes/ChakraThemes';
import { BsCodeSlash } from 'react-icons/bs';
import {
  Container,
  Text,
  Heading,
  Box,
  Icon,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';

interface ProjectProps {
  name: string;
  desc: string;
  link?: string;
  tools: string[]
}

const Project = ({ name, desc, tools, link }: ProjectProps) => {
  return (
    <LinkBox
      p='2'
      role='group'
      bgColor='#09081c'
      borderRadius='3'
      border='2px solid #020016'
      display='flex'
      flexDir='column'
      justifyContent='space-evenly'
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform .3s ease'
      }}
      w={{base: '52', sm:'52', md:'64', lg:'52', xl:'72'}}
      h={{base: '52', sm:'52', md:'64', lg:'52', xl:'72'}}
    >
      <Icon
        m={{base:'1', md:'3'}}
        as={BsCodeSlash}
        color={colors.accent.darkMode}
      />
      <Heading
        p={{base: '1', md:'3'}}
        fontSize={{base: 'sm', md:'md', lg:'sm', xl:'lg'}}
        variant='heading'
        _groupHover={{
          textColor: `${colors.accent.darkMode}`
        }}
      >
        {name}
      </Heading>
      <LinkOverlay
        href={link ? link : undefined}
        p={{base:'1', md:'3'}}
        fontSize={{base: 'sm', md:'md', lg:'sm', xl:'lg'}}
      >
        {desc}
      </LinkOverlay>
      <Box as='footer' display='flex' flexDir='row'>
        {tools.map((tool) => {
          return (
            <Text
              p={{base:'1', md:'3'}}
              variant='secondary'
              fontSize={{base: 'sm', md:'md', lg:'sm', xl:'lg'}}
            >
              {tool}
            </Text>
          );
        })}
      </Box>
    </LinkBox>
  );
}

export const Projects = () => {
  return (
    <Container
      mx='auto'
      centerContent={true}
      overflowWrap='anywhere'
      py='12'
      px={{ xl: '0', lg: '5px', md: '10px', sm: '10px', base: '20px' }}
      maxW={{ xl: '100ch', lg: '90ch', md: '80ch', sm: '70ch', base: '50ch' }}>
      <Heading
        p='8'
        _hover={{
          textColor: colors.accent.darkMode
        }}
      >
        Some Things I've built
      </Heading>

      <Grid
        gap={[2, null, 4, null, 6]}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(4, 1fr)'
        }}
      >

        <GridItem>
          <Project name={'GraphQl Hackernews'} desc='Build a graphql API for a Hacker News clone.' tools={['prisma', 'graphql', 'nexus']} />
        </GridItem>
        <GridItem>
          <Project name={'Multi-sig Wallet'} desc='Built a rudimentry multi-signature wallet' tools={['solidty', 'remix']} />
        </GridItem>
        <GridItem>
          <Project name={'Vegetable cutting robot'} desc='Built a lego based vegetable cutting robot' tools={['lego', 'python', 'linux']} />
        </GridItem>
        <GridItem>
          <Project name={'Vegetable cutting robot'} desc='Built a lego based vegetable cutting robot' tools={['lego', 'python', 'linux']} />
        </GridItem>

      </Grid>

    </Container>
  );
}
