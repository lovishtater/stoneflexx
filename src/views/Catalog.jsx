import React from 'react';
import Searchbar from '../components/Searchbar';
import CatalogCards from './CatalogCard';
import ProductFilters from '../components/ProductFilters';
import {getProducts} from "../api"

// [
//   {
//     title: 'Marble veneer',
//     description: 'Regular priceFrom $14.99 USD',
//     price: 14.99,
//   },
//   {
//     title: 'Metallic veneer',
//     description: 'Metallic veneer',
//     price: 16.99,
//   },
//   {
//     title: 'Sandstone veneer',
//     description: 'Sandstone veneer',
//     price: 13.49,
//   },
//   {
//     title: 'Slate stone veneer',
//     description: 'Slate stone veneer',
//     price: 8.49,
//   },
//   {
//     title: 'Translucent slate stone veneer',
//     description: 'Translucent slate stone veneer',
//     price: 11.49,
//   },
//   {
//     title: 'Veneer - Concrete',
//     description: 'Veneer - Concrete',
//     price: 14.49,
//   },
//   {
//     title: 'Veneer - Sampler',
//     description: 'Veneer - Sampler',
//     price: 20.0,
//   },
// ]

const Catalog = () => {
  const [products, setProducts] = React.useState(getProducts());
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-left mt-4">Products</h1>
      <ProductFilters
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map(product => (
          <CatalogCards key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
