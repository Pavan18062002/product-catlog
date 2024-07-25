import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div>
        <header className="header">Product Catalog</header>
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </main>
        <footer className="footer">© 2024 My Company</footer>
      </div>
  );
}

export default App;
