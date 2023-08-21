import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import bgImage from './assets/bg.png';
import Project from './pages/Project';
import FooterAlt from './components/FooterAlt';

// data for tests 
import { dataAbout, dataProjects, dataExperience } from './data.js';
import { useLocation } from 'react-router-dom';



const classNameString =`
    text-white
    h-screen
    snap-y
    overflow-y-scroll
    overflow-x-hidden
    snap-mandatory
    z-0 scrollbar
    scrollbar-track-gray-400/20
    scrollbar-thumb-[#ffffff]/80
    scroll-smooth
  `;

  const appStyles = {
    background: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <div className={classNameString} style={appStyles}>
      <Header/>
      <Outlet/>
      {isHome ? <FooterAlt/> : <Footer/> }
    </div> 
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home
            aboutData = {dataAbout}
            expData = {dataExperience}
        />,
      },
      {
        path: "/projects",
        element: <Portfolio
            data = {dataProjects}
        />,
      },
      {
        path: "/project/:id",
        element: <Project
            data = {dataProjects}
        />,
      },
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

