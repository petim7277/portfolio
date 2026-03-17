import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
=======
import {BrowserRouter} from "react-router-dom";
>>>>>>> 02db15c14e7a933723872583f387341330423c21

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
);
=======
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>
);

>>>>>>> 02db15c14e7a933723872583f387341330423c21
