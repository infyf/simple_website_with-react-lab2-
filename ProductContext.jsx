import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [comments, setComments] = useState({
    phones: {},
    laptops: {},
    accessories: {},
  });

  const phoneProducts = [
    { id: 1, name: 'Samsung s24',  price: 20000 },
    { id: 2, name: 'Samsung s23',  price: 15000 },
    { id: 3, name: 'Samsung s22',  price: 10000 },
  ];

  const laptopProducts = [
    { id: 1, name: 'MacBook Air', image: 'https://example.com/macbook.jpg', price: 40000 },
    { id: 2, name: 'Dell XPS 13', image: 'https://example.com/dell.jpg', price: 35000 },
  ];

  const accessoriesProducts = [
    { id: 1, name: 'Мишка Logitech', image: 'https://example.com/mouse.jpg', price: 500 },
    { id: 2, name: 'Клавіатура Razer', image: 'https://example.com/keyboard.jpg', price: 1000 },
  ];

  const products = {
    phones: phoneProducts,
    laptops: laptopProducts,
    accessories: accessoriesProducts,
  };

  const handleProductSelect = (productId) => {
    const isSelected = selectedProducts.includes(productId);
    const updatedSelectedProducts = isSelected
      ? selectedProducts.filter(id => id !== productId)
      : [...selectedProducts, productId];

    setSelectedProducts(updatedSelectedProducts);
    setTotalPrice(calculateTotalPrice(updatedSelectedProducts, products));
  };

  const calculateTotalPrice = (selectedIds, products) => {
    return selectedIds.reduce((total, id) => {
      const product = Object.values(products).flat().find(p => p.id === id);
      return total + (product ? product.price : 0);
    }, 0);
  };

  const handleCommentSubmit = (category, productId, comment) => {
    setComments(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [productId]: [...(prev[category][productId] || []), comment],
      },
    }));
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, totalPrice, comments, handleProductSelect, handleCommentSubmit, products }}>
      {children}
    </ProductContext.Provider>
  );
};
