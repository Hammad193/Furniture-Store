"use client";

import { Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../context/CartContext"; 
import { toast } from 'react-hot-toast';

// Professional Custom Toast Function
const showCustomToast = (title, message, isSuccess = true) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-sm w-full bg-white shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden border border-gray-100`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-xl ${isSuccess ? 'bg-green-100' : 'bg-red-100'}`}>
              {isSuccess ? '✅' : '⚠️'}
            </div>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-bold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-100">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-bold text-[#C5A059] hover:bg-gray-50 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  ), {
    duration: 3000,
  });
};

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    return parseFloat(price.toString().replace(/[^0-9.]/g, '')) || 0;
  };

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * (item.quantity || 1), 0);
  const total = subtotal; // Assuming Free delivery based on your image

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (Aapka purana wala) */}
      <section className="relative py-20 md:py-40 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop" alt="Cart" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <ShoppingBag size={50} className="mx-auto text-[#C5A059] mb-4" />
          <h1 className="text-3xl md:text-6xl font-serif text-gray-900">Shopping Cart</h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-10 md:py-20 px-4 max-w-7xl mx-auto">
        {cart.length === 0 ? (
          <div className="text-center py-20 border-t border-b">
            <h2 className="text-3xl font-semibold text-gray-900">No Product in Cart</h2>
            <Link href="/shop" className="text-[#C5A059] font-bold underline mt-4 block">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Table Area */}
            <div className="lg:col-span-2">
              <div className="hidden md:grid grid-cols-4 pb-4 border-b text-gray-900 text-sm font-medium">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>
              
              <div className="space-y-6 mt-6">
                {cart.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b pb-6">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    </div>
                    <p className="text-[#C5A059]">{item.price}</p>
                    <div className="flex items-center border w-24 rounded text-gray-900">
                      <button onClick={() => { updateQuantity(item.id, Math.max(1, item.quantity - 1)); showCustomToast("Update", "Quantity decreased"); }} className="px-3">-</button>
                      <span className="px-3 border-x">{item.quantity}</span>
                      <button onClick={() => { updateQuantity(item.id, item.quantity + 1); showCustomToast("Update", "Quantity increased"); }} className="px-3">+</button>
                    </div>
                    <div className="flex justify-between items-center text-gray-900">
                      <span>{(parsePrice(item.price) * item.quantity).toFixed(2)}</span>
                      <button onClick={() => { removeFromCart(item.id); showCustomToast("Deleted", "Item removed from cart.", false); }} className="text-gray-900 hover:text-red-500"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="mt-8 flex gap-2">
                <input placeholder="coupon code" className="border p-3 text-gray-900 w-full md:w-64 rounded" />
                <button className="border px-6 py-3 text-gray-900 hover:bg-gray-900 cursor-pointer hover:text-white">→</button>
                <Link href="/shop"><button className="border px-6 py-3 ml-auto text-sm text-gray-900 hover:bg-gray-900 cursor-pointer hover:text-white">UPDATE CART</button></Link>
              </div>
            </div>

            {/* Cart Total Box */}
            <div className="bg-gray-50 p-8 rounded-lg border h-fit">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Cart Total</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b text-gray-900"><span>Subtotal</span><span>BD. {subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between py-2 border-b text-gray-900"><span>Discount</span><span>No Discount</span></div>
                <div className="flex justify-between py-2 border-b text-gray-900"><span>Delivery</span><span className="font-bold">Free</span></div>
                <div className="flex justify-between py-4 text-lg font-bold text-gray-900"><span>Total :</span><span className="text-[#C5A059]">BD. {total.toFixed(2)}</span></div>
                <Link href="/checkout">
                  <button className="w-full mt-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] cursor-pointer py-3 font-bold hover:bg-[#C5A059] hover:text-white transition">PROCEED TO CHECKOUT</button>
                </Link>
                <Link href="/shop" className="block text-center text-[#C5A059] font-bold mt-4 bg-transparent border-2 border-[#C5A059] py-3 hover:bg-[#C5A059] hover:text-white">CONTINUE SHOPPING</Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}