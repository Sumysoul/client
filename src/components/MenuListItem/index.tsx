import React from 'react';
import Image from 'next/image';
import ProductsList from '@/components/ProductsList';
import { ImagePlaceholder } from '@/lib/imagePlaceholder';

function MenuListItem({ menuItem }: any) {
    const { imageUrl, items, subId } = menuItem;

    return (
        <div id={subId} className="flex flex-col pt-12">
            <h3 className="font-bold text-2xl border-b border-b-white pb-2 mb-6">{menuItem.name.ua}</h3>

            {imageUrl && (
                <div className="w-full h-[80px] md:h-[100px] rounded-xl overflow-hidden mb-6 relative">
                    <Image
                        src={imageUrl}
                        alt={menuItem.name.ua}
                        fill
                        style={{ objectFit: 'cover' }}
                        placeholder="blur"
                        blurDataURL={ImagePlaceholder}
                    />
                </div>
            )}

            <ProductsList productItems={items} />
        </div>
    );
}
export default MenuListItem;
