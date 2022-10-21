import React, { useState } from 'react';
import "@fontsource/space-mono"
import NextLink from 'next/link'
import { GoX } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { colors } from '../themes/ChakraThemes';
import ColorModeSwitcher from '../components/ColorModeSwitcher'
import { useBetterMediaQuery } from '../scripts/useBetterMediaQuery';
import {
  Flex,
  Box,
  Spacer,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Stack,
  Link,
  useDisclosure,
  useColorModeValue,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';

import SubscribeMenu from './header/SubscribeMenu';
import DesktopLinks from './header/DesktopLinks';

const NextLinksRender: React.FC = () => {

  const slashColor = useColorModeValue('purple.400', colors.accent.darkMode);

  interface NextLinksObjShape {
	name: string,
	link: string,
	external: boolean
  };

  const links: NextLinksObjShape[] = [
	{
	  name: 'archive',
	  link: '/archive',
	  external: false
	},
	{
	  name: 'github',
	  link: 'https://github.com/yashkarthik',
	  external: true
	},
	{
	  name: 'youtube',
	  link: 'https://www.youtube.com/channel/UCokxkaw1HSQKNJPDtJHhDkg',
	  external: true
	},
	{
	  name: 'twitter',
	  link: 'https://twitter.com/_yashkarthik',
	  external: true
	},
	{
	  name: 'linkedIn',
	  link: 'https://www.linkedin.com/in/yashkarthik/',
	  external: true
	},
	{
	  name: 'about',
	  link: '/about',
	  external: false
	},
  ]

  return (
	<Stack direction={['column', 'column', 'row']}>

	  {links.map(link => {
      if (link.external) {
        return (
          <Box
			      p='2'
			      m='0'
            color={slashColor}>
            /
			      <Link
			        href={link.link}
			        key={link.name}
              fontSize='sm'
			        variant='heading'
			        isExternal>
				      {link.name}
			      </Link>
          </Box>
        );
      }
		return (
		  <NextLink
			  href={link.link}
			  key={link.name}
			  passHref={true}>
        <Box
			    p='2'
			    m='0'
          color={slashColor}>
          /
			    <Link
            fontSize='sm'
			      variant='heading'
          >
				    {link.name}
			    </Link>
        </Box>
		  </NextLink>
		);
	  })}

    <SubscribeMenu />
	  <ColorModeSwitcher />

	</Stack>
  );
};

const LargeNextLinks: React.FC = () => {
  return (
    <DesktopLinks />
  );
}

const MobileNextLinks = () => {

  const drawerBg = useColorModeValue(
    colors.backGround.lightMode,
    colors.backGround.darkMode,
  );

  const {
	  isOpen: isOpenMobile,
	  onOpen: onOpenMobile,
	  onClose: onCloseMobile
  } = useDisclosure();

  return (
	<>
	  <Button
		  onClick={() => onOpenMobile()}
		  m={2} p={0}
      size='sm'
		  colorScheme='black'
		  variant='outline'
      borderRadius='2'
    >
      <GiHamburgerMenu />
	  </Button>

	  <Drawer
		  size='full'
		  placement='top'
		  isFullHeight={true}
		  isOpen={isOpenMobile}
		  onClose={onCloseMobile}>

		<DrawerOverlay />
		<DrawerContent bg={drawerBg}>

		  <DrawerHeader >
			<Button
		    m={2} p={0}
        position='absolute'
        right='2'
        top='1'
        justifySelf='end'
			  onClick={() => onCloseMobile()}
			  colorScheme='purple'
			  variant='outline'
        borderRadius='2'
        size='sm'
      >
			  <GoX />
			</Button>

		  </DrawerHeader>

		  <DrawerBody >
			<VStack align='end'>
			  <NextLinksRender />
			</VStack>
		  </DrawerBody>
		</DrawerContent>
	  </Drawer>
	</>
  )
}

const HomeButton: React.FC = () => {
  const highlightColor = useColorModeValue(
    'purple.300',
    colors.accent.darkMode
  );

  const bannerColor = useColorModeValue('black', colors.backGround.darkMode);
  const homeTextColor = useColorModeValue('white', 'white');

  return (
    <LinkBox
      ml='8'
      pb='3'
      role='group'
      boxShadow='sm'
      bgColor={bannerColor}
    >
		  <Box
        mt='3'
        pl='20px'
      >
		    <NextLink href={'/'} passHref>
			    <LinkOverlay
			      fontSize='2xl'
			      fontWeight='800'
            textColor={homeTextColor}
			      p='10px 20px 0 0'
			      letterSpacing='0.8px'
			      fontFamily='Space Mono'
            textDecor='none'
            _groupHover={{color: highlightColor}}
            _hover={{textDecor: 'none'}}
          >

            yashKarthik
			    </LinkOverlay>
		    </NextLink>

		  </Box>
    </LinkBox>
  );

}

export const Header: React.FC = () => {

  const isMobile  = useBetterMediaQuery("(max-width: 768px)");

  if (isMobile === true) {
	  return (
	    <Flex
        pb='5'
		    flexDir='row'
		    justify='stretch'
      >
        <HomeButton />
		    <Spacer />
		    <MobileNextLinks />
	    </Flex>

	  );
  } else if (isMobile === false) {
	  return (
	    <Flex pb='5'>
        <HomeButton />
		    <Spacer />
		    <LargeNextLinks />
	    </Flex>

	  );
  } else {
    return (
      <p>...</p>
    );
  }
}
