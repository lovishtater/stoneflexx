import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const _id = useParams();
  const { products } = sessionStorage.getItem('products');
  const currentProduct = products.find(product => product._id === _id);
    const [productDetails, setProductDetails] = React.useState({
        activeTag: null,
        quantity: 1, 
    });

  return <div className="flex flex-col items-center justify-center w-full h-full">
    { currentProduct ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
};

export default Products;
