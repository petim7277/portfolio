import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Features from '../features/Features';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Features />} />
    </Routes>
  );
};

export default AppRoutes;