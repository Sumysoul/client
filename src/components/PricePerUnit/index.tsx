import React from 'react';

function PricePerUnit({
    pricesPerUnitItems, volumeUnit, priceUnit, type
}: any) {
    const isInline = type === 'inline';

    return (
        isInline
            ? (
                <div className="flex flex-col">
                    {pricesPerUnitItems.map((pricesPerUnitItem: any, index: any) => {
                        const { price, volume } = pricesPerUnitItem;
                        const stringToRender = `${price}${priceUnit.eng}/${volume}${volumeUnit.ua}`;

                        return (
                            <div
                                className="text-xl font-semibold text-gray-400"
                                key={index}
                            >
                                {stringToRender}
                            </div>
                        );
                    })}
                </div>
            )
            : (
                <div className="flex gap-4 flex-wrap justify-end">
                    {pricesPerUnitItems.map((pricesPerUnitItem: any, index: any) => {
                        const { price, volume } = pricesPerUnitItem;

                        return (
                            <div key={index} className="flex flex-col text-right">
                                <div className="text-2xl font-semibold">{price}</div>
                                <div className="flex items-end gap-0.5">
                                    <span className="text-sm">{volume}</span>
                                    <span className="text-xs mb-[1px]">{volumeUnit.ua}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )
    );
}
export default PricePerUnit;
