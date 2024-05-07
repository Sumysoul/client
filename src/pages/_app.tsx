import React from 'react';
import '@/app/index.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`page-main ${inter.variable} font-sans bg-neutral-800`}>
            <Component {...pageProps} />
        </div>
    );
}
