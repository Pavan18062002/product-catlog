import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import Loader from './Loader';
import '../App.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const data = await fetchProducts();
      const product = data.products.find((p) => p.sku_code === id);
      setProduct(product);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  if (loading) return <Loader />;

  if (!product) return <div>Product not found</div>;

  return (
    <div  className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
