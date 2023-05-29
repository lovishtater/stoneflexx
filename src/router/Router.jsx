import React, { useContext } from 'react';
import Home from '../views/Home';
import About from '../views/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from '../views/Contacts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../views/Catalog';
import { fetchProducts } from '../api';
import Products from '../views/Products';
import NotFound from '../components/PageNotFound404';
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
  {
    path: '/catalog/:_id',
    element: <Products />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const ProductContext = React.createContext();

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
// use context to pass data to the header
const Router = () => {
  const [products, setProducts] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (products === null) {
      setLoading(true);
      fetchProducts()
        .then(data => {
          setProducts(data);
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  return (
    <ProductContext.Provider
      value={{ products: products ?? [], loading, error }}
    >
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={routerWrapper(route)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
};

export default Router;
