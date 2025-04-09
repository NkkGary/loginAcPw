
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Home, About, Contact, Auth, NotFound } from './components';

const routes = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/auth', element: <Auth /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
