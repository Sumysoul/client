import React, { useState } from 'react';
import Image from 'next/image';
import { ImagePlaceholder } from '@/lib/imagePlaceholder';
import PricePerUnit from '@/components/PricePerUnit';
import Ingredients from '@/components/Ingredients';
import Dialog from '@/components/Dialog';
import { FaRegEye } from 'react-icons/fa';
import { CocktailItemType } from '@/components/CocktailsItem/CocktailsItem.types';

function CocktailsItem({ cocktailsItem }: { cocktailsItem: CocktailItemType }) {
    const {
        imageUrl, name, prices, volumeUnit, priceUnit, ingredients
    } = cocktailsItem;

    const [isDialogActive, setIsDialogActive] = useState(false);
    const onItemClick = () => {
        setIsDialogActive(!isDialogActive);
    };

    return (
        <>
            <Dialog
                isActive={isDialogActive}
                setIsActive={setIsDialogActive}
            >
                <div className="flex flex-col gap-4 text-black items-center relative">
                    <div className="h-[200px] w-[200px] relative">
                        <div className="absolute left-[-20px] top-[-20px] z-10">
                            <PricePerUnit
                                pricesPerUnitItems={prices}
                                volumeUnit={volumeUnit}
                                priceUnit={priceUnit}
                                type="rounded"
                            />
                        </div>

                        {imageUrl && (
                            <Image
                                className="shadow-xl rounded-full"
                                src={imageUrl}
                                alt={name.ua}
                                fill
                                style={{ objectFit: 'cover' }}
                                placeholder="blur"
                                blurDataURL={ImagePlaceholder}
                            />
                        )}
                    </div>

                    <div className="text-2xl text-center font-semibold">{name.ua}</div>

                    <div className="text-xl text-center text-gray-500 max-w-[400px]">
                        <Ingredients
                            ingredients={ingredients}
                            type="inline"
                        />
                    </div>
                </div>
            </Dialog>

            <button
                type="button"
                className="flex items-stretch gap-3 pb-4 border-b border-white last:border-none text-left outline-0"
                onClick={onItemClick}
            >
                <div className="flex rounded-xl items-center overflow-hidden bg-white min-w-fit">
                    <div
                        className="flex h-[110px] w-[110px] min-w-[110px] md:h-[150px] md:w-[150px] md:min-w-[150px] relative"
                    >
                        <FaRegEye size={30} className="absolute top-0 left-0 z-10 m-3 text-gray-600" />

                        {imageUrl && (
                            <Image
                                src={imageUrl}
                                alt={name.ua}
                                fill
                                style={{ objectFit: 'cover' }}
                                placeholder="blur"
                                blurDataURL={ImagePlaceholder}
                            />
                        )}
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
            </button>
        </>
    );
}

export default CocktailsItem;
