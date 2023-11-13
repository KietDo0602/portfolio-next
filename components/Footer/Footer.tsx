'use client';

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image,
} from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';
import Logo from 'public/kd_light.svg';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('whiteAlpha.100', 'blackAlpha.100')}
            rounded='full'
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('whiteAlpha.200', 'blackAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('black', 'gray.900')}
            color={useColorModeValue('white', 'white')}
            marginTop='100px'
            borderTop='1px solid white'
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <Image width={8} src={Logo.src} alt='Logo'/>
                <Stack direction={'row'} spacing={6}>
                    <Box as='a' href={'/'}>
                        Home
                    </Box>
                    <Box as='a' href={'/'}>
                        About
                    </Box>
                    <Box as='a' href={'/contacts'}>
                        Contact
                    </Box>
                </Stack>
            </Container>

            <Box>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Text>© 2023 Kiet Do. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Github'} href={'#'}>
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label={'LinkedIn'} href={'#'}>
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'Mail'} href={'#'}>
                            <FaEnvelope />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
