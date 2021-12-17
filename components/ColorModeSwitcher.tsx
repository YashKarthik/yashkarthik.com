import { Button, useColorMode } from '@chakra-ui/react';
import { BiSun, BiMoon } from 'react-icons/bi'

export default function ColorModeSwitcher(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
		<Button onClick={toggleColorMode} border='none' p='0' m='0'>
     {colorMode === 'light' ? <BiMoon /> : <BiSun />}
   </Button>
 )
}
