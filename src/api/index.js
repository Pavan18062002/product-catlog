import axios from 'axios';

const API_URL = 'https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products';

export const fetchProducts = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`);
    console.log('API response:', response.data);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
