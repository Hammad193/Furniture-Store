"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { name: "King Size Beds", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600", link: "/category/king-beds" },
  { name: "Queen Size Beds", image: "https://m.media-amazon.com/images/I/817ylRSLlEL._AC_UF894,1000_QL80_.jpg", link: "/category/queen-beds" },
  { name: "Single Beds", image: "https://renome.pk/wp-content/uploads/2025/01/Single-Bed-11.jpg", link: "/category/single-beds" },
  { name: "Bunk Beds", image: "https://renome.pk/wp-content/uploads/2025/01/bunk-beds-for-kids-5.jpg", link: "/category/bunk-beds" },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Shop By Category</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md bg-white">
              <div className="h-80 w-full overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                <h3 className="text-white text-2xl font-bold mb-6 shadow-text">{cat.name}</h3>
                
                {/* View Collection Button: Mobile par hamesha dikhega */}
                <div className="opacity-100 transition-opacity duration-300">
                  <Link href="/collections">
                    <button className="px-6 py-2 border-2 border-white text-white font-bold rounded-full cursor-pointer hover:bg-white hover:text-black transition-all">
                      View Collection
                    </button>
                  </Link>
                </div>

                {/* Quick View Button: Sirf Desktop (lg) par hover par dikhega */}
                <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                  <Link href="/404"><button className="px-6 py-2 bg-[#C5A059] text-white font-bold rounded-full cursor-pointer hover:bg-[#a88647] transition-all">
                    Quick View
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .shadow-text { text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
      `}</style>
    </section>
  );
}