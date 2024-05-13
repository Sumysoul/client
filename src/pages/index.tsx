import React, { useEffect, useState } from 'react';
import MenuList from '@/components/MenuList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { getData } from '@/lib/dataFetcher';
import { BackendDataType } from '@/commonTypes/backend-data.types';

function Home() {
    const [data, setData] = useState<BackendDataType>(null);

    useEffect(() => {
        // @ts-ignore
        getData(process.env.NEXT_PUBLIC_FOOD_PATH, setData);
    }, []);

    if (!data?.groups) {
        return null;
    }

    const { groups } = data;

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
