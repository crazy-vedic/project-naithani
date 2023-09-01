import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './index.css';
import Banner from './components/Banner';
import DescriptionAndContact from './components/Description';
import ProductList from './components/ProductCardList';

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path='/projects/naithani' element={
        <>
          <Banner />
          <DescriptionAndContact />
          <ProductList />
        </>
      } />
      <Route path='/projects/naithani/*' element={<Navigate to="/projects/naithani" state={{ from: location.pathname }} />} />
    </Routes>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
