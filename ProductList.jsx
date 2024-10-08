import React from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';
import { useProduct } from '../context/ProductContext';

function ProductList({ products, category }) {
  const { selectedProducts, handleProductSelect, comments, handleCommentSubmit } = useProduct();

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id}>
          <ProductItem
            product={product}
            isSelected={selectedProducts.includes(product.id)}
            onToggle={() => handleProductSelect(product.id)}
          />
          <form onSubmit={(e) => {
            e.preventDefault();
            const comment = e.target.elements.comment.value;
            handleCommentSubmit(category, product.id, comment); // Передаємо категорію
            e.target.reset();
          }}>
            <textarea name="comment" placeholder="Ваш коментар" required />
            <button type="submit">Додати коментар</button>
          </form>
          <div>
            {comments[category][product.id] && comments[category][product.id].map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
