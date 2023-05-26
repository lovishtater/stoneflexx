import React from 'react';
import Home from '../views/Home';
import About from '../views/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from '../views/Contacts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../views/Catalog';
import { fetchProducts } from '../api';

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
  {
    path: '/catalog',
    element: <Catalog />,
  },
  // {
  //   path: '/catalog/:id',
  //   element: <Products />,
  // },
  {
    path: '*',
    element: <h1>404</h1>,
  },
];

const routerWrapper = route => (
  <>
    {!route?.hideHeader && <Header />}
    <div
      style={{
        minHeight: 'calc(100vh - 200px)',
        backgroundColor: '#F6F7FC',
      }}
    >
      {route.element}
    </div>
    {!route?.hideFooter && <Footer />}
  </>
);

const Router = () => {
  const  products  = sessionStorage.getItem('products');
  console.log('products', products);
  React.useEffect(() => {
    if (!products) {
      fetchProducts();
    } else {
      console.log('Product data already in session storage');
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={routerWrapper(route)} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};



export default Router;
