import Layout from "../components/layout/Layout";
import Features from "../features/Features";
import About from "../features/about_me/about";
import Skills from "../features/skills/Skills";
import Projects from "../features/projects/Projects";
import Contact from "../features/contact/Contact";

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
    ]
    }
];