<<<<<<< HEAD
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
=======
import Layout from "../components/layout/Layout";
import Features from "../features/Features";
import About from "../features/about/about";
import Skills from "../features/skills/Skills";
import Projects from "../features/projects/Projects";
import Contact from "../features/contact/Contact";
import LetsTalk from "../features/lets_talk/LetsTalk";

export const Routes =[

    { path:"/",
    element:<Layout/>,
    children:[

        {
        path:"",
        element:<Features/>,
        },

        {
            path:"/about",
            element:<About/>,
        },

        {
            path:"/skills",
            element:<Skills/>,
        },
        {
            path:"/projects",
            element:<Projects/>,
        },

        {
            path:"/contact",
            element:<Contact/>,
        },

        {
            path:"/letsTalk",
            element:<LetsTalk/>,
        },
    ]
    }
];

>>>>>>> 02db15c14e7a933723872583f387341330423c21
