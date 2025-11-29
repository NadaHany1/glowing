"use client";

import React, { createContext, useContext, useState } from "react";
import { ProductType } from "@/app/types/types";

interface CartContextType {
  cart: ProductType[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  checkout: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  const addToCart = (product: ProductType) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      alert("Item already in your cart");
      return;
    }

    setCart([{ ...product, quantity: 1 }, ...cart]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) quantity = 1;

    setCart(
      cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const checkout = () => {
    alert("successful checkout")
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, isCartOpen, toggleCart, addToCart, removeFromCart, updateQuantity, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
