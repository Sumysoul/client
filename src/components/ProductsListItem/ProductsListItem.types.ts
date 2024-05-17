import { VolumeUnitType, PriceUnitType, PricesPerUnitItemType } from '@/components/PricePerUnit/PricePerUnit.types';
import { NameType } from '@/commonTypes/common.types';
import { IngredientsTypes } from '@/components/Ingredients/Ingredients.types';

export type ProductsListItemType = {
    name: NameType
    ingredients: IngredientsTypes
    volumeUnit: VolumeUnitType
    priceUnit: PriceUnitType
    prices: PricesPerUnitItemType []
    available: boolean
}
