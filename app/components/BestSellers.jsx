"use client";
import { ShoppingCart, Eye } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { useCart } from "../context/CartContext";
import productsData from "../data/furniture-website-data.json";

export default function BestSellers() {
  const { addToCart } = useCart();
  
  const handleAddToCart = (product) => {
    addToCart(product);
    // React Toastify success notification
    toast.success(`${product.name} has been added successfully.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <section className="py-24 bg-[#F8F5F0]">
 <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginTop: '60px', zIndex: 9999 }} 
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm">Our Selection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3 mb-6">Best Sellers</h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full"></div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {productsData.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[24px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[18px] mb-6 h-72">
                  <Link href={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>
                  <Link href={`/product/${product.id}`} className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg text-gray-600 hover:text-[#C5A059] transition-colors">
                    <Eye size={20} />
                  </Link>
                </div>
                
                {/* Content */}
                <div className="px-2 text-center pb-2">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-serif text-xl text-gray-900 mb-2 truncate">{product.name}</h3>
                  </Link>
                  <p className="text-[#C5A059] font-bold text-lg mb-6">{product.price}</p>
                  
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-4 bg-transparent border border-gray-900 text-gray-900 rounded-[16px] font-bold hover:bg-[#C5A059] hover:border-none hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm cursor-pointer"
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}