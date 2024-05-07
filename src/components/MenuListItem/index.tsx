import React from 'react';
import Image from 'next/image';
import ProductsList from '@/components/ProductsList';

function MenuListItem({ menuItem }: any) {
    const { imageUrl, items } = menuItem;

    return (
        <div className="flex flex-col">
            <h3 className="font-bold text- mb-3">{menuItem.name.ua}</h3>

            <Image
                className="mb-3"
                src={imageUrl}
                alt={menuItem.name.ua}
                width={300}
                height={500}
            />

            <ProductsList productItems={items} />
        </div>
    );
}
export default MenuListItem;
