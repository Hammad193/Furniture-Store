"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  { 
    id: 1, 
    title: "King Size Luxury", 
    subtitle: "Experience ultimate comfort with our premium range", 
    image: "https://thearchitectsdiary.com/wp-content/uploads/2021/08/AMELIORATE-DESIGN-STUDIO-1.jpeg" 
  },
  { 
    id: 2, 
    title: "Modern Minimalist", 
    subtitle: "Clean designs for a peaceful night's sleep", 
    image: "https://thearchitectsdiary.com/wp-content/uploads/2021/08/AURA-INTERIORS-1-1.jpeg" 
  },
  { 
    id: 3, 
    title: "Classic Elegance", 
    subtitle: "Timeless craftsmanship for your bedroom", 
    image: "https://thearchitectsdiary.com/wp-content/uploads/2021/09/THE-ARCH-STUDIO-2.jpg" 
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-serif font-bold mb-4 text-center"
            >
              {slides[index].title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-md md:text-lg tracking-widest uppercase text-center"
            >
              {slides[index].subtitle}
            </motion.p>
            <Link href ="/collections"><button className="mt-8 px-8 py-3 border-2 border-white cursor-pointer hover:bg-[#C5A059] hover:border-[#C5A059] transition-all duration-300 font-bold uppercase tracking-wider">
              Explore Collections
            </button></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}