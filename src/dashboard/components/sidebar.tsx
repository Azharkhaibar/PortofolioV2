// src/dashboard/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Settings, Code2 } from 'lucide-react';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <nav>
                <ul className="space-y-3">
                    <li>
                        <NavLink to="/dashboard/home" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
                            <Home size={20} className="inline mr-2" /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/portofolio" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
                            <Code2 size={20} className="inline mr-2" /> Portofolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/blog" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
                            <Code2 size={20} className="inline mr-2" /> Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
                            <Users size={20} className="inline mr-2" /> Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
                            <Settings size={20} className="inline mr-2" /> Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
