import axios from 'axios';

const API_URL = 'https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products';

export const fetchProducts = async (page, pageSize, category, search) => {
  try {
    const response = await axios.get(API_URL, {
      params: { page, pageSize, category, search }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};