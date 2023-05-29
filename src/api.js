import { client } from './client';

export const fetchProducts = async () => {
  try {
    const query = `*[_type == "products"]`;
    const response = await client.fetch(query);
    console.log('Product data fetched from API');
    return response;
  } catch (error) {
    console.log('Error fetching product data from API' + error);
    return null;
  }
};
