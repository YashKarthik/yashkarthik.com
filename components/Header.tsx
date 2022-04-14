import React from 'react';
import { useRouter } from 'next/router';
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
	useDisclosure,
	useMediaQuery,
	useColorModeValue,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { GoX } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import NextLink from 'next/link'
import "@fontsource/dejavu-mono"
import ColorModeSwitcher from '../components/ColorModeSwitcher'
import { colors } from '../themes/ChakraThemes';

const FeedButton = () => {

	const {
		isOpen: isOpenSubscribe,
		onOpen: onOpenSubscribe,
		onClose: onCloseSubscribe
	} = useDisclosure();

	const modalBg = useColorModeValue(
		colors.bodyBackground.lightMode,
		colors.bodyBackground.darkMode
	);

	const modalFg = useColorModeValue(
		colors.linkSecondaryTextColors.lightMode,
		colors.linkSecondaryTextColors.darkMode
	);

	return (
		<Menu isOpen={isOpenSubscribe}>
			<MenuButton as={Link} variant='secondary' onMouseEnter={onOpenSubscribe} onMouseLeave={onCloseSubscribe}>
				Subscribe
			</MenuButton>
			<MenuList onMouseEnter={onOpenSubscribe} onMouseLeave={onCloseSubscribe}
					  borderRadius='0' borderColor='blue.700' backgroundColor={modalBg}
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
			name: 'Archive',
			link: '/archive',
			external: false
		},
		{
			name: 'GitHub',
			link: 'https://github.com/yashkarthik',
			external: true
		},
		{
			name: 'Twitter',
			link: 'https://twitter.com/_yashkarthik',
			external: true
		},
	]

	return (
		<Stack direction={['column', 'column', 'row']}>

			{links.map(link => {
				return (
					<NextLink href={link.link} key={link.name} passHref
					>
						<Link p='0' m='0' variant='secondary' isExternal={link.external}
						>
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
	)
}

const MobileNextLinks = () => {

	const {
		isOpen: isOpenMobile,
		onOpen: onOpenMobile,
		onClose: onCloseMobile
	} = useDisclosure();
	const drawerColor = useColorModeValue('white', '#121419')

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

			<Drawer onClose={onCloseMobile} isOpen={isOpenMobile}
				size='full' placement='top' isFullHeight={true}
			>
				<DrawerOverlay />
				<DrawerContent bg={drawerColor}>

					<DrawerHeader align='end'>
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


export const Header: React.FC = () => {

	const [ isMobile ] = useMediaQuery("(max-width: 768px)");
	const { pathname } = useRouter();
	const textGradient = useColorModeValue("linear(to-l, blue.300, blue.800)", "linear(to-r, blue.200, blue.600)")

	if (isMobile === true) {
		return (
			<Flex flexDir='row' justify='stretch'>
				<Box m={pathname.slice(0, 7) == '/archive/' ? '10px 0 50px 20px': '10px'}> {/* Inserts padding below header for mobile if reading a post*/}
					<NextLink href={'/'} passHref>
						<Link p='10px 20px 0 0' m='0'
							fontFamily='dejavu mono' fontSize='xl'
							fontWeight='700' letterSpacing='0.8px'
							_hover={{ cursor: 'pointer' }}
							bgGradient={textGradient}
							bgClip='text'>
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
