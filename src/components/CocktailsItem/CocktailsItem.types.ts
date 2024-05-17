import { PricesPerUnitItemsType, VolumeUnitType, PriceUnitType } from '@/components/PricePerUnit/PricePerUnit.types';
import { IngredientsTypes } from '@/components/Ingredients/Ingredients.types';
import { NameType, ImageUrlType, SubIdType } from '@/commonTypes/common.types';

export type CocktailItemType = {
    subId: SubIdType
    imageUrl: ImageUrlType
    name: NameType
    prices: PricesPerUnitItemsType
    volumeUnit: VolumeUnitType
    priceUnit: PriceUnitType
    ingredients: IngredientsTypes
    available: boolean
}
