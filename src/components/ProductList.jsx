import React, { useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onSelectionChange }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleToggle = (productId) => {
    const updatedSelectedProducts = selectedProducts.includes(productId)
      ? selectedProducts.filter((id) => id !== productId)
      : [...selectedProducts, productId];

    setSelectedProducts(updatedSelectedProducts);
    onSelectionChange(updatedSelectedProducts.length); // Передаємо кількість вибраних товарів
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isSelected={selectedProducts.includes(product.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default ProductList;