"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from "../../context/CartContext";
import productsData from "../../data/furniture-website-data.json"; // Apne path se match karein

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("specs");
  
  // ID ke basis par product dhoondna
  const product = productsData.find((p) => String(p.id) === String(id));
  
  const [mainImage, setMainImage] = useState("");

  // Product milne par default image set karna
  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product nahi mila!</div>;

  return (
    <main className="min-h-screen bg-white text-gray-900 py-40">
      <section className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* Gallery */}
          <div className="space-y-4">
            <img src={mainImage} className="w-full h-96 object-cover rounded-2xl shadow-lg border border-gray-100" alt={product.name} />
            <div className="grid grid-cols-4 gap-4">
              {/* Agar JSON mein images ki array hai toh map karein, warna single image */}
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  onClick={() => setMainImage(img)} 
                  className="h-24 w-full object-cover rounded-lg cursor-pointer border-2 hover:border-[#C5A059] transition" 
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
            <p className="text-2xl text-[#C5A059] font-bold mb-4">{product.price}</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description || "Premium quality furniture crafted for comfort and style."}
            </p>
            
            {/* Tabs */}
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
                  <ul className="list-disc ml-5 space-y-1">
                    {product.specs ? product.specs.map((s, i) => <li key={i}>{s}</li>) : <li>No specs available</li>}
                  </ul>
                ) : <p>{product.care || "Regular dusting with a soft cloth is recommended."}</p>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-gray-900 text-white py-4 rounded-xl hover:bg-black transition"
              >
                Add to Cart
              </button>
              <a href="https://wa.me/973XXXXXXXXX" className="flex-1 border border-[#C5A059] text-[#C5A059] py-4 rounded-xl hover:bg-[#C5A059] hover:text-white transition text-center">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="border-t border-gray-100 pt-16">
          <h3 className="text-2xl font-serif mb-8 text-gray-900">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productsData.slice(0, 4).map((item) => (
              <div key={item.id} className="group relative">
                <div className="bg-white border border-gray-100 aspect-square rounded-xl mb-3 overflow-hidden shadow-sm">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                <p className="text-[#C5A059] font-semibold mb-3">{item.price}</p>
                <button className="w-full py-2 border border-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
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