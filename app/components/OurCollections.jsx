"use client";
import Link from "next/link";

export default function ProductSection() {
  const WHATSAPP_NUMBER = "97312345678"; // Yahan apna WhatsApp number likhein (Country code ke sath, bina + ke)

  const AllProducts = [
    { title: "Luxury Bed A", price: "250 BD", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600" },
    { title: "Royal Master Bed", price: "400 BD", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600" },
    { title: "Minimalist Bed", price: "180 BD", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600" },
    { title: "Classic Sofa Bed", price: "220 BD", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600" },
    { title: "Velvet King Bed", price: "350 BD", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600" },
    { title: "Modern Frame Bed", price: "290 BD", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600" },
    { title: "Wooden Queen Bed", price: "210 BD", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600" },
    { title: "Premium Suite", price: "500 BD", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600" },
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Collection</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {AllProducts.map((product, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-900 transition-all group shadow-sm">
              <div className="h-64 overflow-hidden">
                <Link href="/404"><img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                /></Link>
              </div>
              <div className="p-5 text-center">
                <Link href="/404"><h3 className="text-lg font-medium mb-1">{product.title}</h3></Link>
                <p className="text-[#C5A059] font-bold mb-4">{product.price}</p>
                
                {/* Updated Button: Link use kiya gaya hai */}
                <Link 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20am%20interested%20in%20${encodeURIComponent(product.title)}%20which%20is%20priced%20at%20${product.price}`}
                  target="_blank"
                  className="block w-full border border-gray-900 text-gray-900 py-2 rounded-lg hover:bg-[#C5A059] hover:border-none hover:text-white transition text-sm font-semibold"
                >
                  Order on WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}