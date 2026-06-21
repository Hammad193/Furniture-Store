"use client";
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    { name: "Ahmed F.", comment: "The quality of the King Bed is unmatched." },
    { name: "Sara M.", comment: "Amazing service! Fast delivery and installation." },
    { name: "Khalid R.", comment: "Professional team. My bedroom looks like a 5-star hotel." },
    { name: "Fatima Z.", comment: "Beautiful designs. I am so happy with my choice." },
    { name: "Omar H.", comment: "Fast delivery and very friendly staff." },
    { name: "Layla K.", comment: "The storage bed is perfect for my small room." },
    { name: "Jasim A.", comment: "Solid wood quality is excellent. Very sturdy." },
    { name: "Mariam S.", comment: "Best furniture shop in Taima. Top-notch support." }
  ];

  // Helper function to get initials
  const getInitials = (name) => name.charAt(0).toUpperCase();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12 text-gray-900">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              {/* Avatar Icon */}
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] font-bold text-xl mb-4">
                {getInitials(t.name)}
              </div>
              
              <h4 className="text-gray-900 font-bold text-sm">{t.name}</h4>
              <p className="text-gray-600 italic mb-4 text-sm flex-grow">"{t.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}