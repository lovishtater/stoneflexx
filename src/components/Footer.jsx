import React, { useState } from 'react';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { emailValidator } from '../utils';
import { client } from '../client';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    if (!email) {
      alert('Please enter your email');
    } else if (!emailValidator(email)) {
      alert('Please enter a valid email');
    } else {
      const data = {
        _type: 'subscribeToMail',
        email: email,
      };
      await client
        .create(data)
        .then(() => alert('You have subscribed successfully'))
        .catch(err => alert('fail to subscribe' + err));
      setEmail('');
    }
    setLoading(false);
  };
  return (
    <footer className="text-gray-600 body-font">
      <div className="py-4 px-5 flex flex-col items-center justify-center bg-slate-500">
        <h1 className="title-font font-medium  text-white">
          Subscribe to our emails
        </h1>
        <div className="flex items-center py-2">
          <input
            className=" bg-input border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none rounded shadow-md"
            type="email"
            placeholder="Enter your email"
            aria-label="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-gray hover:bg-blue-500 text-sm text-white py-2 px-2 rounded"
            type="button"
            disabled={loading}
            onClick={() => !loading && handleSubscribe()}
          >
            Sign Up
          </button>
        </div>
      </div>
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
