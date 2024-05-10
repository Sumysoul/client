import React, { useEffect, useState } from 'react';
import CocktailsTypes from '@/components/CocktailsTypes';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { getData } from '@/lib/dataFetcher';

function Drinks() {
    const [data, setData] = useState({});
    // @ts-ignore
    const { groups } = data;

    useEffect(() => {
        getData('/drinks', setData);
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
