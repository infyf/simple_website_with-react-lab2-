import React from 'react';
import './Header.css'; 

const Header = ({ isLoggedIn, selectedCount, onLogin, onLogout }) => {
  return (
    <header className="header">
      <h1>Мій Сайт</h1>
      <div className="header-right">
        <span>Кількість вибраних товарів: {selectedCount}</span>
        {isLoggedIn ? (
          <button className="logout-button" onClick={onLogout}>Вихід</button>
        ) : (
          <button className="login-button" onClick={onLogin}>Вхід</button>
        )}
      </div>
    </header>
  );
};

export default Header;