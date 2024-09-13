import React from 'react';

const LogoutButton = ({ onLogout }) => {
  return <button onClick={onLogout}>Вихід</button>;
};

export default LogoutButton;