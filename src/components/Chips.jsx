import React from 'react';

const Chips = ({ title, active, onClick }) => {
  const activeClass = active
    ? 'text-white bg-gray-700'
    : 'text-gray-700 bg-gray-100';
  return (
    <div
      className={
        'flex justify-center items-center m-1 font-medium p-2 rounded-full  border border-gray-300 ' +
        activeClass
      }
      onClick={onClick}
    >
      <div className="text-sm font-normal leading-none max-w-full flex-initial">
        {title}
      </div>
    </div>
  );
};

export default Chips;
