import React from 'react';
import Image from 'next/image';
import ProductsList from '@/components/ProductsList';

function MenuListItem({ menuItem }: any) {
    const { imageUrl, subId, items } = menuItem;

    return (
        <div key={subId}>
            <h3 className="font-bold text-2xl mb-3">{menuItem.name.ua}</h3>

            <Image
                className="mb-3"
                src={imageUrl}
                alt={menuItem.category}
                width={300}
                height={500}
            />

            <ProductsList productItems={items} />
        </div>
    );
}
export default MenuListItem;
