import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Switch, ConfigProvider } from 'antd';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';
import ConfirmAddToCartModal from './components/ConfirmAddToCartModal';
import Cart from './components/Cart';
import { ProductProvider, useProduct } from './context/ProductContext';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const newItems = { ...prevItems };
      if (newItems[product.id]) {
        newItems[product.id].quantity += 1;
      } else {
        newItems[product.id] = { ...product, quantity: 1 };
      }
      return newItems;
    });

    setTotalPrice(prevTotal => prevTotal + product.price);
    setShowAddToCartModal(true);
  };

  const handleConfirmAddToCart = () => {
    setShowAddToCartModal(false);
  };

  const toggleTheme = (checked) => {
    setIsDarkTheme(checked);
    document.body.className = checked ? 'dark-theme' : 'light-theme'; // Зміна класу body завдання 4
  };

  // Встановлення класу body при завантаженні
  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  return (
    <ConfigProvider theme={{ token: { colorBgBase: isDarkTheme ? '#1f1f1f' : '#fff', colorTextBase: isDarkTheme ? '#ffffff' : '#000000' } }}>
      <ProductProvider>
        <Router>
          <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
            <Header
              isLoggedIn={isLoggedIn}
              onLogin={() => setShowLoginForm(true)}
              onLogout={() => setIsLoggedIn(false)}
            />

            <div className="theme-switcher">
              <Switch
                checkedChildren="Black"
                unCheckedChildren="Light"
                onChange={toggleTheme}
                checked={isDarkTheme}
              />
            </div>

            <nav>
              <ul className="nav">
                <li className="nav-item"><Link className="nav-link" to="/phones">Телефони</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/laptops">Ноутбуки</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/accessories">Аксесуари</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <FaShoppingCart /> Кошик {Object.keys(cartItems).length > 0 && `(${Object.keys(cartItems).length})`}
                  </Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/phones" element={<ProductCategory category="phones" addToCart={addToCart} />} />
              <Route path="/laptops" element={<ProductCategory category="laptops" addToCart={addToCart} />} />
              <Route path="/accessories" element={<ProductCategory category="accessories" addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart items={cartItems} totalPrice={totalPrice} />} />
            </Routes>

            {showLoginForm && (
              <LoginForm onLogin={handleLogin} onClose={() => setShowLoginForm(false)} />
            )}

            {showAddToCartModal && (
              <ConfirmAddToCartModal
                show={showAddToCartModal}
                onConfirm={handleConfirmAddToCart}
                onCancel={() => setShowAddToCartModal(false)}
              />
            )}
          </div>
        </Router>
      </ProductProvider>
    </ConfigProvider>
  );
}

function ProductCategory({ category, addToCart }) {
  const { products } = useProduct();
  return (
    <ProductList products={products[category]} category={category} onAddToCart={addToCart} />
  );
}

export default App;
