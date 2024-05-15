import React from 'react';
import MenuListItem from '@/components/MenuListItem';
import { MenuListItemsTypes } from '@/components/MenuList/menuList.types';

function MenuList({ menuItems }: {menuItems: MenuListItemsTypes}) {
    return (
        <div className="flex flex-col w-full">
            {menuItems.map((menuItem: any, index: number) => (
                <MenuListItem
                    key={menuItem.subId + index}
                    menuItem={menuItem}
                />
            ))}
        </div>
    );
}
export default MenuList;
