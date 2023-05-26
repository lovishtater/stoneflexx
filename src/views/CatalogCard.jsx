import PropTypes from 'prop-types';
import defaultImage from '../assets/SlateKblackapplication.webp';
import { urlFor } from '../client';

const CatalogItem = ({ product }) => {
  return (
    <div className="flex flex-col p-4 m-4 rounded-lg shadow-lg bg-white hover:shadow-xl hover:bg-gray-50 max-w-sm">
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={urlFor(product.images[0].image).url() || defaultImage}
          alt={product.images[0].alt}
          className="object-cover rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        />
      </div>
      <div className="flex flex-col mt-4 text-left">
        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-m font-bold text-black-500">${product.price}</p>
      </div>
    </div>
  );
};

CatalogItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CatalogItem;
