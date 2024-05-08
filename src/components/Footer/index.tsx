import React from 'react';
import Image from 'next/image';
import instagramIcon from '@/assets/icons/instagram.png';

function Footer() {
    const tel = '+38(095)-163-98-26';

    return (
        <footer className="w-full max-w-screen-md py-6 md:px-4 px-2.5 border-t border-t-white mt-auto">
            <div className="w-full flex flex-col justify-center items-center gap-4 text-center">
                <div className="text-base">Підписуйтесь на наш Instagram - завжди свіжі і актуальні пропозиції</div>

                <a
                    className="hover:opacity-75 transition-opacity duration-200"
                    title="instagram"
                    href="https://www.instagram.com/cafe_soul"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={instagramIcon}
                        alt="Instagram"
                        width={130}
                        height={130}
                    />
                </a>

                <div className="text-base">Номер для замовлення столів</div>

                <a
                    href={`tel:${tel}`}
                    className="text-xl"
                >
                    {tel}
                </a>
            </div>

        </footer>
    );
}

export default Footer;
