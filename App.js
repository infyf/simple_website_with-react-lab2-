import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';
import ConfirmLogoutModal from './components/ConfirmLogoutModal';
import { ProductProvider, useProduct } from './context/ProductContext';
import useNavigationHistory from './hooks/useNavigationHistory'; // імпорт хуку
import DebugWindow from './components/DebugWindow'; // імпорт DebugWindow

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogoutModal(false);
    alert('Ви вийшли з системи');
  };

  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Header
            isLoggedIn={isLoggedIn}
            selectedCount={0} // Це буде оброблятися через контекст
            onLogin={() => setShowLoginForm(true)}
            onLogout={() => setShowLogoutModal(true)}
          />

          <nav>
            <ul>
              <li><Link to="/phones">Телефони</Link></li>
              <li><Link to="/laptops">Ноутбуки</Link></li>
              <li><Link to="/accessories">Аксесуари</Link></li>
            </ul>
          </nav>

          {/* Використовуємо useNavigationHistory всередині Router */}
          <NavigationWithHistory />

          {showLoginForm && (
            <LoginForm onLogin={handleLogin} onClose={() => setShowLoginForm(false)} />
          )}

          {showLogoutModal && (
            <ConfirmLogoutModal onConfirm={handleLogout} onCancel={() => setShowLogoutModal(false)} />
          )}
        </div>
      </Router>
    </ProductProvider>
  );
}

function NavigationWithHistory() {
  const history = useNavigationHistory(); // Використання хуку
  return (
    <>
      <Routes>
        <Route path="/phones" element={<ProductCategory category="phones" />} />
        <Route path="/laptops" element={<ProductCategory category="laptops" />} />
        <Route path="/accessories" element={<ProductCategory category="accessories" />} />
      </Routes>

      <TotalPriceDisplay /> 
      <DebugWindow history={history} /> 
    </>
  );
}

function TotalPriceDisplay() {
  const { totalPrice } = useProduct(); // Отримуємо загальну суму з контексту
  return <h2>Загальна сума: {totalPrice} грн</h2>;
}

function ProductCategory({ category }) {
  const { products } = useProduct(); // Використовуйте useProduct тут
  return <ProductList products={products[category]} category={category} />; // Передайте category
}

export default App;
