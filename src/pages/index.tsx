import React from 'react';
import axios from 'axios';
import Image from 'next/image';

function Home({ data }: any) {
    const { groups } = data;

    return (
        <div>
            <h1 className="p-10">
                Home page
            </h1>

            {groups.map((group: any) => {
                const { imageUrl, subId } = group;

                if (!imageUrl) {
                    return null;
                }

                return (
                    <div key={subId} className="p-10">
                        <h3 className="font-bold mb-3">{group.name.ua}</h3>

                        <Image
                            src={imageUrl}
                            alt={group.category}
                            width={300}
                            height={500}
                        />
                    </div>
                );
            })}
        </div>

    );
}

export const getServerSideProps = async () => {
    const { data } = await axios.get(`${process.env.BE_URL}/food`);

    return {
        props: { data },
    };
};

export default Home;
