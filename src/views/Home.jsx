import React from 'react';
import c1 from '../assets/c1.webp';
import c2 from '../assets/c2.webp';
import { Link } from 'react-router-dom';

const buttonStyle =
  'bg-slate-500 text-base md:text-lg hover:bg-slate-700 text-white  font-semibold hover:text-white py-2 px-4 border-2 border-white hover:border-transparent mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="relative flex flex-row justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center w-1/2 h-full">
          <img src={c1} alt="banner" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 h-full">
          <img src={c2} alt="banner" className="w-full h-full" />
        </div>
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-2xl md:text-6xl font-bold text-white my-2">
            StoneFlexx
          </h1>
          <h2 className="text-base text-center md:text-2xl font-bold text-gray-light my-2">
            &quot;Transform your space: Premium stone veneer, unmatched
            value&quot;
          </h2>
          {/* div containing 2 buttons for shop and contact, one outlined and one filled */}
          <div className="flex flex-row justify-center items-center my-2">
            <Link to="/catalog">
              <button
                type="button"
                className={buttonStyle}

              >
                Shop All
              </button>
            </Link>
            <Link to="/about">
              <button type="button" className={buttonStyle}>
                The Stone Story
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full m-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 my-2">
          StoneFlexx's biggest FLEX!
        </h1>
        <p className="text-base md:text-2xl font-bold text-gray-800 m-2 w-4/5 md:w-1/2 text-center">
          Discover the allure of our handcrafted Flexible Stone Veneers, each
          bearing a unique artistic touch from the rarest Indian mountains.
          Transform your space with unparalleled elegance, blending natural
          harmony and affordability. Embrace the enchantment of one-of-a-kind
          beauty, now at your fingertips.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full m-8">
        <h1 className=" text-2xl md:text-4xl font-bold text-gray-800 my-2">
          Premier Collection 'The Real Flex'
        </h1>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
