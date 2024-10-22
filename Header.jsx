import React from 'react';
import { Button } from 'antd';
import './Header.css';

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <header className="header">
      <h1>Мій Сайт</h1>
      <div className="header-right">
        {isLoggedIn ? (
          <Button type="primary" danger onClick={onLogout} style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}>
            Вихід
          </Button>
        ) : (
          <>
            <Button
              type="primary"
              onClick={onLogin}
              style={{ marginRight: '10px', backgroundColor: '#40a9ff', borderColor: '#40a9ff' }}
            >
              Увійти
            </Button>
            <Button
              type="default"
              onClick={() => alert('Реєстрація')}
              style={{ marginRight: '10px', backgroundColor: '#73d13d', borderColor: '#73d13d', color: '#fff' }}
            >
              Реєстрація
            </Button>
          </>
        )}
        <Button type="dashed" style={{ marginLeft: '10px', color: '#1890ff' }}>
          Додаткова кнопка
        </Button>
      </div>
    </header>
  );
};

export default Header;
