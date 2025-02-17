// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';                // Website utama
import DashboardApp from './dashboard/DashboardApp';  // Dashboard
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Website utama */}
        <Route path="/*" element={<App />} />
        {/* Dashboard (akses: /dashboard/...) */}
        <Route path="/dashboard/*" element={<DashboardApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
