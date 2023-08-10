import React from 'react';
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

// data for tests 
import {dataAbout, dataProjects} from './data.js';

const classNameString =`
    text-white
    h-screen
    snap-y
    overflow-y-scroll
    overflow-x-hidden
    snap-mandatory
    z-0 scrollbar
    scrollbar-track-gray-400/20
    scrollbar-thumb-[#D71E75]/80
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
  return (
    <div className={classNameString} style={appStyles}>
      <Header/>
      <Outlet/>
      <Footer/>
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
            data = {dataAbout}
          />,
      },
      {
        path: "/projects/:id",
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

