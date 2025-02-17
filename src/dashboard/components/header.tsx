// src/dashboard/components/Header.tsx
import React from 'react';
import { Bell } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-700   shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">Dashboard Admin</h1>
            <button className="p-2 text-white hover:bg-gray-200 rounded-full">
                <Bell size={24} />
            </button>
        </header>
    );
};

export default Header;
