import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CategoriesList({ menuItems }: any) {
    return (
        <div className="w-full after:block after:absolute after:right-0 after:top-0
        after:h-full after:w-[30px] after:z-10 after:bg-linear-gradient-1"
        >
            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
            >
                {menuItems.map((menuItem: any, index: number) => {
                    const { name, subId } = menuItem;

                    if (!menuItem.imageUrl) {
                        return null;
                    }

                    return (
                        <SwiperSlide
                            className="!w-auto flex box-border"
                            key={menuItem.subId + index}
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="flex items-center justify-center px-4 py-1 rounded-2xl bg-neutral-800 font-semibold"
                                href={`#${subId}`}
                            >
                                {`${name.ua} ${name.eng ? '/' : ''} ${name.eng}`}
                            </a>
                        </SwiperSlide>
                    );
                })}
                {/* Add additional slide to fix last slide Swiper bug */}
                <SwiperSlide className="!w-auto !mr-1 py-1 px-16" />
            </Swiper>
        </div>

    );
}

export default CategoriesList;
