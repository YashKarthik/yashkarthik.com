import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { BiSun, BiMoon } from 'react-icons/bi'
import { colors } from '../themes/ChakraThemes';

const ColorModeSwitcher = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);
	const iconColor = useColorModeValue(
    'purple.400',
    colors.accent.darkMode
  );

  return (
    <IconButton
      size="sm" fontSize="lg"
			pt='3' m='0' border='0'
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color={iconColor}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
			_hover={{fontSize:'xl'}}
    />
  );
};

export default ColorModeSwitcher;
