import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PinchZoomPan from 'react-responsive-pinch-zoom-pan';
import { urlFor } from '../client';
import NotFound from '../assets/404.png';
import { ProductContext } from '../router/Router';
import CatalogItem from './CatalogCard';
import ConnectWithUs from '../components/ConnectWithUs';
import Chip from '../components/Chips';
import { ArrowLeft, ArrowRight, Cart, Loader } from '../assets/icons';

const Products = () => {
  const { _id } = useParams();
  const { products, loading } = useContext(ProductContext);
  const currentProduct = products.find(product => product._id === _id);
  const [productDetails, setProductDetails] = React.useState({
    activeSizeIndex: 0,
    imageIndex: 0,
    activeColorIndex: 0,
  });

  useEffect(() => {
    setProductDetails({
      ...productDetails,
      imageIndex: productDetails.activeColorIndex,
    });
  }, [productDetails.activeColorIndex]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {loading ? (
        <Loader />
      ) : currentProduct ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full h-full m-4 p-4">
            <div className="flex flex-col items-center w-full h-full m-4 p-4">
              <div className="flex flex-col items-center  w-full h-auto aspect-square mx-4 mt-4 p-4">
                <PinchZoomPan maxScale={2} position="center">
                  <img
                    src={urlFor(
                      currentProduct.images[productDetails.imageIndex].image,
                    )}
                    className="w-full h-full object-contain rounded-lg"
                    alt={currentProduct.images[productDetails.imageIndex]?.alt}
                  />
                </PinchZoomPan>
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full mt-1 bg-input rounded-lg">
                <ArrowLeft
                  className="w-6 h-6 text-2xl ml-4"
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
                <ArrowRight
                  className="w-6 h-6 text-2xl mr-4"
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
                  {currentProduct?.prices && (
                    <>
                      <p className="text-base mt-2">Size</p>
                      <div className="flex flex-wrap w-full h-full">
                        {currentProduct?.prices?.map(({ size }, index) => (
                          <Chip
                            key={index}
                            title={size}
                            active={productDetails.activeSizeIndex === index}
                            onClick={() =>
                              setProductDetails({
                                ...productDetails,
                                activeSizeIndex: index,
                              })
                            }
                          />
                        ))}
                      </div>
                    </>
                  )}
                  {currentProduct?.images && (
                    <>
                      <p className="text-base mt-2">Color</p>
                      <div className="flex flex-wrap w-full h-full">
                        {currentProduct?.images.map(({ color }, index) => {
                          if (color === undefined || color.trim() === '')
                            return null;
                          return (
                            <Chip
                              key={index}
                              title={color}
                              active={productDetails.activeColorIndex === index}
                              onClick={() =>
                                setProductDetails({
                                  ...productDetails,
                                  activeColorIndex: index,
                                })
                              }
                            />
                          );
                        })}
                      </div>
                    </>
                  )}
                  <p className="text-base mt-2">Price</p>
                  <p className="text-xl font-bold">
                    {currentProduct?.prices[productDetails.activeSizeIndex]
                      ?.discountPrice ? (
                      <div>
                        <p className="inline-block text-base font-bold text-gray-400 line-through mr-2">
                          $
                          {
                            currentProduct?.prices[
                              productDetails.activeSizeIndex
                            ]?.price
                          }
                        </p>
                        $
                        {
                          currentProduct?.prices[productDetails.activeSizeIndex]
                            ?.discountPrice
                        }
                      </div>
                    ) : (
                      <p className="text-xl font-bold">
                        $
                        {
                          currentProduct?.prices[productDetails.activeSizeIndex]
                            ?.price
                        }
                      </p>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ConnectWithUs
            metadata={{
              product: currentProduct?.title,
              product_id: currentProduct?._id,
              selected_size:
                currentProduct?.prices[productDetails.activeSizeIndex].size,
              selected_color:
                currentProduct?.images[productDetails.activeColorIndex].color,
              quantity: 1,
            }}
          />
          <div className="flex flex-col items-center justify-center w-full h-full my-8">
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
              <Cart className="w-4 h-4 mr-2" />
              Go to Catalog
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;
