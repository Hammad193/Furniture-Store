"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedBuyNow = localStorage.getItem('buyNowItem');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedBuyNow) setBuyNowItem(JSON.parse(savedBuyNow));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cart', JSON.stringify(cart));
      if (buyNowItem) {
        localStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
      } else {
        localStorage.removeItem('buyNowItem');
      }
    }
  }, [cart, buyNowItem, isLoaded]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name 
            ? { ...item, quantity: (item.quantity || 1) + quantity } 
            : item
        );
      }
      return [...prev, { ...product, id: product.id || Date.now(), quantity: quantity }];
    });
  };

  const setDirectPurchase = (product, quantity) => {
    setBuyNowItem({ ...product, quantity });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setBuyNowItem(null);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      buyNowItem, 
      setDirectPurchase 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);