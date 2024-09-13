import React from 'react';

const LoginButton = ({ onLogin }) => {
  return <button onClick={onLogin}>Вхід</button>;
};

export default LoginButton;