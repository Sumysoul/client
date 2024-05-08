import React from 'react';
import Cocktails from '@/components/Cocktails';

function CocktailsTypes({ cocktailsTypes }: any) {
    return (
        <ul className="flex flex-col">
            {cocktailsTypes.map((cocktailsType: any) => {
                const { subId, groups } = cocktailsType;

                return (
                    <li key={subId}>
                        <ul>
                            {groups.map((group: any) => {
                                const { subId, items, name } = group;

                                return (
                                    <li key={subId} className="mt-10">
                                        <h3 className="font-bold text-3xl mb-6">{name.ua}</h3>

                                        <Cocktails key={subId} cocktailsItems={items} />
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
}
export default CocktailsTypes;
