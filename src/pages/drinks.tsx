import React from 'react';
import axios from 'axios';
import CocktailsTypes from '@/components/CocktailsTypes';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

function Drinks({ data }: any) {
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

export const getStaticProps = async () => {
    const { data } = await axios.get(`${process.env.BE_URL}/drinks`);

    return {
        props: { data },
    };
};

export default Drinks;
