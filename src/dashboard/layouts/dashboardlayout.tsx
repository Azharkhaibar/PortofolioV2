// src/dashboard/layouts/DashboardLayout.tsx
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="px-4 py-8 flex-1 bg-gray-800">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
