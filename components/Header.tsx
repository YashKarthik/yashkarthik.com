import React from 'react';
import ColorModeSwitcher from '../components/ColorModeSwitcher'
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import {
  Flex,
  Box,
  useBoolean,
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
  Icon,
  useDisclosure,
  useMediaQuery,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SlideFade,
} from '@chakra-ui/react';

import { GoX } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';

import { colors } from '../themes/ChakraThemes';
import "@fontsource/space-mono"

const FeedButton = () => {

  const {
	isOpen: isOpenSubscribe,
	onOpen: onOpenSubscribe,
	onClose: onCloseSubscribe
  } = useDisclosure();

  const modalBg = useColorModeValue(
	colors.backGround.darkMode,
	colors.backGround.darkMode
  );

  const modalFg = useColorModeValue(
	colors.accent.darkMode,
	colors.accent.darkMode
  );

  return (
	<Menu isOpen={isOpenSubscribe}>

	  <MenuButton
		as={Link}
		onMouseEnter={onOpenSubscribe}
		onMouseLeave={onCloseSubscribe}
		p='2' m='0'
		_hover={{textDecoration:'none'}}>
		/suscribe
		{/*
		<Link p='0' m='0' variant='headerBar'>
		  subscribe
		</Link>
		  */}
	  </MenuButton>

	  <MenuList
		onMouseEnter={onOpenSubscribe}
		onMouseLeave={onCloseSubscribe}
		borderRadius='0'
		borderColor={colors.accent.darkMode}
		backgroundColor={modalBg}>
		<MenuItem as='a' href='/feed.xml' textColor={modalFg}>RSS</MenuItem>
	  </MenuList>

	</Menu >
  );
};

const NextLinksRender: React.FC = () => {

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
	  name: 'gitHub',
	  link: 'https://github.com/yashkarthik',
	  external: true
	},
	{
	  name: 'twitter',
	  link: 'https://twitter.com/_yashkarthik',
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
		return (
		  <NextLink
			href={link.link}
			key={link.name}
			passHref>
			<Link
			  p='2'
			  m='0'
			  variant='headerBar'
			  isExternal={link.external}
			  _hover={{textDecoration:'none'}}>
			  /
				{link.name}
			</Link>
		  </NextLink>
		);
	  })}

	  <FeedButton />
	  <ColorModeSwitcher />

	</Stack>
  );
};

const LargeNextLinks: React.FC = () => {
  return (
	<Box p='0' m='12px 10px 0 0'>
	  <NextLinksRender />
	</Box>
  );
}

const MobileNextLinks = () => {

  const drawerColor = useColorModeValue('white', '#121419')
  const {
	isOpen: isOpenMobile,
	onOpen: onOpenMobile,
	onClose: onCloseMobile
  } = useDisclosure();

  return (
	<>
	  <Button
		onClick={() => onOpenMobile()}
		m={0} p={0}
		colorScheme='blue'
		variant='ghost'
		border='none'
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
		<DrawerContent bg={drawerColor}>

		  <DrawerHeader>
			<Button
			  onClick={() => onCloseMobile()}
			  colorScheme='blue'
			  variant='ghost'
			  border='none'>
			  <GoX />
			</Button>
		  </DrawerHeader>

		  <DrawerBody>
			<VStack align='start'>
			  <NextLinksRender />
			</VStack>
		  </DrawerBody>
		</DrawerContent>
	  </Drawer>
	</>
  )
}

const IconAnimation = ({flag}:{flag:boolean}) => {
  return (
	<>
	  <SlideFade
		in={!flag}
		style={{position:'absolute', top:'15px', left:'15px'}}>
		yashKarthik
	  </SlideFade>

	  <SlideFade
		in={flag}
		style={{position:'absolute', top:'15px', left:'40px'}}>

		<Button
		  height='2em'
		  width='5em'
		  variant='outline'
		  borderRadius='2'
		  colorScheme='inherit'>
		  home
		</Button>
	  </SlideFade>
	</>
  );
}


export const Header: React.FC = () => {

  const [ isMobile ] = useMediaQuery("(max-width: 768px)");
  const { pathname } = useRouter();
  const [flag, setFlag] = useBoolean()


  if (isMobile === true) {
	return (
	  <Flex
		flexDir='row'
		justify='stretch'>
		<Box
		  m={pathname.slice(0, 7) == '/archive/'
		   ? '10px 0 50px 20px': '10px'}>

		  <NextLink href={'/'} passHref>
			<Link
			  m='0'
			  p='10px 20px 0 0'
			  fontFamily='Space Mono'
			  fontSize='xl'
			  fontWeight='700'
			  letterSpacing='0.8px'
			  onMouseEnter={setFlag.on}
			  onMouseLeave={setFlag.off}>

			  <IconAnimation flag={flag} />
			</Link>
		  </NextLink>

		</Box>
		<Spacer />
		<MobileNextLinks />
	  </Flex>

	);
  } else {
	return (
	  <Flex>
		<Box pt='10px' pl='20px'>
		  <NextLink href={'/'} passHref>
			<Link
			  m='0'
			  fontSize='xl'
			  fontWeight='700'
			  letterSpacing='0.8px'
			  fontFamily='Space Mono'
			  _hover={{textDecor:'none'}}
			  onMouseEnter={setFlag.on}
			  onMouseLeave={setFlag.off}
			>
			  <IconAnimation flag={flag} />
			</Link>
		  </NextLink>
		</Box>
		<Spacer />
		<LargeNextLinks />
	  </Flex>

	);
  };

}
