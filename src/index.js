import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // This will import the global styles for your app
import Banner from './components/Banner'; // Assuming you've placed the components in a folder named 'components'
import DescriptionAndContact from './components/Description';
import ProductList from './components/ProductCardList';

function App() {
  return (
    <div className="app-container">
      <Banner />
      <DescriptionAndContact />
      <ProductList />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
