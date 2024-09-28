import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

const ProductDetail = ({ product }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    alert(`Ваш відгук: "${comment}" додано успішно!`);
    setComment('');
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" />
      <p>Ціна: {product.price} грн</p> {/* Виводимо ціну на детальній сторінці */}
      <CurrencyConverter priceInUAH={product.price} />

      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Ваш коментар"
        />
        <button type="submit">Додати коментар</button>
      </form>
    </div>
  );
};

export default ProductDetail;