import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';
import { useProduct } from '../context/ProductContext';
import { Button, Checkbox } from 'antd';

function ProductList({ products, category, onAddToCart }) {
  const { comments, handleCommentSubmit } = useProduct();
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Функція для вибору всіх продуктів
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(products.map(product => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  // Функція для зміни статусу вибору окремого продукту
  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  return (
    <div className="product-list">
    
      <Checkbox onChange={handleSelectAll} checked={selectedProducts.length === products.length}>
        Обрати всі
      </Checkbox>

 
      {products.map(product => (
        <div key={product.id}>
          <ProductItem
            product={product}
            onAddToCart={onAddToCart}
          />
          
        
          <Checkbox
            checked={selectedProducts.includes(product.id)}
            onChange={() => handleCheckboxChange(product.id)}
          >
            Обрати
          </Checkbox>

          {/* Форма для коментарів */}
          <form onSubmit={(e) => {
            e.preventDefault();
            const comment = e.target.elements.comment.value;
            handleCommentSubmit(category, product.id, comment);
            e.target.reset();
          }}>
            <textarea name="comment" placeholder="Ваш коментар" required />
            <Button 
              type="primary" 
              htmlType="submit" 
              style={{ marginTop: '10px', backgroundColor: '#5e5e5e', borderColor: '#5e5e5e', color: '#fff' }}
            >
              Додати коментар
            </Button>
          </form>

       
          <div>
            {comments[category][product.id] && comments[category][product.id].map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>


          <Button 
            type="link" 
            onClick={() => alert(`Додано ${product.name} до кошика`)}
            style={{ color: '#40a9ff', fontWeight: 'bold' }}
          >
            Додати до кошика
          </Button>
        </div>
      ))}

      {/* Кнопка для додавання всіх вибраних продуктів до кошика */}
      <Button 
        type="primary"
        onClick={() => {
          if (selectedProducts.length > 0) {
            alert(`Додано ${selectedProducts.length} продуктів до кошика`);
          } else {
            alert('Оберіть хоча б один продукт');
          }
        }}
        style={{ marginTop: '20px' }}
      >
        Додати обрані до кошика
      </Button>
    </div>
  );
}

export default ProductList;
