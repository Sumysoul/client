import React, { useEffect, useState } from 'react';
import CocktailsTypes from '@/components/CocktailsTypes';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { getData } from '@/lib/dataFetcher';
import { BackendDataType } from '@/commonTypes/backend-data.types';

function Drinks() {
    const [data, setData] = useState<BackendDataType>(null);

    useEffect(() => {
        // @ts-ignore
        getData(process.env.NEXT_PUBLIC_DRINKS_PATH, setData);
    }, []);

    if (!data?.groups) {
        return null;
    }

    const { groups } = data;

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
