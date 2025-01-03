'use client';
import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect = () => (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50">
        <Snowfall snowflakeCount={100} />
    </div>
);

export default SnowfallEffect;