import Layout from "../components/layout/Layout";
import Features from "../features/Features";

export const Routes ={

    path:"/",
    element:<Layout/>,
    children:[

        {
        path:"",
        element:<Features/>,
        },

    ]
};