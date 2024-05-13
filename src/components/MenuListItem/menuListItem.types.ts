import { NameType, ImageUrlType, SubIdType } from '@/commonTypes/common.types';
import { ProductItemsType } from '@/components/ProductsList/ProductsList.types';

export type MenuListItemTypes = {
    imageUrl: ImageUrlType
    items: ProductItemsType
    subId: SubIdType
    name: NameType
}
