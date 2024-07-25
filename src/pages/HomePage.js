import React, { useState } from 'react';
import DataGridComponent from '../components/DataGridComponent';
import SearchFilter from '../components/SearchFilter';
import CategoryFilter from '../components/CategoryFilter';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <SearchFilter search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <DataGridComponent category={category} search={search} />
    </div>
  );
};

export default HomePage;
