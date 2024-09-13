import React from 'react';
import './ConfirmLogoutModal.css'; // Переконайся, що шлях правильний

const ConfirmLogoutModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirm-logout-overlay">
      <div className="confirm-logout-modal">
        <h2>Ви впевнені, що хочете вийти?</h2>
        <div className="confirm-logout-buttons">
          <button className="confirm-button" onClick={onConfirm}>Так</button>
          <button className="cancel-button" onClick={onCancel}>Ні</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutModal;