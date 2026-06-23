"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import productsData from "../../data/furniture-website-data.json";

export default function ShopPage() {
  const { addToCart } = useCart();
  
  // State for Filters
  const [pref, setPref] = useState({ budget: "All", style: "All" });

  // Filtering Logic
  const filteredProducts = productsData.filter((p) => {
    // Price ko number mein convert karna (e.g., "$1,200" -> 1200)
    const priceValue = parseFloat(p.price.toString().replace(/[^0-9.]/g, '')) || 0;
    
    const budgetMatch = 
      pref.budget === "All" ? true : 
      pref.budget === "Low" ? priceValue < 500 : 
      pref.budget === "High" ? priceValue >= 500 : true;

    const styleMatch = pref.style === "All" || p.category === pref.style;
    
    return budgetMatch && styleMatch;
  });

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. Hero Section */}
      <div className="relative h-[300px] md:h-[400px] mb-10 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Bedroom"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-6xl text-gray-900 font-serif mb-4">Shop Our Collections</h1>
          <p className="text-gray-800 text-sm md:text-lg">Find the perfect piece for your home sanctuary</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Interactive Filter Bar */}
        <div className="bg-gray-200 text-gray-900 p-8 rounded-3xl mb-12 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-center">What are you looking for today?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Style Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2">Select Style/Category:</label>
              <select 
                onChange={(e) => setPref({...pref, style: e.target.value})} 
                className="w-full p-4 border rounded-xl bg-white outline-none focus:ring-2 focus:ring-gray-900 cursor-pointer"
              >
                <option value="All">All Styles</option>
                {[...new Set(productsData.map(p => p.category))].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Budget Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2">Select Your Budget:</label>
              <select 
                onChange={(e) => setPref({...pref, budget: e.target.value})} 
                className="w-full p-4 border rounded-xl bg-white outline-none focus:ring-2 focus:ring-gray-900 cursor-pointer"
              >
                <option value="All">Any Budget</option>
                <option value="Low">Under 500</option>
                <option value="High">500 & Above</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-3xl border border-gray-100 hover:shadow-2xl transition duration-500 group">
                <div className="relative h-72 bg-gray-100 rounded-2xl mb-6 overflow-hidden">
                  <Link href={`/product/${p.id}`}><img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></Link>
                  <span className="absolute top-4 left-4 bg-gray-900 px-3 py-1 text-xs font-bold rounded-full text-white">NEW</span>
                </div>
                
                <div className="px-2">
                  <Link href={`/product/${p.id}`}><h3 className="font-bold text-lg text-gray-900 mb-1">{p.name}</h3></Link>
                  <p className="text-gray-500 text-sm mb-4">{p.category}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-[#C5A059]">{p.price}</span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(p)} 
                      className="flex-1 bg-gray-900 text-white py-2 rounded-xl text-sm hover:bg-[#C5A059] transition cursor-pointer"
                    >
                      Add to Cart
                    </button>
                    <Link href={`/product/${p.id}`} className="flex-1">
                      <button className="w-full bg-gray-900 text-white py-2 cursor-pointer rounded-xl text-sm hover:bg-[#C5A059] hover:text-white transition">
                        View Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">No products match your criteria.</h3>
            <button onClick={() => setPref({budget: "All", style: "All"})} className="mt-4 underline">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}