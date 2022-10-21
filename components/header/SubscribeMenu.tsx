import { useState } from 'react';
import "@fontsource/space-mono"
import { colors } from '../../themes/ChakraThemes';
import {
  Link,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

interface MenuItemProps {
  text: string;
  link: string;
};

const SubscriptionMenuItem = ({ text, link }: MenuItemProps) => {

  const [ menuText, setMenuText ] = useState(text);

  const modalFg = useColorModeValue(
	  colors.primaryText.lightMode,
	  colors.primaryText.darkMode,
  );

  const optionLine = useColorModeValue(
	  colors.accent.lightMode,
	  colors.accent.darkMode,
  );

  return (
    <MenuItem
      as='a'
      href={link}
      onClick={(e) => {
        if (text != 'Newsletter') {
          e.preventDefault();
          setMenuText('copied!');
        }
        navigator.clipboard.writeText(link);
      }}
      onMouseEnter={() => setMenuText(text)}
      textColor={modalFg}
      bgColor='none'
      _hover={{
        bgColor:"inherit",
        color:'inherit',
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
      {menuText}
    </MenuItem>
  );
};

const SubscribeMenu = () => {

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
      color={slashColor}
		  onMouseEnter={onOpenSubscribe}
		  onMouseLeave={onCloseSubscribe}
		  px='2' py='0' m='0'
    >
		  /

		  <Link
        p='0'
        m='0'
        fontSize='sm'
        variant='heading'
      >
		    subscribe
		  </Link>

	  </MenuButton>

	  <MenuList
		  borderRadius='0'
      borderWidth='2px'
		  borderColor={modalBorder}
		  backgroundColor={modalBg}
		  onMouseEnter={onOpenSubscribe}
		  onMouseLeave={onCloseSubscribe}
    >
      <SubscriptionMenuItem text='Newsletter' link='#newsletter-container' />
      <SubscriptionMenuItem text='RSS Feed'   link="https://yashkarthik.xyz/rss.xml"   />
      <SubscriptionMenuItem text='Atom Feed'  link="https://yashkarthik.xyz/atom.xml"  />
      <SubscriptionMenuItem text='JSON Feed'  link="https://yashkarthik.xyz/feed.json" />
	  </MenuList>

	</Menu >
  );
};

export default SubscribeMenu;
