import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(3); // Number of products to display initially

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleReadMore = () => {
    setDisplayCount((prevCount) => prevCount + 3); // Display 3 more products
  };

  return (
    <div className="product-list">
      {products.slice(0, displayCount).map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {displayCount < products.length && ( // Only show the "Read More..." button if there are more products to display
        <button onClick={handleReadMore}>Read More...</button>
      )}
    </div>
  );
}

export default ProductList;
