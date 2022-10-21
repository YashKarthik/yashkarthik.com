import NextLink from 'next/link';
import "@fontsource/space-mono"
import { colors } from '../../themes/ChakraThemes';
import ColorModeSwitcher from '../../components/ColorModeSwitcher'
import {
  Stack,
  Box,
  Link as ChakraLink,
  Button,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

import SubscribeMenu from './SubscribeMenu';

const DesktopLinks = () => {
  return (
    <Stack
      p='0' m='12px 10px 0 0' 
      direction="row"
      alignItems='center'
    >
      <LinkItem name='archive'/>
      <LinkItem name='about'/>
      <SubscribeMenu />
      <SocialLinks />
    </Stack>
  );
}
const SocialLinks = () => {

  const slashColor = useColorModeValue('purple.400', colors.accent.darkMode);

  const {
	  isOpen: isOpenSubscribe,
	  onOpen: onOpenSubscribe,
	  onClose: onCloseSubscribe
  } = useDisclosure();

  const modalBg = useColorModeValue(
	  colors.backGround.lightMode,
	  colors.backGround.darkMode,
  );

  const modalBorder = useColorModeValue(
	  colors.bordersAndShadows.lightMode,
	  colors.bordersAndShadows.darkMode,
  );

  return (
	<Menu isOpen={isOpenSubscribe}>

	  <MenuButton
      as={Button}
      color={slashColor}
		  onClick={onOpenSubscribe}
      onMouseLeave={onCloseSubscribe}
      size='sm'
		  colorScheme='purple'
		  variant='outline'
      borderRadius='2'
    >
      <GiHamburgerMenu />
	  </MenuButton>

	  <MenuList
		  borderRadius='0'
      borderWidth='2px'
		  borderColor={modalBorder}
		  backgroundColor={modalBg}
		  onMouseEnter={onOpenSubscribe}
		  onMouseLeave={onCloseSubscribe}
    >
      <Stack direction='row' justifyContent='start'>
        <Box mx='3'>
          <ColorModeSwitcher />
        </Box>
        <Box p='0' m='0'>
          <SocialLinkItem name='GitHub'   link="https://github.com/yashkarthik"/>
          <SocialLinkItem name='Twitter'  link="https://twitter.com/_yashkarthik"   />
          <SocialLinkItem name='LinkedIn' link="https://www.linkedin.com/in/yashkarthik"  />
          <SocialLinkItem name='YouTube'  link="https://www.youtube.com/channel/UCokxkaw1HSQKNJPDtJHhDkg" />
        </Box>
      </Stack>
	  </MenuList>

	</Menu >
  );
};

interface ILinks {
  name: string,
  link: string,
};

const LinkItem = ({ name }: {name: string}) => {
  const slashColor = useColorModeValue('purple.400', colors.accent.darkMode);
  return (
    <NextLink
      href={'/' + name}
      key={name}
      passHref={true}>
      <Box
        p='2'
        m='0'
        color={slashColor}
      >
        /
        <ChakraLink
          fontSize='sm'
          variant='heading'
        >
          {name}
        </ChakraLink>
      </Box>
    </NextLink>
  );
}

const SocialLinkItem = ({ name, link }: ILinks) => {

  const optionLine = useColorModeValue(
	  colors.accent.lightMode,
	  colors.accent.darkMode,
  );

  return (
    <MenuItem
      as='a'
      maxW='1'
      href={link}
      target="_blank"
      textColor='inherit'
      bgColor='none'
      _hover={{
        bgColor:"inherit",
        color:'inherit',
        boxDecorationBreak:'none',
        textDecoration: 'underline',
        textDecorationColor: optionLine,
        textDecorationThickness: '2px',
      }}
      _focus={{
        bgColor:"inherit",
        color:'inherit',
        textDecoration: 'underline',
        textDecorationColor: optionLine,
        textDecorationThickness: '2px',
      }}
    >
      {name}
    </MenuItem>
  );
};

export default DesktopLinks;
