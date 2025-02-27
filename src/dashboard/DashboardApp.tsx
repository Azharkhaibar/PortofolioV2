// src/dashboard/DashboardApp.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardlayout';
import DashboardHome from './pages/home';
import DashboardPortofolio from './pages/portofolio'
import TambahPortofolio from './pages/tambahportofolio';
import Blog from './pages/blog';
import AddBlog from './pages/tambahblog';
const DashboardApp: React.FC = () => {
    return (
        <DashboardLayout>
            <Routes>
                {/* Redirect root dashboard ke /dashboard/home */}
                <Route path="/" element={<Navigate to="home" replace />} />
                <Route path="home" element={<DashboardHome />} />
                <Route path='portofolio' element={<DashboardPortofolio />} />
                <Route path="portofolio/tambah" element={<TambahPortofolio />} />
                <Route path='blog' element={<Blog />} />
                <Route path='blog/tambah' element={<AddBlog />}/>
            </Routes>
        </DashboardLayout>
    );
};

export default DashboardApp;
