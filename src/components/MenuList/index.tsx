import React from 'react';
import MenuListItem from '@/components/MenuListItem';

function MenuList({ menuItems }: any) {
    return (
        <div className="flex flex-col gap-6 w-full">
            {menuItems.map((menuItem: any, index: number) => {
                if (!menuItem.imageUrl) {
                    return null;
                }

                return (
                    <MenuListItem
                        key={menuItem.subId + index}
                        menuItem={menuItem}
                    />
                );
            })}
        </div>
    );
}
export default MenuList;
