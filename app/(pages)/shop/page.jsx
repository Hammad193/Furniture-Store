import Link from "next/link";

export default function ShopPage() {
  // Product data array
  const products = [
    { id: 1, title: "Luxury King Bed", price: "250.000 BD" },
    { id: 2, title: "Royal Master Bed", price: "400.000 BD" },
    { id: 3, title: "Minimalist Bed", price: "180.000 BD" },
    { id: 4, title: "Classic Sofa Bed", price: "220.000 BD" },
    { id: 5, title: "Velvet King Bed", price: "350.000 BD" },
    { id: 6, title: "Modern Frame Bed", price: "290.000 BD" },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-10 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Bedroom"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl text-gray-900 font-serif mb-4">Products Of Sky Furniture</h1>
          <p className="text-black text-lg">Luxury and comfort Products for your sanctuary</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Premium Collection</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded-3xl border border-gray-100 hover:shadow-2xl transition duration-500 group">
              <div className="relative h-72 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition duration-500" />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold rounded-full">NEW</span>
              </div>
              <div className="px-2">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-4">Supreme comfort series</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#C5A059]">{p.price}</span>
                  <Link href="/productdetail">
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-[#C5A059] transition cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}