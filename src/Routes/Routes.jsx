import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from '../features/Features';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;