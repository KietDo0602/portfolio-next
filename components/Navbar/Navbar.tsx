'use client';

import Link from 'next/link';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    LinkOverlay,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import logo from 'public/kd.svg';
import logo_light from 'public/kd_light.svg';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box as='header' position='fixed' width='100vw' zIndex={999}>
            <Flex
                color={useColorModeValue('white', 'black')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        color='white'
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                >
                    <Link href='/'>
                        <Image width={8} src={logo_light.src} alt='Logo'/>
                    </Link>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                ></Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'blue.300');
    const linkHoverColor = useColorModeValue('#18BBF7', 'white');
    const popoverContentBgColor = useColorModeValue('black', 'white');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as='a'
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'md'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'sm'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Box
            as='a'
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'sm'}
            _hover={{ bg: useColorModeValue('#4BBEE3', 'gray.900') }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'white' }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{
                        opacity: '100%',
                        transform: 'translateX(0)',
                    }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}
                >
                    <Icon color='#4BBEE3' w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('black', 'white')}
            p={4}
            display={{ md: 'none' }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

function mapChildren(children) {
    return children?.map((child) => {
        return (
            <Box
                as='a'
                key={child.label}
                py={2}
                color={useColorModeValue('white', '')}
                href={child.href}
            >
                {child.label}
            </Box>
        );
    });
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={2}
                as='a'
                href={href ?? '#'}
                justifyContent='space-between'
                alignItems='center'
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('white', '#4BBEE3')}
                    fontSize='2xl'
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        color='white'
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : '#4BBEE3'}
                        w={6}
                        h={6}
                    />
                )}
            </Box>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: '0!important' }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('white', '')}
                    align={'start'}
                >
                    {mapChildren(children)}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        children: [
            {
                label: 'About',
                subLabel: 'More about me',
                href: '/',
            },
            {
                label: 'Resume',
                subLabel: 'All about my work...',
                href: '/resume',
            },
            {
                label: 'Experiences',
                subLabel: 'Experiences in the field',
                href: '/experience',
            },
        ],
        href: '/',
    },
    {
        label: 'Projects',
        children: [
            {
                label: 'Personal Projects',
                subLabel: "What I've made",
                href: '/projects',
            },
            {
                label: 'Casual Projects',
                subLabel: 'Some of my casual projects...',
                href: '/projects',
            },
        ],
        href: '/projects',
    },
    {
        label: 'Skills',
        href: '/skills',
    },
    {
        label: 'Contact',
        href: '/contacts',
    },
];
