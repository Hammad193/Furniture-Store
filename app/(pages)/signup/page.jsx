"use client";

import Link from "next/link";

export default function SignupPage() {
return (
  <>  

   {/* 1. Hero Section */}
<div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gray-100">
  {/* New Background Image: Premium Furniture Showroom */}
  <img 
    src="https://kukahomeusa.com/wp-content/uploads/2023/10/KF.B1051-4.jpg"
    alt="Luxury Furniture Collection"
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  />
  
  {/* Hero Content - Text color dark rakha hai taake image ke upar saaf dikhe */}
  <div className="relative z-10 text-center px-4">
    <h1 className="text-5xl md:text-6xl text-black font-serif mb-4">
      Sign Up For Expoler
    </h1>
    <p className="text-gray-800 text-lg font-medium">
      Crafting luxury and comfort for your sanctuary
    </p>
  </div>
</div>


<div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-6 py-20">

  <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

    <div className="grid lg:grid-cols-2">

      {/* Left Side */}
      <div
        className="hidden lg:flex relative items-center justify-center p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white">
          <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
            Supreme Home Furniture
          </span>

          <h2 className="text-5xl font-serif mt-4 mb-6">
            Create Your Account
          </h2>

          <p className="text-gray-200 leading-relaxed">
            Join our community and discover premium furniture,
            exclusive offers, and luxury home inspiration.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="p-8 md:p-14">

        <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
          Sign Up
        </span>

        <h1 className="text-4xl font-serif text-gray-900 mt-4 mb-2">
          Welcome
        </h1>

        <p className="text-gray-500 mb-10">
          Create your account to continue shopping.
        </p>

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
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"
          />

          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 accent-[#C5A059]"
            />
            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-[#C5A059] hover:bg-[#b38f4d] text-white py-4 rounded-2xl font-semibold transition-all duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">

          <button className="text-gray-900 border border-gray-200 py-4 rounded-2xl hover:bg-[#C5A059] hover:text-white transition font-medium cursor-pointer">
            Google
          </button>

          <button className="text-gray-900 border border-gray-200 py-4 rounded-2xl hover:bg-[#C5A059] hover:text-white transition font-medium cursor-pointer">
            Facebook
          </button>

        </div>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#C5A059] font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>

    </div>

  </div>

</div>
</>
);
}
