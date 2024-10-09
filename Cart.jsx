import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Cart.css'; 

const Cart = ({ items, totalPrice }) => {
  return (
    <CSSTransition
      in={true} // Анімація буде застосована при відображенні кошика
      timeout={1000} 
      classNames="cart"
      unmountOnExit
    >
      <div className="cart">
        <h2>Кошик</h2>
        <TransitionGroup>
          {Object.values(items).map(item => (
            <CSSTransition
              key={item.id}
              timeout={300}
              classNames="cart-item"
            >
              <div className="cart-item">
                {item.name} - {item.price} грн x {item.quantity}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div className="total-price">Загальна сума: {totalPrice} грн</div>
      </div>
    </CSSTransition>
  );
};

export default Cart;
