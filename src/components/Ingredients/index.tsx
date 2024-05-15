import React from 'react';
import Image from 'next/image';
import { ImagePlaceholder } from '@/lib/imagePlaceholder';
import { IngredientsTypes, IngredientsType, Ingredient } from '@/components/Ingredients/Ingredients.types';

const getIngredientsString = (ingredients: IngredientsTypes) => ingredients.reduce(
    (accumulator: string, currentValue: any, index: number, array: any) => {
        const isLast = (array.length + 1) === index;
        const isFirst = index === 0;
        const separator = isLast || isFirst ? '' : ', ';

        return accumulator + separator + currentValue.name.ua;
    },
    '',
);

function Ingredients({ ingredients, type }: { ingredients: IngredientsTypes, type: IngredientsType}) {
    const ingredientsString = getIngredientsString(ingredients);
    const isPictures = type === 'pictures';

    return (
        isPictures ? (
            <ul className="flex flex-wrap gap-1 md:gap-4 items-center">
                {ingredients.map((ingredient: Ingredient, index: number) => {
                    const { imageUrl, name, subId } = ingredient;

                    return (
                        imageUrl && (
                            <li
                                key={subId + index}
                                className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] rounded overflow-hidden relative"
                            >
                                <Image
                                    src={imageUrl}
                                    alt={name.ua}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    placeholder="blur"
                                    blurDataURL={ImagePlaceholder}
                                />
                            </li>
                        )
                    );
                })}
            </ul>
        )
            : ingredientsString ? (
                <span>
                    {ingredientsString}
                </span>
            ) : null
    );
}
export default Ingredients;
