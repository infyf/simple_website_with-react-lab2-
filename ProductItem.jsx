import React from 'react';
import './ProductItem.css';

function ProductItem({ product, isSelected, onToggle }) {
  return (
    <div className={`product-item ${isSelected ? 'selected' : ''}`} onClick={() => onToggle(product.id)}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Ціна: {product.price} грн</p>
      <input type="checkbox" checked={isSelected} readOnly />
    </div>
  );
}

export default ProductItem;
