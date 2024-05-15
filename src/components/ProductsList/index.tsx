import React from 'react';
import ProductsListItem from '@/components/ProductsListItem';
import { ProductItemsType } from '@/components/ProductsList/ProductsList.types';

function ProductsList({ productItems }: { productItems: ProductItemsType }) {
    return (
        <div className="flex flex-col gap-4">
            {productItems.map((productItem: any, index: number) => (
                <ProductsListItem
                    key={productItem.subId + index}
                    productItem={productItem}
                />
            ))}
        </div>
    );
}
export default ProductsList;
