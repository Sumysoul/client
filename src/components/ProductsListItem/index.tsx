import React from 'react';
import Ingredients from '@/components/Ingredients';
import PricePerUnit from '@/components/PricePerUnit';
import { ProductsListItemType } from '@/components/ProductsListItem/ProductsListItem.types';

function ProductsListItem({ productItem }: { productItem: ProductsListItemType }) {
    const {
        name, ingredients, volumeUnit, priceUnit, prices
    } = productItem;

    return (
        <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold">{name.ua}</h4>

                <h4 className="text-sm">{name.eng}</h4>

                <Ingredients
                    ingredients={ingredients}
                    type="inline"
                />
            </div>

            <div className="text-sm">
                <PricePerUnit
                    pricesPerUnitItems={prices}
                    volumeUnit={volumeUnit}
                    type="vertical"
                    priceUnit={priceUnit}
                />
            </div>
        </div>
    );
}
export default ProductsListItem;
