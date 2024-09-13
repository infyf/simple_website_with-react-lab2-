
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
  const [selectedCount, setSelectedCount] = useState(0);

  const products = [
    { id: 1, name: 'Sumsung s24', image: 'https://www.aks.ua/images/categories/5-1675495284.webp' },
    { id: 2, name: 'Sumsung s23', image: 'https://www.aks.ua/images/categories/5-1675495284.webp' },
    { id: 3, name: 'Sumsung s22', image: 'https://www.aks.ua/images/categories/5-1675495284.webp' },
  ];

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const handleLogout = () => {
    setShowLogoutModal(true); // Показати модальне вікно
  };

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleLogoutConfirm = () => {
    setIsLoggedIn(false);
    setShowLogoutModal(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const handleSelectionChange = (count) => setSelectedCount(count);

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        selectedCount={selectedCount}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <ProductList products={products} onSelectionChange={handleSelectionChange} />
     
      {showLoginForm && (
        <LoginForm
          onLogin={handleLoginSubmit}
          onClose={handleLoginFormClose}
        />
      )}
      
      {showLogoutModal && (
        <ConfirmLogoutModal
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}
    </div>
  );
}

export default App;
