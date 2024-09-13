import React, { useState } from 'react';
import './LoginForm.css'; 

const LoginForm = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна додати перевірку даних користувача
    onLogin();
  };

  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <h2>Вхід</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Логін:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Увійти</button>
        </form>
        <button className="close-button" onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default LoginForm;