import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { IoFastFood } from 'react-icons/io5';
import { FaGlassMartiniAlt } from 'react-icons/fa';

const pages = [
    {
        title: 'Їжа',
        url: '/',
        NavIcon: IoFastFood
    },

    {
        title: 'НапоЇ',
        url: '/drinks',
        NavIcon: FaGlassMartiniAlt
    }
];

function Navigation() {
    const router = useRouter();
    const { pathname } = router;

    return (
        <nav className="flex fixed bottom-0 right-0 p-6">
            {pages.map((page, index) => {
                const { url, title, NavIcon } = page;
                const isActive = pathname === url;

                return (
                    isActive ? null : (
                        <NextLink
                            href={url}
                            key={index}
                            title={title}
                            className="flex flex-col items-center justify-center text-center
                            gap-2 rounded-xl border-2 border-white p-2 bg-black hover:opacity-75"
                        >
                            <NavIcon size={30} />

                            <span className="text-sm uppercase">{title}</span>
                        </NextLink>
                    )

                );
            })}
        </nav>
    );
}

export default Navigation;
