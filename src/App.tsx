// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './frontend/pages/home';
import About from './frontend/pages/about';
import Project from './frontend/pages/project';
import Contact from './frontend/pages/contact';
import Portofolio from './frontend/pages/portofolio';
import ProjectDetail from './components/layout/portofolio_layout/projectDetail';

const App: React.FC = () => {
  return (
    <>
      {/* Tambahkan padding top agar konten tidak tertutup navbar fixed */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path='/portofolio/:id' element={<ProjectDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
