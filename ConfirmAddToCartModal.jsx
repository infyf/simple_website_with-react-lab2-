import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './ConfirmAddToCartModal.css';

const ConfirmButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgreen;
  }
`;

const CancelButton = styled.button`
  background-color: gray;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgray;
  }
`;

const ConfirmAddToCartModal = ({ show, onCancel }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onCancel();
    navigate('/cart');
  };

  return (
    <CSSTransition in={show} timeout={400} classNames="modal" unmountOnExit>
      <div className="confirm-add-to-cart-overlay">
        <div className="confirm-add-to-cart-modal">
          <h2>Товар додано до кошика!</h2>
          <div className="confirm-add-to-cart-buttons">
            <ConfirmButton onClick={handleConfirm}>Перейти до кошика</ConfirmButton>
            <CancelButton onClick={onCancel}>Продовжити покупки</CancelButton>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ConfirmAddToCartModal;
