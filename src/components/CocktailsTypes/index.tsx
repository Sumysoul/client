import React from 'react';
import Cocktails from '@/components/Cocktails';
import {
    CocktailsTypesType,
    CocktailsType,
    CocktailsGroupsType
} from '@/components/CocktailsTypes/Coctails.types';

function CocktailsTypes({ cocktailsTypes }: { cocktailsTypes: CocktailsTypesType }) {
    return (
        cocktailsTypes.map((cocktailsType: CocktailsType) => {
            const { groups } = cocktailsType;

            return (
                groups.map((group: CocktailsGroupsType) => {
                    const { subId, items, name } = group;

                    return (
                        <div key={subId} className="mt-10">
                            <h3 className="font-bold text-3xl mb-6">{name.ua}</h3>

                            <Cocktails key={subId} cocktailsItems={items} />
                        </div>
                    );
                })
            );
        })
    );
}
export default CocktailsTypes;
