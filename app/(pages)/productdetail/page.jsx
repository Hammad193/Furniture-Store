"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("specs");
  
  // Product Data
  const product = {
    name: "Royal Comfort King Bed",
    price: "250.000 KD",
    description: "Experience ultimate luxury with our Royal Comfort King Bed. Handcrafted with premium solid oak wood and upholstered in high-grade velvet, this piece defines elegance and provides unparalleled support for a restful night.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200"
    ],
    specs: ["Material: Solid Oak Wood + Velvet", "Dimensions: 180cm x 200cm", "Weight Capacity: 400kg", "Assembly: Required"],
    care: "Dry clean only. Avoid direct sunlight to maintain fabric color. Wipe wood with a soft dry cloth."
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <main className="min-h-screen bg-white text-gray-900 py-40">
      <section className="max-w-7xl mx-auto px-4">
        
        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* Left: Gallery */}
          <div className="space-y-4">
            <img src={mainImage} className="w-full h-96 object-cover rounded-2xl shadow-lg border border-gray-100" alt="Main" />
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  onClick={() => setMainImage(img)} 
                  className="h-24 w-full object-cover rounded-lg cursor-pointer border-2 hover:border-[#C5A059] transition" 
                />
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
            <p className="text-2xl text-[#C5A059] font-bold mb-4">{product.price}</p>
            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
            
            <div className="mb-8">
              <div className="flex gap-6 border-b border-gray-200 mb-4">
                <button 
                  onClick={() => setActiveTab("specs")} 
                  className={`pb-2 ${activeTab === "specs" ? "border-b-2 border-[#C5A059] font-bold text-gray-900" : "text-gray-500"}`}
                >
                  Specifications
                </button>
                <button 
                  onClick={() => setActiveTab("care")} 
                  className={`pb-2 ${activeTab === "care" ? "border-b-2 border-[#C5A059] font-bold text-gray-900" : "text-gray-500"}`}
                >
                  Care Guide
                </button>
              </div>
              <div className="text-sm text-gray-600 min-h-[100px]">
                {activeTab === "specs" ? (
                  <ul className="list-disc ml-5 space-y-1">{product.specs.map((s, i) => <li key={i}>{s}</li>)}</ul>
                ) : <p>{product.care}</p>}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl hover:bg-black transition">Add to Cart</button>
              <a href="https://wa.me/973XXXXXXXXX" className="flex-1 border border-[#C5A059] text-[#C5A059] py-4 rounded-xl hover:bg-[#C5A059] hover:text-white transition text-center">WhatsApp</a>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="border-t border-gray-100 pt-16">
          <h3 className="text-2xl font-serif mb-8 text-gray-900">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative">
                {/* Product Image */}
                <div className="bg-white border border-gray-100 aspect-square rounded-xl mb-3 overflow-hidden shadow-sm">
                  <img 
                    src={`https://images.unsplash.com/photo-${1505693416388 + item}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    alt={`Product ${item}`}
                  />
                  
                  {/* Add to Cart Icon Overlay */}
                  <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-lg hover:bg-[#C5A059] hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Title & Price */}
                <h4 className="font-bold text-gray-900 mb-1">Premium Bed {item}</h4>
                <p className="text-[#C5A059] font-semibold mb-3">200.000 BD</p>
                
                {/* View Details Button */}
                <button className="w-full py-2 border border-gray-900 rounded-lg text-sm font-semibold cursor-pointer hover:bg-gray-900 hover:text-white transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}