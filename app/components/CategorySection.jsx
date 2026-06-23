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
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm">Discover</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3 mb-6">Shop By Category</h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={index} 
              className="group relative h-[450px] rounded-[30px] overflow-hidden shadow-lg"
            >
              {/* Image with Dark Gradient Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content Positioned at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
                <h3 className="text-white text-2xl font-serif mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {cat.name}
                </h3>
                
                {/* Buttons Container */}
                <div className="flex flex-col gap-3 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/category" className="w-full py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-sm uppercase tracking-wider">
                    View Category
                  </Link>
                  <Link href="/404" className="w-full py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wider">
                    Quick View
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}