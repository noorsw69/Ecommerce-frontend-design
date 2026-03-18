import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [savedItems, setSavedItems] = useState([]);
  const saveForLater = (product) => {
  // 1. Remove from Cart
  setCartItems(prev => prev.filter(item => item.id !== product.id));
  
  // 2. Add to Saved (if not already there)
  setSavedItems(prev => {
    if (prev.find(item => item.id === product.id)) return prev;
    return [...prev, product];
  });
};

const moveToCart = (product) => {
  // 1. Remove from Saved
  setSavedItems(prev => prev.filter(item => item.id !== product.id));
  
  // 2. Add back to Cart
  addToCart(product); 
};
  const [cartItems, setCartItems] = useState(() => {
    // Load existing cart from local storage on startup
    const savedCart = localStorage.getItem('myCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if item already exists to update quantity instead of duplicating
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem('cart'); // If you don't do this, it might reload on refresh!
};

  return (
    <CartContext.Provider value={{ cartItems, savedItems,saveForLater,moveToCart,addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};