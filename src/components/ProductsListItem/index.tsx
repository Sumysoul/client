import React from 'react';
import Ingredients from '@/components/Ingredients';
import PricePerUnit from '@/components/PricePerUnit';

function ProductsListItem({ productItem }: any) {
    const {
        name, ingredients, volumeUnit, prices
    } = productItem;

    return (
        <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-1">
                <h4 className="text-base">{name.ua}</h4>

                <h4 className="text-xs">{name.eng}</h4>

                <Ingredients ingredients={ingredients} />
            </div>

            <PricePerUnit
                pricesPerUnitItems={prices}
                volumeUnit={volumeUnit}
            />
        </div>
    );
}
export default ProductsListItem;
