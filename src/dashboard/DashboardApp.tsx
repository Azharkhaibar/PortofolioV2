// src/dashboard/DashboardApp.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardlayout';
import DashboardHome from './pages/home';
import DashboardPortofolio from './pages/portofolio'
import TambahPortofolio from './pages/tambahportofolio';
import Blog from './pages/blog';
import AddBlog from './pages/tambahblog';
import ExperienceDetails from './pages/Experience';
import TambahExperience from './pages/tambahExperience';
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
                <Route path='experience' element={<ExperienceDetails />} />
                <Route path='experience/tambah' element={<TambahExperience />} />
            </Routes>
        </DashboardLayout>
    );
};

export default DashboardApp;
