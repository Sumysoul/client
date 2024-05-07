import React from 'react';
import Image from 'next/image';
import ProductsList from '@/components/ProductsList';

function MenuListItem({ menuItem }: any) {
    const { imageUrl, items, subId } = menuItem;

    return (
        <div id={subId} className="flex flex-col pt-12">
            <h3 className="font-bold text-2xl border-b border-b-white pb-2 mb-6">{menuItem.name.ua}</h3>

            <div className="w-full h-[100px] rounded-xl overflow-hidden mb-6">
                <Image
                    className="!w-full !static !h-auto block max-h-full max-w-full mb-3"
                    src={imageUrl}
                    alt={menuItem.name.ua}
                    fill
                    objectFit={'cover'}
                />
            </div>

            <ProductsList productItems={items} />
        </div>
    );
}
export default MenuListItem;
