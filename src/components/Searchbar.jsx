import React from 'react';
import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ filteredProducts, search, setSearch }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative flex flex-col w-full justify-end">
      <input
        type="text"
        className="block w-full focus:outline-none border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        placeholder="Search..."
        value={search}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={e => setSearch(e.target.value)}
      />

      {open && (
        <div className="absolute top-4 mt-4 w-full rounded-md bg-primary outline-slate-500">
          {filteredProducts.map(recommendation => (
            <div
              className="cursor-pointer py-2 px-3 hover:bg-white hover:bg-opacity-10"
              key={recommendation.title}
            >
              <p className="text-sm font-medium text-gray-600">
                {recommendation?.title}
              </p>
              <p className="text-sm text-gray-500">
                {recommendation?.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Searchbar.defaultProps = {
  recommendations: [],
  search: '',
  setSearch: () => {},
};

export default Searchbar;
