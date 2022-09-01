import { colors } from '../themes/ChakraThemes';
import { BsPen } from 'react-icons/bs';
import {
  Container,
  Text,
  Heading,
  Box,
  Icon,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react';

interface ProjectProps {
  name: string;
  desc: string;
  link?: string;
}

const projects: ProjectProps[] = [
  {
    name: "Bootstrapping a Rollup",
    desc: "Discussing how to kickstart a rollup-chain by subsidizing the initial high costs to capture users, then letting economies of scale play itself.",
    link: "/archive/bootstrap-rollup",
  },
  {
    name: "How Jack Butcher Productized Himself",
    desc: "Insights behind Jack Butcher's transition from low freedom, low fun to high freedom, high fun",
    link: "/archive/jack-butcher",
  },
  {
    name: "How NFT Royalties Actually Work",
    desc: "Explaining how royalty payments are implemented by NFT marketplaces and their infeasability in a decentralized system.",
    link: "/archive/nft-royalties",
  },
  {
    name: "What is State in Ethereum",
    desc: "Explaining state - a core property of Ethereum that differentiates it from Bitcoin. And some analogies to understand the internals of Ethereum.",
    link: "/archive/ethState",
  },
]

const Project = ({ name, desc, link }: ProjectProps) => {

  const headingHighlight = useColorModeValue(
    colors.accent.lightMode,
    colors.accent.darkMode
  );

  const hoverEffectColor = useColorModeValue(
    colors.bordersAndShadows.lightMode,
    colors.bordersAndShadows.darkMode,
  );

  return (
    <LinkBox
      p='2'
      role='group'
      display='flex'
      flexDir='column'
      borderRadius='3'
      border={`2px solid ${hoverEffectColor}`}
      justifyContent='space-evenly'
      w={{base: '52', sm:'52', md:'64', lg:'52', xl:'72'}}
      h={{base: '52', sm:'52', md:'64', lg:'52', xl:'72'}}
      _hover={{
        boxShadow: `4px 4px 0 ${hoverEffectColor}`,
        transform: "translate(-.2em, -.2em)",
        transition: 'transform .1s ease'
      }}
    >
      <Icon
        m={{base:'1', md:'3'}}
        as={BsPen}
        color={colors.accent.darkMode}
      />
      <Heading
        fontWeight='700'
        p={{base: '1', md:'3'}}
        fontSize={{base: 'sm', md:'md', lg:'sm', xl:'lg'}}
        _groupHover={{
          textColor: headingHighlight
        }}
      >
        {name}
      </Heading>
      <LinkOverlay
        href={link ? link : undefined}
        p={{base:'1', md:'3'}}
        fontSize={{base: 'sm', md:'md', lg:'sm', xl:'lg'}}
        isExternal
      >
        {desc}
      </LinkOverlay>
    </LinkBox>
  );
}

const Writings = () => {
  return (
    <Container
      mx='auto'
      centerContent={true}
      overflowWrap='anywhere'
      py='12'
      px={{ xl: '0', lg: '5px', md: '10px', sm: '10px', base: '20px' }}
      maxW={{ xl: '100ch', lg: '90ch', md: '80ch', sm: '70ch', base: '50ch' }}>
      <Heading
        size='lg'
        pb='8'
        _hover={{
          textColor: colors.accent.darkMode
        }}
      >
        Some Things I've written
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

        {projects.map((project) => (
          <GridItem>
            <Project {...project} />
          </GridItem>
        ))}
      </Grid>

    </Container>
  );
}

export default Writings;
