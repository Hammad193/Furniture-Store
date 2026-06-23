"use client";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import collectionData from "../collectiondata/collection.json";

export default function ProductSection() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] font-medium tracking-widest uppercase text-sm">Collection</span>
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mt-3 mb-6">Our Masterpieces</h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collectionData.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Link href={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer" 
                  />
                </Link>
                
                {/* Add to Cart Icon */}
                <button 
                  onClick={() => {
                    addToCart(product);
                    toast.success(`${product.name} added to cart!`);
                  }}
                  className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-gray-900 hover:bg-[#C5A059] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 font-serif hover:text-[#C5A059] transition cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-[#C5A059] font-bold text-lg mb-6">{product.price}</p>
                
                {/* View Details Button */}
                <Link 
                  href={`/product/${product.id}`}
                  className="inline-flex items-center justify-center gap-2 w-full border border-[#C5A059] text-black py-4 rounded-xl hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wider cursor-pointer"
                >
                  <Eye size={18} /> View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}