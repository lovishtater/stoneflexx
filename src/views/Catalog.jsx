import { useContext } from 'react';
import CatalogCards from './CatalogCard';
import { ProductContext } from '../router/Router';
import { Loader } from '../assets/icons';

const Catalog = () => {
  const { products, loading, error } = useContext(ProductContext);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-left mt-4">Products</h1>
      {loading && <Loader />}
      {error && (
        <p className="inline-block rounded-[0.37rem] bg-red-100 p-2 text-center align-baseline font-bold leading-none text-red-700">
          {error}
        </p>
      )}
      <div className="flex flex-wrap justify-center">
        {!loading &&
          products.map(product => (
            <CatalogCards key={product.title} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Catalog;
