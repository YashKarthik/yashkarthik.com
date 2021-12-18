import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { BiSun, BiMoon } from 'react-icons/bi'

const ColorModeSwitcher = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);
	const iconColor = useColorModeValue('light.secondary', 'dark.secondary');
	const bg = useColorModeValue('white', 'gray.800')

  return (
    <IconButton
      size="sm" fontSize="lg"
			pb='1' border='0'
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color={iconColor}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
			backgroundColor={bg}
			textColor='blue.700'
    />
  );
};

export default ColorModeSwitcher;
