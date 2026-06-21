"use client";

import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Luxury King Bed",
      price: 850,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Modern Sofa Set",
      price: 620,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop"
          alt="Cart Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <ShoppingBag size={50} className="mx-auto text-[#C5A059] mb-4" />
          <h1 className="text-3xl md:text-6xl font-serif text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Review your selected furniture items
          </p>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 md:p-16 text-center shadow-lg border">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Your Cart Is Empty
              </h2>
              <p className="text-gray-500">Start shopping to add items to your cart.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
              {/* Products */}
             <div className="lg:col-span-2 space-y-6">
  {cartItems.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col sm:flex-row gap-6 transition-transform hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
    >
      {/* Image Container */}
      <div className="w-full sm:w-40 h-40 sm:h-40 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Container */}
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
            <p className="text-[#C5A059] font-semibold text-lg mt-1">{item.price} BD</p>
          </div>
          
          {/* Desktop Remove Button (optional placement) */}
          <button
            onClick={() => removeItem(item.id)}
            className="hidden sm:flex text-gray-400 hover:text-red-500 transition-colors p-2"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-2 border-t sm:border-t-0 border-gray-100">
          <div className="flex items-center bg-gray-50 border rounded-full p-1">
            <button
              onClick={() => decreaseQty(item.id)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all"
            >
              <Minus size={16} />
            </button>
            <span className="w-10 text-center font-bold text-gray-900">{item.quantity}</span>
            <button
              onClick={() => increaseQty(item.id)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Mobile Remove Button */}
          <button
            onClick={() => removeItem(item.id)}
            className="flex sm:hidden items-center gap-2 text-red-500 text-sm font-medium"
          >
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

              {/* Summary */}
              <div className="lg:mt-0">
                <div className="sticky top-5 bg-white rounded-3xl p-6 md:p-8 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                  <span className="text-[#C5A059] uppercase tracking-[2px] md:tracking-[4px] text-xs md:text-sm">
                    Order Summary
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif mt-2 mb-6">Summary</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-900 text-sm md:text-base">
                      <span>Subtotal</span>
                      <span>{subtotal} BD</span>
                    </div>
                    <div className="flex justify-between text-gray-900 text-sm md:text-base">
                      <span>Shipping</span>
                      <span>{shipping} BD</span>
                    </div>
                    <div className="border-t border-gray-700 pt-4 flex justify-between text-xl md:text-2xl font-bold">
                      <span>Total</span>
                      <span className="text-[#C5A059]">{total} BD</span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <button className="w-full mt-6 md:mt-8 bg-[#C5A059] hover:bg-[#b38f4d] py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition cursor-pointer">
                      Proceed To Checkout
                    </button>
                  </Link>

                  <Link href="/shop">
                    <button className="w-full mt-3 md:mt-4 border border-gray-700 py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-gray-900 hover:text-white transition cursor-pointer">
                      Continue Shopping
                    </button>
                  </Link>

                  {/* Coupon */}
                  <div className="mt-6 md:mt-8">
                    <label className="text-xs md:text-sm text-gray-400">Coupon Code</label>
                    <div className="flex mt-2">
                      <input
                        type="text"
                        placeholder="Enter Coupon"
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-l-xl bg-white text-black outline-none text-sm"
                      />
                      <button className="bg-[#C5A059] px-4 md:px-5 rounded-r-xl cursor-pointer text-sm font-semibold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}