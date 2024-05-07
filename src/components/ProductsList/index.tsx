import React from 'react';
import ProductsListItem from '@/components/ProductsListItem';

function ProductsList({ productItems }: any) {
    return (
        <div className="flex flex-col gap-4">
            {productItems.map((productItem: any) => (
                <ProductsListItem productItem={productItem} />
            ))}
        </div>
    );
}
export default ProductsList;
