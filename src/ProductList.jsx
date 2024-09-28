import React from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';

function ProductList({ products, onProductSelect, selectedProducts, onCommentSubmit, comments, exchangeRate }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id}>
          <ProductItem
            product={product}
            isSelected={selectedProducts.includes(product.id)}
            onToggle={onProductSelect}
          />
          <form onSubmit={(e) => {
            e.preventDefault();
            const comment = e.target.elements.comment.value;
            onCommentSubmit(product.id, comment);
            e.target.reset(); // Очищаємо форму
          }}>
            <textarea name="comment" placeholder="Ваш коментар" required />
            <button type="submit">Додати коментар</button>
          </form>
          <div>
            {comments[product.id] && comments[product.id].map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;