import React from 'react';
import CocktailsItem from '@/components/CocktailsItem';
import { CocktailsItemsType } from '@/components/Cocktails/CocktailsItems.types';
import { CocktailItemType } from '@/components/CocktailsItem/CocktailsItem.types';

function Cocktails({ cocktailsItems }: { cocktailsItems: CocktailsItemsType }) {
    return (
        <div className="flex flex-col w-full gap-5">
            {cocktailsItems.map((cocktailsItem: CocktailItemType, index: number) => {
                if (!cocktailsItem.available) {
                    return;
                }
                const { subId } = cocktailsItem;
                return (
                    <CocktailsItem
                        key={subId + index}
                        cocktailsItem={cocktailsItem}
                    />
                );
            })}
        </div>
    );
}
export default Cocktails;
