import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { BiSun, BiMoon } from 'react-icons/bi'

const ColorModeSwitcher = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);
	const iconColor = useColorModeValue('blue.700', 'blue.200');
	const bg = useColorModeValue('white', '#121314')

  return (
    <IconButton
      size="sm" fontSize="lg"
			pb='2' border='0'
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color={iconColor}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
			backgroundColor={bg}
			_hover={{fontSize:'xl'}}
    />
  );
};

export default ColorModeSwitcher;
