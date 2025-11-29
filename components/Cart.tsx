"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import {Plus, Minus, X} from "lucide-react"

const Cart = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, checkout } = useCart();

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0).toFixed(2);

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 w-80 min-w-1/2 bg-background p-6 shadow-2xl 
      transition-transform overflow-y-auto z-100 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <button onClick={toggleCart} className="absolute top-4 right-4 hover:text-red-600"><X /></button>

      <h2 className="text-3xl text-center mb-6">YOUR CART</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          {cart.map((item) => (
            <div
              key={item.id}
              className="w-full grid grid-cols-[35%_50%_15%] gap-3 items-center bg-white p-3 rounded"
            >
              <div className="relative w-full h-24">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>

              <div>
                <h3 className="font-semibold text-black">{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>

                {/* Quantity Control */}
                <div className="flex items-center justify-start gap-2 mt-2 w-full">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                    className="w-6 h-6 text-center text-lg bg-background rounded hover:bg-primary hover:text-white"
                  >
                    <Minus />
                  </button>

                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center border rounded bg-background"
                  />

                  <button
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    className="w-6 h-6 text-center text-lg bg-background rounded hover:bg-primary hover:text-white"
                  >
                    <Plus />
                  </button>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)} className="hover:text-red-600"><X /></button>
            </div>
          ))}

          <div className="w-full flex justify-between mt-6 border-t pt-4">
            <span className="font-semibold text-black">TOTAL:</span>
            <span>${getTotal()}</span>
          </div>
            <button onClick={checkout} className="w-full md:w-1/2 mx-auto mt-6 bg-primary text-white text-xl font-bold py-3 rounded hover:bg-black transition">
                Buy Now
            </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
