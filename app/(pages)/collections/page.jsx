"use client";
import Link from "next/link";

export default function CollectionsPage() {
  const categories = [
    { title: "King Size Beds", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000", link: "/shop?category=beds" },
    { title: "Storage Beds", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000", link: "/shop?category=storage" },
    { title: "Mattresses", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000", link: "/shop?category=mattresses" },
    { title: "Nightstands", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000", link: "/shop?category=nightstands" },
  ];

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
          <h1 className="text-3xl md:text-6xl text-gray-900 font-serif mb-4">Collections</h1>
          <p className="text-gray-800 text-sm md:text-lg">Crafting luxury and comfort for your sanctuary</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-500">Discover our premium range of handcrafted furniture.</p>
        </div>

        {/* Categories Grid (Mobile: 1 col, Tablet/Desktop: 2 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.link}>
              <div 
                className="relative h-72 md:h-96 rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                    {cat.title}
                  </h2>
                  
                  {/* Button: Visible on mobile (opacity-100), Hidden on desktop until hover (md:opacity-0) */}
                  <button className="px-6 py-2 border border-white text-white cursor-pointer rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-500 hover:bg-white hover:text-black">
                    View Collection
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}