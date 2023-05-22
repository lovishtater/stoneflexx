import React from 'react';
import Home from '../views/Home';
import About from '../views/About';
import Contacts from '../views/Contacts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const routes = [
  {
    path: '/',
    element: <Home />,
    hideHeader: false,
    hideFooter: false,
  },
  {
    path: '/about',
    element: <About />,
    
  },
  {
    path: '/contact-us',
    element: <Contacts />,
  },
];

const routerWrapper = route => (
  <>
    {!route?.hideHeader && <Header />}
    {route.element}
    {!route?.hideFooter && <Footer />}
  </>
);

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={routerWrapper(route)} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
