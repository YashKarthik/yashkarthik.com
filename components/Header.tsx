import React from 'react';
import {
	Flex,
	Box,
	Link,
	Spacer,
	VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
	Button,
	Text,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoX } from 'react-icons/go';

const LinksRender: React.FC = () => {
	
	interface LinksObjShape {
		name: string,
		link: string
	};

	const links: LinksObjShape[] = [
		{
			name: 'Archive',
			link: 'https://mirror.xyz/yashkarthik.eth',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/yashkarthik',
		},
		{
			name: 'Twitter',
			link: 'https://twitter.com/_yashkarthik',
		},
		{
			name: 'About',
			link: '/',
		},
		{
			name: 'Subscribe',
			link: '/',
		},
	]
	
	return (
		<>

			{links.map(link => {
				return (
					<Link href={link.link} isExternal i='2' color='blue.600' key={links.indexOf(link)} pl='2'>
						{link.name}
					</Link>
				);
			})}

		</>
	)
}

const LargeLinks: React.FC = () => {
	return (
	  <Box pt='5' pr='3'>
			<LinksRender />
		</Box>
	)
}

const MobileLinks: React.FC = () => {
	
	const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>

			<Button
				onClick={() => onOpen()}
				m={4}
				colorScheme='blue'
				variant='ghost'
			>
				<GiHamburgerMenu />
			</Button>

      <Drawer onClose={onClose} isOpen={isOpen} size='full' placement='top' isFullHeight={true}>
        <DrawerOverlay />
        <DrawerContent bg='white'>

          <DrawerHeader alignSelf='end'>
						<Button 
							onClick={() => onClose()}
							colorScheme='blue'
							variant='ghost'>
							<GoX/>
						</Button>
					</DrawerHeader>

          <DrawerBody>
						<VStack align='start'>
							<LinksRender />
						</VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export const Header: React.FC = () => {

	const [ isMobile ] = useMediaQuery("(max-width: 768px)") ;


	if (isMobile === true) {
		return (
			<Flex>
				<Box pt='4' pl='7'>
					<Text 
						fontFamily='monospace'
						fontWeight='600'
						textColor='blue.500'
					>
						<Link 
							fontSize='xl' 
							letterSpacing='0.6px'
							href='/'
							_hover={{textDecoration:'none'}}
						>
							yashKarthik
						</Link>
						.eth
					</Text>
				</Box>

				<Spacer />
				<Box>
					<MobileLinks />
				</Box>
			</Flex>

		);
	} else {
		return (
			<Flex>
				<Box pt='7' pl='20'>
					<Text 
						fontFamily='monospace'
						fontWeight='600'
						textColor='blue.500'
					>
						<Link 
							fontSize='xl' 
							letterSpacing='0.6px'
							href='/'
							_hover={{textDecoration:'none'}}
						>
							yashKarthik
						</Link>
						.eth
					</Text>
				</Box>

				<Spacer />
				<Box>
					<LargeLinks />
				</Box>
			</Flex>

		);
	}
	
}
