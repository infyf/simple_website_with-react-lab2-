import React from 'react';
import './ProductItem.css';

function ProductItem({ product, isSelected, onToggle }) {
  return (
    <div
      className={`product-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onToggle(product.id)}
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(product.id)}
      />
    </div>
  );
}

export default ProductItem;