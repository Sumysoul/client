import React from 'react';
import CategoriesList from '@/components/CategoriesList';

function Header({ menuItems }: any) {
    return (
        <header className="flex sticky top-0 items-center justify-center w-full p-2 bg-gray-50 shadow-lg bg-opacity-75">
            <CategoriesList menuItems={menuItems} />
        </header>
    );
}
export default Header;
