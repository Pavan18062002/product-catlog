import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchProducts } from '../api';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Error from './Error';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const columns = [
  { field: 'image', headerName: 'Image', renderCell: (params) => <img src={params.value} alt={params.row.name} style={{ width: 50, height: 50 }} /> },
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'price', headerName: 'Price', type: 'number', width: 100 }
];

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('asc');
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchProducts(page + 1);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError('Unexpected API response format');
        }
      } catch (error) {
        setError('Failed to fetch products');
      }
      setLoading(false);
    };

    loadProducts();
  }, [page]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  console.log('Products:', products);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || product.category_level_1 === category)
  );

  const sortedProducts = filteredProducts.sort((a, b) => 
    sort === 'asc' ? a.compare_price - b.compare_price : b.compare_price - a.compare_price
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="biscuits & cookies">Biscuits & Cookies</MenuItem>
            <MenuItem value="snacks & branded foods">Snacks & Branded Foods</MenuItem>
            {/* Add other categories as needed */}
          </Select>
        </FormControl>
      </Box>
      <DataGrid
        rows={sortedProducts}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        pagination
        onPageChange={(params) => setPage(params.page)}
        onRowClick={(params) => navigate(`/products/${params.id}`)}
      />
    </Box>
  );
};

export default ProductTable;
