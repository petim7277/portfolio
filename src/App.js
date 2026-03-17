<<<<<<< HEAD
import React from 'react';
import AppRoutes from './Routes/Routes';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <AppRoutes />
    </div>
  );
}

export default App;
=======
import {useRoutes} from "react-router-dom";
import {Routes} from "./Routes/Routes";

function App () {
    return (
        useRoutes(Routes)
    )
}
export default App
>>>>>>> 02db15c14e7a933723872583f387341330423c21
