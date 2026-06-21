"use client";

import Link from "next/link";

export default function CheckoutPage() {
return ( <div className="min-h-screen bg-[#F8F5F0]">


  <section className="relative py-40 overflow-hidden">
  {/* Background Image */}
  <img 
    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop" 
    alt="Checkout Background" 
    className="absolute inset-0 w-full h-full object-cover" 
  />
  
  {/* Dark Overlay for better text readability */}
  <div className="absolute inset-0 bg-[#111111]/80" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-6xl font-serif text-white">
      Checkout
    </h1>
    <p className="text-white mt-4 text-lg">
      Complete your order securely
    </p>
  </div>
</section>

  {/* Checkout Content */}
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

      {/* Billing Form */}
      <div className="lg:col-span-2 bg-white rounded-[30px] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">

        <h2 className="text-3xl font-serif text-gray-900 mb-8">
          Billing Details
        </h2>

        <form className="space-y-5">

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
          />

          <input
            type="text"
            placeholder="Street Address"
            className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
          />

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="City"
              className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
            />

            <input
              type="text"
              placeholder="Postal Code"
              className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Order Notes (Optional)"
            className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none resize-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
          ></textarea>

        </form>
      </div>

      {/* Order Summary */}
      <div>

        <div className="sticky top-10 bg-[#111111] text-white rounded-[30px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

          <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
            Order Summary
          </span>

          <h2 className="text-3xl font-serif mt-4 mb-8">
            Your Order
          </h2>

          {/* Product */}
          <div className="space-y-6">

            <div className="flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500"
                alt=""
                className="w-20 h-20 rounded-2xl object-cover"
              />

              <div>
                <h4 className="font-medium">
                  Luxury King Bed
                </h4>

                <p className="text-gray-400">
                  Qty: 1
                </p>
              </div>

              <span className="ml-auto text-[#C5A059]">
                $850
              </span>
            </div>

            <div className="border-t border-gray-700 pt-5 space-y-4">

              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>$850</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Shipping</span>
                <span>$50</span>
              </div>

              <div className="flex justify-between text-2xl font-bold border-t border-gray-700 pt-5">
                <span>Total</span>
                <span className="text-[#C5A059]">
                  $900
                </span>
              </div>

            </div>

          </div>

          {/* Payment Methods */}
          <div className="mt-10">

            <h3 className="font-semibold mb-4">
              Payment Method
            </h3>

            <div className="space-y-3">

              <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#C5A059]">
                <input type="radio" name="payment" />
                <span>Cash On Delivery</span>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#C5A059]">
                <input type="radio" name="payment" />
                <span>Credit / Debit Card</span>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#C5A059]">
                <input type="radio" name="payment" />
                <span>Bank Transfer</span>
              </label>

            </div>

          </div>

          <Link href="/placeorder"><button className="w-full mt-8 bg-[#C5A059] hover:bg-[#b38f4d] py-4 rounded-2xl font-semibold transition cursor-pointer">
            Place Order
          </button></Link> 

        </div>

      </div>

    </div>
  </section>

</div>


);
}
