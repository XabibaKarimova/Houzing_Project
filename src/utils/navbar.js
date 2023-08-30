import React from "react";
import useId from "../hooks/useId";
// import HomePage from "../pages/Home";
const HomePage =React.lazy(()=>import("../pages/Home"))
// import PropertiesPage from '../pages/Properties'
const PropertiesPage=React.lazy(()=>import('../pages/Properties')) 

export const navbar = [
    {
        id: useId,
        element: 
        <React.Suspense 
        fallback={<React.Fragment><h1>Loading...</h1></React.Fragment>}>
            <HomePage />
        </React.Suspense>,
        title: 'Home',
        path: '/home',
        hidden: false,
        private: false
    },

    {
        id: useId,
        element: <React.Suspense 
        fallback={<React.Fragment><h1>Loading...</h1></React.Fragment>}>
            <PropertiesPage />
        </React.Suspense>,
        title: 'Properties',
        path: '/properties',
        hidden: false,
        private: false
    },
    {
        id: useId,
        element: <h1>Sign In</h1>,
        title: 'singIn',
        path: '/singIn',
        hidden: true,
        private: false
    },
]
