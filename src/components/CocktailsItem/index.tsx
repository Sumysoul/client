import React from 'react';
import Image from 'next/image';
import { ImagePlaceholder } from '@/lib/imagePlaceholder';
import PricePerUnit from '@/components/PricePerUnit';
import Ingredients from '@/components/Ingredients';

function CocktailsItem({ cocktailsItem }: any) {
    const {
        imageUrl, name, prices, volumeUnit, priceUnit, ingredients
    } = cocktailsItem;

    return (
        <div className="flex gap-3 pb-4 border-b border-white last:border-none">
            <div className="flex rounded-xl items-center overflow-hidden bg-white min-w-fit">
                <div
                    className="flex h-[110px] w-[110px] min-w-[110px] md:h-[150px] md:w-[150px] md:min-w-[150px] relative"
                >
                    <Image
                        src={imageUrl}
                        alt={name.ua}
                        fill
                        style={{ objectFit: 'cover' }}
                        placeholder="blur"
                        blurDataURL={ImagePlaceholder}
                    />
                </div>
            </div>

            <div className="flex flex-col justify-between gap-1">
                <div className="text-xl font-bold">{name.ua}</div>

                <PricePerUnit
                    pricesPerUnitItems={prices}
                    volumeUnit={volumeUnit}
                    priceUnit={priceUnit}
                    type="inline"
                />

                <Ingredients
                    ingredients={ingredients}
                    type="pictures"
                />
            </div>
        </div>
    );
}

export default CocktailsItem;
