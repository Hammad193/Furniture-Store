"use client";

import { Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../context/CartContext"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">

  {cart.length === 0 ? (
    <div className="text-center py-24 bg-white rounded-3xl border">
      <h2 className="text-2xl font-semibold text-gray-900">
        Your cart is empty
      </h2>
      <Link href="/shop" className="text-[#C5A059] mt-3 inline-block font-medium">
        Continue Shopping →
      </Link>
    </div>
  ) : (

    <div className="grid lg:grid-cols-3 gap-12">

      {/* LEFT SECTION */}
      <div className="lg:col-span-2 space-y-8">

        {/* HEADER */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Cart Items
          </h2>
          <p className="text-sm text-gray-600">
            Manage your selected products below
          </p>
        </div>

        {/* COLUMN HEADERS */}
        <div className="hidden md:grid grid-cols-4 text-sm font-medium text-gray-700 border-b pb-3">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span className="text-right">Total</span>
        </div>

        {/* ITEMS */}
        <div className="space-y-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-3xl p-5 grid md:grid-cols-4 gap-6 items-center"
            >

              {/* PRODUCT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-gray-900 font-medium">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    Product selected
                  </p>
                </div>
              </div>

              {/* PRICE */}
              <div>
                <p className="text-gray-900 font-semibold">
                  {item.price}
                </p>
                <p className="text-xs text-gray-600">
                  unit price
                </p>
              </div>

              {/* QUANTITY */}
              <div>
                <div className="flex items-center bg-gray-100 rounded-full w-fit overflow-hidden">

                  <button
                    onClick={() => {
                      updateQuantity(item.id, Math.max(1, item.quantity - 1));
                      toast.info("Quantity decreased");
                    }}
                    className="w-10 h-10 text-gray-900"
                  >
                    −
                  </button>

                  <span className="w-10 text-center text-gray-900 font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => {
                      updateQuantity(item.id, item.quantity + 1);
                      toast.info("Quantity increased");
                    }}
                    className="w-10 h-10 text-gray-900"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* TOTAL + DELETE */}
              <div className="flex justify-between md:justify-end items-center">

                <div className="text-right">
                  <p className="text-gray-900 font-semibold">
                    {(parsePrice(item.price) * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-600">
                    total
                  </p>
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.error("Item deleted");
                  }}
                  className="ml-4 text-gray-600 hover:text-red-500"
                >
                  🗑
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* COUPON SECTION */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Coupon Code
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Apply discount if you have one
          </p>

          <div className="bg-white border rounded-3xl p-5 flex flex-col md:flex-row gap-4">

            <input
              placeholder="Enter coupon code"
              className="flex-1 border rounded-2xl px-4 py-3 text-gray-900 outline-none"
            />

            <button className="px-6 py-3 bg-black text-white rounded-2xl hover:bg-[#C5A059]">
              Apply
            </button>

            <Link
              href="/shop"
              className="px-6 py-3 border rounded-2xl text-center text-gray-900"
            >
              Update
            </Link>

          </div>
        </div>

      </div>

      {/* RIGHT SUMMARY */}
      <div className="sticky top-10 space-y-4">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Order Summary
          </h2>
          <p className="text-sm text-gray-600">
            Final breakdown of your cart
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-8 space-y-4">

          <div className="flex justify-between text-gray-900">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-900">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-lg font-semibold">
            <span className="text-gray-900">Total</span>
            <span className="text-[#C5A059]">
              {subtotal.toFixed(2)}
            </span>
          </div>

          <Link href="/checkout">
            <button className="w-full mt-4 py-3 rounded-2xl bg-[#C5A059]  border-gray-900 text-white hover:text-white transition cursor-pointer">
              Proceed to Checkout
            </button>
          </Link>

<Link
  href="/shop"
  className="block text-center text-sm text-gray-700 hover:text-black py-4"
>
  Continue Shopping →
</Link>

        </div>

      </div>

    </div>

  )}

</section>
  </div>
  );
}