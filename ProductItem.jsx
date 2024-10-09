import React from 'react';
import './ProductItem.css';

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Ціна: {product.price} грн</p>
      <button onClick={() => onAddToCart(product)}>Додати до кошика</button>
    </div>
  );
}

export default ProductItem;
