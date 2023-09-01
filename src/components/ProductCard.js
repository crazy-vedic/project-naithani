import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img style={{height:"66%", width:"7%"}} src={`https://vedicvarma.com/api/naithani${product.imageUrl}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
