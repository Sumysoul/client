import React from 'react';
import CocktailsItem from '@/components/CocktailsItem';

function Cocktails({ cocktailsItems }: any) {
    return (
        <div className="flex flex-col w-full gap-5">
            {cocktailsItems.map((cocktailsItem: any, index: number) => {
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
