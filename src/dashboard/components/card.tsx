// src/dashboard/components/Card.tsx
import React from 'react';
import { CardProps } from '../../lib/interface/card';

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">{title}</h3>
            <p className="mt-2 text-2xl font-bold">{value}</p>
        </div>
    );
};

export default Card;
