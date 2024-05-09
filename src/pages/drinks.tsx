import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailsTypes from '@/components/CocktailsTypes';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

function Drinks() {
    const [data, setData] = useState({});
    // @ts-ignore
    const { groups } = data;

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BE_URL}/drinks`);
            setData(data);
        }

        getData();
    }, []);

    if (!groups) {
        return null;
    }

    return (
        <>
            <main className="mx-auto px-2.5 md:px-4 pb-6">
                <CocktailsTypes cocktailsTypes={groups} />
            </main>

            <Footer />

            <Navigation />
        </>
    );
}

export default Drinks;
