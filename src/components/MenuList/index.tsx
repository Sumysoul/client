import React from 'react';
import MenuListItem from '@/components/MenuListItem';

function MenuList({ menuItems }: any) {
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
