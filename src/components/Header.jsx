import React from 'react';
import { Link } from 'react-router-dom';
import { CloseIcon, MenuIcon } from '../assets/icons';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Catalog', path: '/catalog' },
  ];
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img
                className="h-20 w-auto sm:h-20"
                src="https://i.ibb.co/0JNTQDP/stoneflexx.png"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {routes.map(route => (
                <Link
                  to={route.path}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 hover:underline cursor-pointer px-3 py-2 rounded-md"
                  key={route.name}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      {open && (
        <div
          className={
            'z-20 opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          }
        >
          <div
            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
            style={{ backgroundColor: '#fff' }}
          >
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-auto"
                    src="https://i.ibb.co/0JNTQDP/stoneflexx.png"
                    alt="stoneflexx"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <CloseIcon />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {routes.map(route => (
                    <Link
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      to={route.path}
                      onClick={() => setOpen(!open)}
                      key={route.name}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {route.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
