import React from 'react';

function PricePerUnit({ pricesPerUnitItems, volumeUnit }: any) {
    return (
        <div className="flex gap-4">
            {pricesPerUnitItems.map((pricesPerUnitItem: any, index: any) => {
                const { price, volume } = pricesPerUnitItem;

                return (
                    <div key={index} className="flex flex-col">
                        <div className="text-2xl">{price}</div>
                        <div className="flex items-end gap-0.5">
                            <span className="text-sm">{volume}</span>
                            <span className="text-xs mb-[1px]">{volumeUnit.ua}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default PricePerUnit;
