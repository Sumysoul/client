import React from 'react';

const getIngredientsString = (ingredients: any) => ingredients.reduce(
    (accumulator: string, currentValue: any, index: number, array: any) => {
        const isLast = (array.length - 1) === index;
        const isFirst = index === 0;
        const separator = isLast || isFirst ? '' : ', ';

        return accumulator + separator + currentValue.name.ua;
    },
    '',
);

function Ingredients({ ingredients }: any) {
    const ingredientsString = getIngredientsString(ingredients);

    return (
        ingredientsString ? (
            <h4 className="text-sm">
                {ingredientsString}
            </h4>
        ) : null
    );
}
export default Ingredients;
