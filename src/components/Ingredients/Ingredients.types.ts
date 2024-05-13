import { NameType, ImageUrlType, SubIdType } from '@/commonTypes/common.types';

export type Ingredient = {
    imageUrl: ImageUrlType
    name: NameType
    subId: SubIdType
}
export type IngredientsTypes = Ingredient[]
export type IngredientsType = 'pictures'| 'inline'
