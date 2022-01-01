import React from 'react';
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
	Text,
	Container,
	useDisclosure,
	useMediaQuery,
	useColorModeValue,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import NextLink from 'next/link'
import "@fontsource/dejaVu-mono"
import ColorModeSwitcher from '../components/ColorModeSwitcher'


const NextLinksRender: React.FC = () => {

	interface NextLinksObjShape {
		name: string,
		link: string
	};

	const links: NextLinksObjShape[] = [
		{
			name: 'Archive',
			link: '/archive',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/yashkarthik',
		},
		{
			name: 'Twitter',
			link: 'https://twitter.com/_yashkarthik',
		},
	]

	return (
		<Stack direction={['column', 'column', 'row']}>

			{links.map(link => {
				return (
					<NextLink href={link.link} key={link.name} passHref
					>
						<Link p='0' m='0' variant='secondary'
						>
							{link.name}
						</Link>
					</NextLink>
				);
			})}

			<ColorModeSwitcher />

		</Stack>
	);
};

const LargeNextLinks: React.FC = () => {
	return (
		<Box p='0' m='0'>
			<NextLinksRender />
		</Box>
	)
}

const MobileNextLinks = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const drawerColor = useColorModeValue('white', '#121419')

	return (
		<>
			<Button
				onClick={() => onOpen()}
				m={0} p={0}
				colorScheme='blue'
				variant='ghost'
				border='none'
			>
				<GiHamburgerMenu />
			</Button>

			<Drawer onClose={onClose} isOpen={isOpen}
				size='full' placement='top' isFullHeight={true}
			>
				<DrawerOverlay />
				<DrawerContent bg={drawerColor}>

					<DrawerHeader alignSelf='end'>
						<Button
							onClick={() => onClose()}
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


export const Header: React.FC = () => {

	const [isMobile] = useMediaQuery("(max-width: 768px)");
	const textGradient = useColorModeValue("linear(to-l, blue.300, blue.800)", "linear(to-r, blue.200, blue.600)")


	if (isMobile === true) {
		return (
			<Flex flexDir='row' justify='stretch'>
				<Box p='10 20 0 0' m='0'>
					<NextLink href={'/'} passHref>
						<Link p='10px 20px 0 0' m='0'
							fontFamily='DejaVu Mono' fontSize='xl'
							fontWeight='700' letterSpacing='0.8px'
							_hover={{ cursor: 'pointer' }}
							bgGradient={textGradient}
							bgClip='text'
						>
							yashKarthik
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
						<Link m='0'
							fontFamily='DejaVu Mono' fontSize='xl'
							fontWeight='700' letterSpacing='0.8px'
							_hover={{ cursor: 'pointer' }}
							bgGradient={textGradient}
							bgClip='text'
						>
							yashKarthik
						</Link>
					</NextLink>
				</Box>
				<Spacer />
				<LargeNextLinks />
			</Flex>

		);
	};

}
