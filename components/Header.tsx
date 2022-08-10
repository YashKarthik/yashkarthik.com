import React from 'react';
import "@fontsource/space-mono"
import NextLink from 'next/link'
import { GoX } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { colors } from '../themes/ChakraThemes';
//import ColorModeSwitcher from '../components/ColorModeSwitcher'
import { useBetterMediaQuery } from '../scripts/useBetterMediaQuery';
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
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SlideFade,
} from '@chakra-ui/react';

const FeedButton = () => {

  const {
	  isOpen: isOpenSubscribe,
	  onOpen: onOpenSubscribe,
	  onClose: onCloseSubscribe
  } = useDisclosure();

  const modalBg = useColorModeValue(
	  colors.backGround.darkMode,
    '#09081c'
  );

  const modalFg = useColorModeValue(
	  colors.accent.darkMode,
	  colors.accent.darkMode
  );

  return (
	<Menu isOpen={isOpenSubscribe}>

	  <MenuButton
      color={colors.accent.darkMode}
		  onMouseEnter={onOpenSubscribe}
		  onMouseLeave={onCloseSubscribe}
		  p='2' m='0'>
		  /

		  <Link p='0' m='0' variant='headerBar'>
		    subscribe
		  </Link>

	  </MenuButton>

	  <MenuList
		  onMouseEnter={onOpenSubscribe}
		  onMouseLeave={onCloseSubscribe}
		  borderRadius='0'
		  borderColor={colors.accent.darkMode}
		  backgroundColor={modalBg}
    >
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
        <Box
			    p='2'
			    m='0'
          color={colors.accent.darkMode}>
          /
			    <Link
			      variant='headerBar'
			      isExternal={link.external}>
				    {link.name}
			    </Link>
        </Box>
		  </NextLink>
		);
	  })}

	  <FeedButton />
	  {/* <ColorModeSwitcher /> */}

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

  const drawerColor = useColorModeValue('white', '#09081c')
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
		  colorScheme='teal'
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
		<DrawerContent bg={drawerColor}>

		  <DrawerHeader >
			<Button
		    m={2} p={0}
        position='absolute'
        right='2'
        top='1'
        justifySelf='end'
			  onClick={() => onCloseMobile()}
			  colorScheme='teal'
			  variant='outline'
        borderRadius='2'
        size='sm'
      >
			  <GoX />
			</Button>

		  </DrawerHeader>

		  <DrawerBody>
			<VStack align='end'>
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

  const isMobile  = useBetterMediaQuery("(max-width: 768px)");
  const [flag, setFlag] = useBoolean()


  if (isMobile === true) {
	  return (
	    <Flex
        pb='5'
		    flexDir='row'
		    justify='stretch'>
		    <Box>
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
  } else if (isMobile === false) {
	  return (
	    <Flex pb='5'>
		    <Box pl='20px'>
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
  } else {
    return (
      <p>...</p>
    );
  }

}
