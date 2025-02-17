// src/dashboard/pages/Home.tsx
import React from 'react';
import Card from '../components/card';

const Home: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Total Users" value="1,234" />
            <Card title="Revenue" value="$5,678" />
            <Card title="Active Sessions" value="321" />
            <Card title="New Signups" value="56" />
        </div>
    );
};

export default Home;


