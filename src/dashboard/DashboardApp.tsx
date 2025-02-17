// src/dashboard/DashboardApp.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardlayout';
import DashboardHome from './pages/home';
import DashboardPortofolio from './pages/portofolio'
import TambahPortofolio from './pages/tambahportofolio';
const DashboardApp: React.FC = () => {
    return (
        <DashboardLayout>
            <Routes>
                {/* Redirect root dashboard ke /dashboard/home */}
                <Route path="/" element={<Navigate to="home" replace />} />
                <Route path="home" element={<DashboardHome />} />
                <Route path='portofolio' element={<DashboardPortofolio />} />
                <Route path="portofolio/tambah" element={<TambahPortofolio />} />
            </Routes>
        </DashboardLayout>
    );
};

export default DashboardApp;
