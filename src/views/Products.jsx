import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PinchZoomPan from 'react-responsive-pinch-zoom-pan';
import { urlFor } from '../client';
import NotFound from '../assets/404.png';
import { BsArrowLeft, BsArrowRight, BsCart } from 'react-icons/bs';
import { ProductContext } from '../router/Router';
import CatalogItem from './CatalogCard';
import ConnectWithUs from '../components/ConnectWithUs';
import Chip from '../components/Chips';
import { AiOutlineLoading } from 'react-icons/ai';

const chipButtonbasic = `text-sm rounded-full hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer p-2 m-2`;
const chipButtonActive = chipButtonbasic + `border-2 border-gray-600 `;
const chipButtonInactive = chipButtonbasic + ` bg-gray-200 text-gray-600`;

const Products = () => {
  const { _id } = useParams();
  // get the product from the context
  const { products, loading } = useContext(ProductContext);
  const currentProduct = products.find(product => product._id === _id);
  console.log(currentProduct, 'products', _id);
  const [productDetails, setProductDetails] = React.useState({
    activeTag: null,
    imageIndex: 0,
    activeColor: null,
  });

  const setImage = () => {
    const { activeTag, activeColor } = productDetails;
    let index = 0;

    if (activeTag && activeColor) {
      index = currentProduct.images.findIndex(
        product => product?.sizes?.includes(activeTag) && product?.colors?.includes(activeColor)
      );
    } else if (activeTag) {
      index = currentProduct?.images.findIndex(product => product?.sizes?.includes(activeTag));
    } else if (activeColor) {
      index = currentProduct.images.findIndex(
        product => product?.colors?.includes(activeColor),
      );
    }

    return index >=0 ? index : 0;
  };

  useEffect(() => {
    setProductDetails({
      ...productDetails,
      imageIndex: setImage(),
    });
  }, [productDetails.activeTag, productDetails.activeColor]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {loading ? (
        <AiOutlineLoading className="animate-spin" />
      ) : currentProduct ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full h-full m-4 p-4">
            <div className="flex flex-col items-center w-full h-full m-4 p-4">
              <div className="flex flex-col items-center  w-full h-auto aspect-square m-4 p-4">
                <PinchZoomPan maxScale={2} position="center">
                  <img
                    src={urlFor(
                      currentProduct.images[productDetails.imageIndex].image,
                    )}
                    className='w-full h-full object-contain rounded-lg'
                    alt={currentProduct.images[productDetails.imageIndex].alt}
                  />
                </PinchZoomPan>
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full mt-1 bg-input rounded-lg">
                <BsArrowLeft
                  className="text-2xl ml-4"
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
                  className="text-2xl mr-4"
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
              <h1 className="text-4xl font-bold">{currentProduct?.title}</h1>
              <p className="text-base">{currentProduct?.description}</p>
              <div className="flex flex-row w-full h-full">
                <div className="flex flex-col w-full h-full">
                  {currentProduct?.sizes && (
                    <>
                      <p className="text-base mt-2">Size</p>
                      <div className="flex flex-wrap w-full h-full">
                        {currentProduct?.sizes?.map((size, index) => (
                          <Chip
                            key={index}
                            title={size}
                            active={productDetails.activeTag === size}
                            onClick={() =>
                              setProductDetails({
                                ...productDetails,
                                activeTag: size,
                              })
                            }
                          />
                        ))}
                      </div>
                    </>
                  )}
                  {currentProduct?.colors && (
                    <>
                      <p className="text-base mt-2">Color</p>
                      <div className="flex flex-wrap w-full h-full">
                        {currentProduct?.colors?.map((color, index) => (
                          <Chip
                            key={index}
                            title={color}
                            active={productDetails.activeColor === color}
                            onClick={() =>
                              setProductDetails({
                                ...productDetails,
                                activeColor: color,
                              })
                            }
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <p className="text-base mt-2">Price</p>
                  <p className="text-base font-bold">
                    ${currentProduct?.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ConnectWithUs 
          metadata={{
            product : currentProduct.title,
            product_id : currentProduct._id,
            selected_size : productDetails.activeTag,
            selected_color : productDetails.activeColor,
            quantity : 1
          }}
          />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-2xl font-bold">Related Products</h1>
            <div className="flex flex-wrap items-center justify-center w-full h-full">
              {products?.slice(0, 3)?.map((product, index) => (
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
