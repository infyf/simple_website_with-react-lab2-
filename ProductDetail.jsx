import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';

function ProductDetail() {
  const { id, category } = useParams(); // Отримуємо category з параметрів
  const { products } = useProduct();
  const product = Object.values(products).flat().find(p => p.id === parseInt(id));

  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('Comment:', comment);
    alert(`Ваш відгук: "${comment}" додано успішно!`);
    setComment(''); // Очистити текст після додавання коментаря
  };

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Ціна: {product.price} грн</p>

          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Ваш коментар"
              required
            />
            <button type="submit">Додати коментар</button>
          </form>
        </>
      ) : (
        <p>Товар не знайдено</p>
      )}
    </div>
  );
}

export default ProductDetail;
