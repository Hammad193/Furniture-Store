export default function CollectionsPage() {
  const categories = [
    { title: "King Size Beds", image: "bg-gray-400" }, // Yahan background image bhi laga sakte hain
    { title: "Storage Beds", image: "bg-gray-500" },
    { title: "Mattresses", image: "bg-gray-400" },
    { title: "Nightstands", image: "bg-gray-500" },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. Hero Section */}
      <div className="relative h-[400px] mb-10 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Bedroom"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl text-gray-900 font-serif mb-4">Collections Of Sky Furniture</h1>
          <p className="text-black text-lg">Crafting luxury and comfort for your sanctuary</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-gray-500">Discover our premium range of handcrafted furniture.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`relative h-96 rounded-3xl overflow-hidden group cursor-pointer ${cat.image}`}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">{cat.title}</h2>
                <button className="px-6 py-2 border border-white text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-500 hover:bg-white hover:text-black">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}