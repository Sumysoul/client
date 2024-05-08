import React from 'react';
import '@/app/index.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx global>
                {`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}
            </style>

            <div className={'page-main font-sans bg-neutral-800'}>
                <Component {...pageProps} />
            </div>
        </>
    );
}
