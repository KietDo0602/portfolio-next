'use client';

// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Global } from '@emotion/react';

const theme = extendTheme({
    fonts: {
        body: `"CustomMetExtraLight", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        heading: `"CustomMetExtraLight", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme} cssVarsRoot='body'>
            <Global
                styles={`
				@font-face {
				  font-family: 'CustommetExtraLight';
				  src: url('/MetropolisExtraLight.otf') format('opentype');
				  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
				}
				body {
					background-color: black;
				}
				`}
            />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
