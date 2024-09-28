import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';
import ConfirmLogoutModal from './components/ConfirmLogoutModal'; 
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [comments, setComments] = useState({}); // Для зберігання коментарів
  const exchangeRate = 0.040; // Курс гривні до долара

  const products = [
    { id: 1, name: 'Samsung s24', image: 'https://www.aks.ua/images/categories/5-1675495284.webp', price: 20000 },
    { id: 2, name: 'Samsung s23', image: 'https://www.aks.ua/images/categories/5-1675495284.webp', price: 15000 },
    { id: 3, name: 'Samsung s22', image: 'https://www.aks.ua/images/categories/5-1675495284.webp', price: 10000 },
  ];

  const handleProductSelect = (productId) => {
    const product = products.find(p => p.id === productId);
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
      setTotalPrice(totalPrice - product.price);
    } else {
      setSelectedProducts([...selectedProducts, productId]);
      setTotalPrice(totalPrice + product.price);
    }
  };

  const handleCommentSubmit = (productId, comment) => {
    alert(`Ваш відгук: «${comment}» додано успішно!`); // Алерт з повідомленням
    setComments(prev => ({
      ...prev,
      [productId]: [...(prev[productId] || []), comment],
    }));
  };

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        selectedCount={selectedProducts.length}
        onLogin={() => setShowLoginForm(true)}
        onLogout={() => setShowLogoutModal(true)}
      />
      <ProductList 
        products={products} 
        onProductSelect={handleProductSelect} 
        selectedProducts={selectedProducts} 
        onCommentSubmit={handleCommentSubmit} 
        comments={comments}
        exchangeRate={exchangeRate}
      />
      <h2>Загальна сума: {totalPrice} грн ({(totalPrice * exchangeRate).toFixed(2)} $)</h2>
      
      {showLoginForm && (
        <LoginForm
          onLogin={() => setIsLoggedIn(true)}
          onClose={() => setShowLoginForm(false)}
        />
      )}
      
      {showLogoutModal && (
        <ConfirmLogoutModal
          onConfirm={() => setIsLoggedIn(false)}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
}

export default App;