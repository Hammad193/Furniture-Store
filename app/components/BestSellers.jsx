"use client";
import { ShoppingCart, Eye } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import { toast } from 'react-hot-toast';

import { useCart } from "../context/CartContext";
import productsData from "../data/furniture-website-data.json";

// Professional Custom Toast Function
const showCustomToast = (title, message, isSuccess = true) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-sm w-full bg-white shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden border border-gray-100`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-xl ${isSuccess ? 'bg-green-100' : 'bg-red-100'}`}>
              {isSuccess ? '✅' : '🛒'}
            </div>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-bold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-100">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-bold text-[#C5A059] hover:bg-gray-50 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  ), {
    duration: 3000,
  });
};

export default function BestSellers() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    showCustomToast("Added to Cart", `${product.name} has been added successfully.`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-2">Best Sellers</h2>
        <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true} // Left/Right arrows
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {productsData.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden rounded-xl mb-4 h-56">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Link href={`/product/${product.id}`}><button className="absolute top-3 right-3 p-2 bg-white cursor-pointer rounded-full shadow-lg text-gray-600 hover:text-[#C5A059]">
                    <Eye size={18} />
                  </button></Link>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-800 truncate px-2">{product.name}</h3>
                  <p className="text-[#C5A059] font-bold text-xl my-2">{product.price}</p>
                  
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-3 mt-2 border border-gray-900 text-black rounded-lg cursor-pointer hover:bg-[#C5A059] hover:text-white hover:border-none transition-colors flex items-center justify-center gap-2"
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