'use client';

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    Link,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Contact() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [bodyTextValue, setBodyTextValue] = useState('');
    const { hasCopied, onCopy } = useClipboard('career@kietdo.io');

    const handleNameChange = (e: any) => setNameValue(e.target.value);
    const handleEmailChange = (e: any) => setEmailValue(e.target.value);
    const handleBodyTextChange = (e: any) => setBodyTextValue(e.target.value);

    const emailFormProcess = (): string => {
        let newBodyText = encodeTextForMailto(bodyTextValue.trim(), nameValue);
        const res = `mailto:career@kietdo.io?body=${newBodyText}`;
        return res;
    };

    return (
        <div>
            <Head>
                <title>Contacts</title>
                <link rel='icon' href='/kd.svg' />
                <meta property='og:title' content='Contacts' key='title' />
            </Head>
            <Flex
                bg={useColorModeValue('black', 'white')}
                align='center'
                justify='center'
                css={{
                    backgroundImage: useColorModeValue('black', 'white'),
                    backgroundAttachment: 'fixed',
                }}
                id='contact'
                h='100vh'
            >
                <Box
                    borderRadius='lg'
                    m={{ base: 5, md: 16, lg: 30 }}
                    p={{ base: 5, lg: 16 }}
                    w='70%'
                >
                    <Box>
                        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                            <Heading
                                fontSize={{
                                    base: '4xl',
                                    md: '5xl',
                                }}
                                color='white'
                            >
                                Contact Me!
                            </Heading>

                            <Stack
                                spacing={{ base: 10, md: 20, lg: 30 }}
                                direction={{ base: 'column', md: 'row' }}
                            >
                                <Stack
                                    align='center'
                                    justify='space-around'
                                    direction={{ base: 'row', md: 'column' }}
                                >
                                    <Tooltip
                                        label={
                                            hasCopied
                                                ? 'Email Copied!'
                                                : 'Copy Email'
                                        }
                                        closeOnClick={false}
                                        hasArrow
                                    >
                                        <IconButton
                                            aria-label='email'
                                            variant='ghost'
                                            size='lg'
                                            fontSize='3xl'
                                            icon={<MdEmail />}
                                            _hover={{
                                                bg: '#4BBEE3',
                                                color: useColorModeValue(
                                                    'white',
                                                    'black'
                                                ),
                                            }}
                                            onClick={onCopy}
                                            isRound
                                            color='white'
                                        />
                                    </Tooltip>

                                    <Box>
                                        <Link
                                            href='https://github.com/kietdo0602'
                                            isExternal
                                        >
                                            <IconButton
                                                aria-label='github'
                                                variant='ghost'
                                                size='lg'
                                                fontSize='3xl'
                                                icon={<BsGithub />}
                                                _hover={{
                                                    bg: '#4BBEE3',
                                                    color: useColorModeValue(
                                                        'black',
                                                        'white'
                                                    ),
                                                }}
                                                color='white'
                                                isRound
                                            />
                                        </Link>
                                    </Box>
                                    <Box>
                                        <IconButton
                                            aria-label='linkedin'
                                            variant='ghost'
                                            size='lg'
                                            icon={<BsLinkedin size='28px' />}
                                            _hover={{
                                                bg: '#4BBEE3',
                                                color: useColorModeValue(
                                                    'white',
                                                    'black'
                                                ),
                                            }}
                                            color='white'
                                            isRound
                                        />
                                    </Box>
                                </Stack>

                                <Box
                                    bg={useColorModeValue('black', 'white')}
                                    borderRadius='lg'
                                    p={8}
                                    w={700}
                                    color={useColorModeValue('white', 'black')}
                                    shadow='base'
                                >
                                    <VStack spacing={5}>
                                        <FormControl isRequired>
                                            <FormLabel>Name</FormLabel>

                                            <InputGroup>
                                                <InputLeftElement>
                                                    <BsPerson />
                                                </InputLeftElement>
                                                <Input
                                                    type='text'
                                                    name='name'
                                                    placeholder='Name'
                                                    value={nameValue}
                                                    onChange={handleNameChange}
                                                />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel>Email</FormLabel>

                                            <InputGroup>
                                                <InputLeftElement>
                                                    <MdOutlineEmail />
                                                </InputLeftElement>
                                                <Input
                                                    type='email'
                                                    name='email'
                                                    placeholder='Email'
                                                    value={emailValue}
                                                    onChange={handleEmailChange}
                                                />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel>Message</FormLabel>

                                            <Textarea
                                                name='message'
                                                placeholder='Message'
                                                rows={6}
                                                resize='none'
                                                value={bodyTextValue}
                                                onChange={handleBodyTextChange}
                                            />
                                        </FormControl>

                                        <Button
                                            colorScheme='white'
                                            color='white'
                                            border='1px solid white'
                                            _hover={{
                                                bg: '#4BBEE3',
                                                color: 'white',
                                            }}
                                            width='full'
                                            onClick={() =>
                                                window.open(
                                                    emailFormProcess(),
                                                    '_blank'
                                                )
                                            }
                                        >
                                            Send Message
                                        </Button>
                                    </VStack>
                                </Box>
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}

function encodeTextForMailto(text: string, name: string) {
    let encodedText = encodeURIComponent(text);

    return 'Dear%20Kiet,%0A%0A' + encodedText + `%0A%0ASincerely,%0A${name}`;
}
