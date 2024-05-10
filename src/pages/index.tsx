import React, { useEffect, useState } from 'react';
import MenuList from '@/components/MenuList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { getData } from '@/lib/dataFetcher';

function Home() {
    const [data, setData] = useState({});
    // @ts-ignore
    const { groups } = data;

    useEffect(() => {
        getData(`${process.env.NEXT_PUBLIC_BE_URL}/food`, (data) => setData(data));
    }, []);

    if (!groups) {
        return null;
    }

    return (
        <>
            <Header menuItems={groups} />

            <main className="w-full max-w-screen-md px-2.5 md:px-4 pb-6">
                <MenuList menuItems={groups} />
            </main>

            <Footer />

            <Navigation />
        </>
    );
}

export default Home;
