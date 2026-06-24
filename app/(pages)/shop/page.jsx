"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import productsData from "../../data/furniture-website-data.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShopPage() {
  const { addToCart } = useCart();

  const [pref, setPref] = useState({
    budget: "All",
    style: "All",
  });

  const filteredProducts = productsData.filter((p) => {
    const priceValue =
      parseFloat(p.price.toString().replace(/[^0-9.]/g, "")) || 0;

    const budgetMatch =
      pref.budget === "All"
        ? true
        : pref.budget === "Low"
        ? priceValue < 500
        : pref.budget === "High"
        ? priceValue >= 500
        : true;

    const styleMatch =
      pref.style === "All" || p.category === pref.style;

    return budgetMatch && styleMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] mb-16 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Bedroom"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-6xl text-gray-900 font-serif mb-4">
            Shop Our Collections
          </h1>

          <p className="text-gray-800 text-sm md:text-lg">
            Find the perfect piece for your home sanctuary
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Modern Filter Section */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Discover Your Perfect Furniture
                </h2>

                <p className="text-gray-500 mt-2">
                  Premium furniture curated for modern living
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#C5A059] to-[#D6B56C] text-white px-6 py-4 rounded-2xl shadow-lg">
                <span className="text-2xl font-bold">
                  {filteredProducts.length}
                </span>
                <span className="ml-2 text-sm">Products Found</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Category */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Category
                </label>

                <select
                  onChange={(e) =>
                    setPref({
                      ...pref,
                      style: e.target.value,
                    })
                  }
                  className="w-full p-4 rounded-2xl text-gray-900 border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-[#C5A059]"
                >
                  <option value="All">All Collections</option>

                  {[...new Set(productsData.map((p) => p.category))].map(
                    (cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Budget Range
                </label>

                <select
                  onChange={(e) =>
                    setPref({
                      ...pref,
                      budget: e.target.value,
                    })
                  }
                  className="w-full p-4 rounded-2xl text-gray-900 border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-[#C5A059]"
                >
                  <option value="All">All Prices</option>
                  <option value="Low">Under $500</option>
                  <option value="High">$500 & Above</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:border-[#C5A059]/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-500"
              >
                {/* Image */}
                <Link href={`/product/${p.id}`}>
  <div className="relative overflow-hidden cursor-pointer">
    <img
      src={p.image}
      alt={p.name}
      className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute top-5 left-5">
      <span className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold">
        NEW ARRIVAL
      </span>
    </div>

    <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition duration-500" />
  </div>
</Link>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-[3px] text-[#C5A059] font-bold">
                      {p.category}
                    </span>

                    <Link href={`/product/${p.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 hover:text-[#C5A059] transition">
                        {p.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-gray-900">
                      {p.price}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        addToCart(p);
                        toast.success(`${p.name} added to cart!`);
                      }}
                      className="flex-1 bg-transparent border border-gray-300 text-gray-900 py-3 rounded-2xl font-medium hover:bg-[#C5A059] hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Add to Cart
                    </button>

                    <Link
                      href={`/product/${p.id}`}
                      className="flex-1"
                    >
                      <button className="w-full py-3 rounded-2xl text-gray-900 border border-gray-300 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300 cursor-pointer">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-3xl font-bold text-gray-400">
              No products match your criteria
            </h3>

            <button
              onClick={() =>
                setPref({
                  budget: "All",
                  style: "All",
                })
              }
              className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-2xl hover:bg-[#C5A059] transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}