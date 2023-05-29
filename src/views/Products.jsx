import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import PinchZoomPan from 'react-responsive-pinch-zoom-pan';
import { urlFor } from '../client';
import NotFound from '../assets/404.png';
import { BsArrowLeft, BsArrowRight, BsCart } from 'react-icons/bs';
import { ProductContext } from '../router/Router';
import CatalogItem from './CatalogCard';
import ConnectWithUs from '../components/connectWithUs';

const chipButtonbasic = `flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer p-2 m-2`;
const chipButtonActive = chipButtonbasic + ` bg-gray-600 text-white`;
const chipButtonInactive = chipButtonbasic + ` bg-gray-200 text-gray-600`;

const Products = () => {
  const { _id } = useParams();
  // get the product from the context
  const { products } = useContext(ProductContext);
  console.log(products, 'products', _id);
  const currentProduct = products.find(product => product._id === _id);
  const [productDetails, setProductDetails] = React.useState({
    activeTag: null,
    imageIndex: 0,
    activeColor: null,
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {currentProduct ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-full m-4 p-4">
            <div className="flex flex-col items-center justify-center w-full h-full m-4 p-4">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <PinchZoomPan maxScale={2} position="center">
                  <img
                    src={urlFor(
                      currentProduct.images[productDetails.imageIndex].image,
                    )}
                    alt={currentProduct.images[productDetails.imageIndex].alt}
                  />
                </PinchZoomPan>
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full">
                <BsArrowLeft
                  className="text-2xl"
                  onClick={() =>
                    productDetails.imageIndex > 0 &&
                    setProductDetails({
                      ...productDetails,
                      imageIndex: productDetails.imageIndex - 1,
                    })
                  }
                />

                <p>
                  {productDetails.imageIndex + 1}/{currentProduct.images.length}
                </p>
                <BsArrowRight
                  className="text-2xl"
                  onClick={() =>
                    productDetails.imageIndex <
                      currentProduct.images.length - 1 &&
                    setProductDetails({
                      ...productDetails,
                      imageIndex: productDetails.imageIndex + 1,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col w-full h-full m-4 p-4">
              <h1 className="text-2xl font-bold">{currentProduct.title}</h1>
              <p className="text-sm">{currentProduct.description}</p>
              <div className="flex flex-row w-full h-full">
                <div className="flex flex-col w-full h-full">
                  <p className="text-sm">Size</p>
                  <div className="flex flex-row w-full h-full">
                    {currentProduct.size.map((size, index) => (
                      <button
                        key={index}
                        className={
                          productDetails.size === size
                            ? chipButtonActive
                            : chipButtonInactive
                        }
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm">Color</p>
                  <div className="flex flex-row w-full h-full">
                    {currentProduct.colors.map((color, index) => (
                      // chip
                      <button
                        key={index}
                        className={
                          productDetails.color === color
                            ? chipButtonActive
                            : chipButtonInactive
                        }
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm">Price</p>
                  <p className="text-sm">{currentProduct.price}</p>
                </div>
              </div>
            </div>
          </div>
          <ConnectWithUs />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-2xl font-bold">Related Products</h1>
            <div className="flex flex-wrap items-center justify-center w-full h-full">
              {products.slice(0, 3).map((product, index) => (
                <CatalogItem key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={NotFound}
            className="w-full h-full md:w-1/2 md:h-1/2 m-4 p-4"
            alt="404"
          />
          <h1 className="text-2xl font-bold m-2">Sorry, no products found!</h1>
          <Link to="/catalog">
            <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <BsCart className="w-4 h-4 mr-2" />
              Go to Catalog
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;
