import React, { useState } from 'react';
import { Modal, Button, Input, Spin } from 'antd';
import './LoginForm.css';

const LoginForm = ({ onLogin, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      onLogin();
      setLoading(false);
      onClose();
    }, 2000); // Імітуємо затримку для анімації завантаження
  };

  return (
    <Modal
      visible={true}
      title="Авторизація"
      onCancel={onClose}
      footer={null}
    >
      <Input
        placeholder="Логін"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Input.Password
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <Button 
          type="primary" 
          onClick={handleSubmit} 
          disabled={loading}
          style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
        >
          {loading ? <Spin /> : 'Увійти'}
        </Button>
        <Button 
          type="default" 
          onClick={onClose} 
          style={{ marginLeft: '10px', backgroundColor: '#ff7a45', borderColor: '#ff7a45', color: '#fff' }}
        >
          Скасувати
        </Button>
      </div>
    </Modal>
  );
};

export default LoginForm;
