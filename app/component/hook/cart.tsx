// hooks/useCart.ts

import { useState, useEffect } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number; // Add quantity property
};

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart: Product[]) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const toggleCartItem = (product: Product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.filter(item => item.id !== product.id);
      updateCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      updateCart(updatedCart);
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0);

    updateCart(updatedCart);
  };

  return { cart, toggleCartItem, updateQuantity };
};
