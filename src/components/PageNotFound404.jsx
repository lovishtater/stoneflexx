import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../assets/404.png';
import { HomeIcon } from '../assets/icons';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full m-4 p-4">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img src={NotFound} alt="404" />
        </div>
        <div className="flex flex-row items-center justify-center w-full h-full m-4">
          <Link
            to="/"
            className="flex flex-row items-center justify-center m-1 px-2 py-1 border-2 border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white transition ease-in-out duration-150 shadow-lg"
          >
            <HomeIcon className="w-8 h-8 text-2xl mr-1 pr-1" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
