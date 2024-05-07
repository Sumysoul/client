import React from 'react';
import axios from 'axios';
import MenuList from '@/components/MenuList';
import Header from '@/components/Header';

function Home({ data }: any) {
    const { groups } = data;

    return (
        <>
            <Header menuItems={groups} />

            <main className="w-full max-w-screen-md px-2.5 md:px-4">
                <MenuList menuItems={groups} />
            </main>
        </>
    );
}

export const getServerSideProps = async () => {
    const { data } = await axios.get(`${process.env.BE_URL}/food`);

    return {
        props: { data },
    };
};

export default Home;
