import React from 'react';
import axios from 'axios';
import MenuList from '@/components/MenuList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

function Home({ data }: any) {
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

export const getStaticProps = async () => {
    const { data } = await axios.get(`${process.env.BE_URL}/food`);

    return {
        props: { data },
    };
};

export default Home;
