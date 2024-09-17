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
      <ProductItem
        key={products[0].id}
        product={products[0]}
        isSelected={selectedProducts.includes(products[0].id)}
        onToggle={handleToggle}
      />
      <ProductItem
        key={products[1].id}
        product={products[1]}
        isSelected={selectedProducts.includes(products[1].id)}
        onToggle={handleToggle}
      />
      <ProductItem
        key={products[2].id}
        product={products[2]}
        isSelected={selectedProducts.includes(products[2].id)}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default ProductList;
