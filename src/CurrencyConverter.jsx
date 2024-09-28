import React from 'react';

const CurrencyConverter = ({ priceInUAH }) => {
  const exchangeRate = 40; // Курс на момент створення лабораторної
  const priceInUSD = (priceInUAH / exchangeRate).toFixed(2);

  return <p>Ціна в доларах: ${priceInUSD}</p>;
};

export default CurrencyConverter;