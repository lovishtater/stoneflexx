import React from 'react';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';
// tailwindcss classes are used here to style the footer
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img
            className="w-12 h-12 text-white bg-slate-500"
            src="https://i.ibb.co/0JNTQDP/stoneflexx.png"
            alt="stoneflexx"
          />
          <span className="ml-3 text-xl">StoneFlexx</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-slate-500 sm:py-2 sm:mt-0 mt-4">
          © 2021 StoneFlexx —
          <a
            href="https://twitter.com/stoneflexx"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @stoneflexx
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/stoneflexx"
            className="text-gray-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoTwitter />
          </a>
          <a
            href="https://www.instagram.com/stoneflexx"
            className="ml-3 text-gray-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoInstagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
