import React, { useContext } from 'react';
import CatalogCards from './CatalogCard';
import ProductFilters from '../components/ProductFilters';
import { ProductContext } from '../router/Router';
import { AiOutlineLoading } from 'react-icons/ai';

const Catalog = () => {
  const { products, loading, error } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  React.useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-left mt-4">Products</h1>

      <ProductFilters
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      {loading && <AiOutlineLoading className="animate-spin" />}
      {error && (
        <p className="inline-block rounded-[0.37rem] bg-red-100 p-2 text-center align-baseline font-bold leading-none text-red-700">
          {error}
        </p>
      )}
      <div className="flex flex-wrap justify-center">
        {!loading &&
          filteredProducts.map(product => (
            <CatalogCards key={product.title} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Catalog;

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
