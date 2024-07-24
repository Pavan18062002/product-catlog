import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../api';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Error from './Error';
import { Box, Typography } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        setError('Failed to fetch product details');
      }
      setLoading(false);
    };

    loadProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!product) return <Error message="Product not found" />;

  return (
    <Box>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="body1">Category: {product.category}</Typography>
      <Typography variant="body1">Price: ${product.price}</Typography>
      <Typography variant="body2">{product.description}</Typography>
    </Box>
  );
};

export default ProductDetails;
