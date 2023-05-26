import React from 'react';
import c2 from '../assets/c2.webp';
const Contacts = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/2">
        <img src={c2} alt="contact" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-base md:text-2xl font-bold text-gray-800 m-2 w-4/5 md:w-1/2 text-center">
          We invite you to reach out to us if you have any questions, need
          information, or would like to share suggestions. We warmly welcome all
          inquiries!
        </p>
        <p className="text-base md:text-2xl font-bold text-gray-800 m-2 w-4/5 md:w-1/2 text-center">
          Email -
          <a href="mailto:info@stoneflexx.com" className="text-black-500">
            info@stoneflexx.com
          </a>
        </p>
        <p className="text-base md:text-2xl font-bold text-gray-800 m-2 w-4/5 md:w-1/2 text-center">
          Mobile -
          <a href="tel:+971585892711" className="text-black-500">
            +971 585892711
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
