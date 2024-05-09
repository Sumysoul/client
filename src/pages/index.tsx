import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '@/components/MenuList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

function Home() {
    const [data, setData] = useState({});
    // @ts-ignore
    const { groups } = data;

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BE_URL}/food`);
            setData(data);
        }

        getData();
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
