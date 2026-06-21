"use client";
import { ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BestSellers() {
  const products = [
    { id: 201, name: "Royal Velvet Bed", price: "BD 180", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500" },
    { id: 202, name: "Minimalist Pine Bed", price: "BD 95", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500" },
    { id: 203, name: "Modern Storage Bed", price: "BD 140", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=500" },
    { id: 204, name: "Classic Wood Frame", price: "BD 115", image: "https://images.unsplash.com/photo-1595428774223-ef52624120f0?q=80&w=500" },
    { id: 205, name: "Urban Loft Bed", price: "BD 160", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-2">Best Sellers</h2>
        <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...products, ...products].map((product, index) => (
            <div 
              key={index} 
              className="min-w-[300px] bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg text-gray-600 cursor-pointer hover:text-blue-500">
                  <Eye size={18} />
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                <p className="text-[#C5A059] font-bold text-xl my-2">{product.price}</p>
                <button className="w-full py-3 mt-2 bg-gray-800 text-white rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}