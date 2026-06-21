"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
return (
    
    
    <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-6 py-20">


  <div className="max-w-3xl w-full bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 md:p-16 text-center">

    {/* Success Icon */}
    <div className="w-28 h-28 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-8">
      <svg
        className="w-14 h-14 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
      Order Confirmed
    </span>

    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
      Thank You For Your Order!
    </h1>

    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
      Your order has been successfully placed. Our team will contact
      you shortly to confirm the details and arrange delivery.
    </p>

    {/* Order Info */}
    <div className="grid md:grid-cols-3 gap-5 mt-12">

      <div className="bg-[#F8F5F0] rounded-3xl p-6">
        <p className="text-gray-500 text-sm">
          Order Number
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-2">
          #SHF-2026
        </h3>
      </div>

      <div className="bg-[#F8F5F0] rounded-3xl p-6">
        <p className="text-gray-500 text-sm">
          Payment Method
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-2">
          Cash On Delivery
        </h3>
      </div>

      <div className="bg-[#F8F5F0] rounded-3xl p-6">
        <p className="text-gray-500 text-sm">
          Estimated Delivery
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-2">
          3 - 5 Days
        </h3>
      </div>

    </div>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">

      <Link
        href="/shop"
        className="bg-[#C5A059] hover:bg-[#b38f4d] text-white px-8 py-4 rounded-2xl font-semibold transition"
      >
        Continue Shopping
      </Link>

      <Link
        href="/"
        className="border border-gray-300 hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold transition"
      >
        Back To Home
      </Link>

    </div>

  </div>

</div>

);
}
