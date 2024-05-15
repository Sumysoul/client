import { CocktailsItemsType } from '@/components/Cocktails/CocktailsItems.types';
import { NameType, SubIdType } from '@/commonTypes/common.types';

export type CocktailsTypesType = []
export type CocktailsGroupsType = {
    subId: SubIdType
    items: CocktailsItemsType
    name: NameType
}
export type CocktailsType = {
    groups: CocktailsGroupsType []
}
