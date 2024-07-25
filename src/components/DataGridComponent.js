import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchProducts } from '../api';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import '../App.css'

const DataGridComponent = ({ category, search }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortModel, setSortModel] = useState([
    {
      field: 'price',
      sort: 'asc',
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(page + 1, pageSize, category, search);
        setProducts(data.products);
        setTotalProducts(data.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [page, pageSize, category, search, sortModel]);

  const handleRowClick = (params) => {
    navigate(`/details/${params.id}`);
  };

  const handleSortModelChange = (newModel) => {
    setSortModel(newModel);
  };

  if (loading) return <Loader />;

  return (
    <div  className="data-grid-container" style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={[
          { field: 'id', headerName: 'ID', width: 90 },
          { field: 'name', headerName: 'Name', width: 150 },
          { field: 'price', headerName: 'Price', width: 110, sortable: true },
          { field: 'image', headerName: 'Image', width: 150, renderCell: (params) => (
            <img src={params.value} alt={params.row.name} style={{ width: '100%' }} />
          )}
        ]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => {
          setPageSize(newPageSize);
          setPage(0);
        }}
        rowsPerPageOptions={[10, 20, 50]}
        pagination
        paginationMode="server"
        rowCount={totalProducts}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        onRowClick={handleRowClick}
        getRowId={(row) => row.sku_code}
        sortingOrder={['asc', 'desc']}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
      />
    </div>
  );
};

export default DataGridComponent;
