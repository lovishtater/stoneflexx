import { client } from "./client";

export const fetchProducts = async () => {
    try {
    const query = `*[_type == "products"]`;
    const response = await client.fetch(query);
    sessionStorage.setItem('products', JSON.stringify(response));
    console.log('Product data fetched from API');
    } catch (error) {
    console.log("Error fetching product data from API" + error);
    }
  };

export const getProducts = () => {
    const products = sessionStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}
