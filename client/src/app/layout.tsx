import { ChakraProvider, Box, ColorModeScript } from "@chakra-ui/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "../../components/globals";
import "./globals.css";
import { Background } from "../../components/background/Background";
// import theme from "../app/theme/theme";

// Import local fonts
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
    title: "Orbit",
    description: "Your HR management tool",
};

// RootLayout Component
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                /> */}
                <ChakraProvider>
                    <Background />

                    <Box position="relative" zIndex="1" minH="100vh">
                        {children}
                        <Footer />
                    </Box>
                </ChakraProvider>
            </body>
        </html>
    );
}
