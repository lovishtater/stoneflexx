import React from 'react';
import Searchbar from './Searchbar';
import { BsFilter } from 'react-icons/bs';

const sortTypes = {
  'Price: Low to High': (a, b) => a.price - b.price,
  'Price: High to Low': (a, b) => b.price - a.price,
  'Alphabetically, A-Z': (a, b) => a.title.localeCompare(b.title),
  'Alphabetically, Z-A': (a, b) => b.title.localeCompare(a.title),
  'Date, old to new': (a, b) => a._createdAt - b._createdAt,
  'Date, new to old': (a, b) => b._createdAt - a._createdAt,
};

const ProductFilters = ({ products, setFilteredProducts }) => {
  const [openFilterModal, setOpenFilterModal] = React.useState(false);
  const [filters, setFilters] = React.useState({
    search: '',
    sort: 'Price: Low to High',
    price: { min: 0, max: 0 },
    available: 'All',
  });
  React.useEffect(() => {
    let allProducts = [...products];
    const { search, sort, price, available } = filters;
    if (search.length > 0) {
      //regex to match search term globally and case insensitive
      const regex = new RegExp(search, 'gi');
      const filteredByTitle = products.filter(product =>
        product.title.match(regex),
      );
      const filteredByDescription = products.filter(product =>
        product.description.match(regex),
      );
      allProducts = [...filteredByTitle, ...filteredByDescription];
    } else {
      allProducts = products;
    }
    if (price.min > 0 || price.max > 0) {
      const filtered = allProducts.filter(
        product => product.price >= price.min && product.price <= price.max,
      );
      allProducts = filtered;
    }
    if (available === 'In stock') {
      allProducts = allProducts.filter(product => product?.stock > 0);
    } else if (available === 'Out of stock') {
      allProducts = allProducts.filter(product => product?.stock <= 0);
    }
    if (sortTypes[sort]) {
      allProducts = allProducts.sort(sortTypes[sort]);
    }

    setFilteredProducts([...allProducts]);
  }, [filters]);

  return (
    <div
      className="flex justify-between md:flex-row border-2 border-blue-100 m-4 w-full bg-white shadow rounded-md"
      style={{ maxWidth: '90vw' }}
    >
      <div className="flex shadow-black/20 m-2 w-full md:w-1/3 ">
        <Searchbar
          search={filters.search}
          setSearch={search => setFilters({ ...filters, search })}
        />
        <div className="md:hidden" onClick={() => setOpenFilterModal(true)}>
          <BsFilter className="text-2xl m-2" />
          {openFilterModal && (
            <FilterModal
              open={openFilterModal}
              setOpen={setOpenFilterModal}
              filters={filters}
              setFilters={setFilters}
            />
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <Filter filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
};

const Filter = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden  shadow-black/20">
      <div className="flex flex-col m-2">
        <label
          htmlFor="sort-by"
          className="block text-sm font-medium text-gray-700"
        >
          Sort by
        </label>
        <select
          id="sort-by"
          name="sort-by"
          className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          onChange={e => setFilters({ ...filters, sort: e.target.value })}
        >
          {Object.keys(sortTypes).map((sortType, index) => (
            <option key={index} value={sortType}>
              {sortType}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col m-2">
        <label
          htmlFor="price-range"
          className="block text-sm font-medium text-gray-700"
        >
          Price range
        </label>
        <div className="flex items-center mt-1">
          <input
            type="number"
            name="price-range"
            id="price-range"
            className="block text-sm border-primary-300 rounded-md shadow-sm focus:ring-primary focus:border-primary w-16"
            placeholder="Min"
            value={filters.price.min}
            onChange={e =>
              setFilters({
                ...filters,
                price: { ...filters.price, min: e.target.value },
              })
            }
          />
          <span className="mx-2 text-gray-500">-</span>
          <input
            type="number"
            name="price-range"
            id="price-range"
            className="block text-sm border-primary-300 rounded-md shadow-sm focus:ring-primary focus:border-primary w-16"
            placeholder="Max"
            value={filters.price.max}
            onChange={e =>
              setFilters({
                ...filters,
                price: { ...filters.price, max: e.target.value },
              })
            }
          />
        </div>
      </div>
      <div className="flex flex-col m-2">
        <label
          htmlFor="availability"
          className="block text-sm font-medium text-gray-700"
        >
          Availability
        </label>
        <select
          id="availability"
          name="availability"
          className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          onChange={e => setFilters({ ...filters, available: e.target.value })}
        >
          <option>All</option>
          <option>In stock</option>
          <option>Out of stock</option>
        </select>
      </div>
    </div>
  );
};

const FilterModal = ({ open, setOpen, filters, setFilters }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block overflow-hidden w-full text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <Filter filters={filters} setFilters={setFilters} />
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn m-2 bg-red text-base px-2 py-1 rounded-md hover:bg-red-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFilters;
