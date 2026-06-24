import Link from "next/link";



export default function AboutPage() {
  return (
    <>
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* 1. Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Bedroom"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">About Supreme Home</h1>
          <p className="text-black text-lg">Crafting luxury and comfort for your sanctuary</p>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop" 
            alt="Luxury Furniture" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Text Side */}
        <div className="space-y-6">
          <h2 className="text-3xl text-[#C5A059] font-serif">Crafting Dreams Since 2020</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            At Supreme Home, we believe your bedroom is your sanctuary. Based in Taima, 
            we specialize in luxury furniture that blends unmatched craftsmanship 
            with modern comfort to transform your living space.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every bed we create is a result of meticulous attention to detail. 
            We source the finest materials to ensure durability, aesthetics, 
            and a peaceful sleep experience for our valued customers.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="bg-transparent border border-gray-900 p-6 rounded-xl">
              <h4 className="text-4xl font-bold text-[#C5A059] mb-2">500+</h4>
              <p className="text-sm text-gray-900 uppercase tracking-widest">Happy Customers</p>
            </div>
            <div className="bg-transparent border border-gray-900 p-6 rounded-xl">
              <h4 className="text-4xl font-bold text-[#C5A059] mb-2">5 Years</h4>
              <p className="text-sm text-gray-900 uppercase tracking-widest">Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   {/* 3. Our Mission Section */}

<section className="py-24 bg-[#faf7f2]">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
      Our Mission
    </span>


<h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">
  Creating Spaces That Feel Like Home
</h2>

<p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
  Our mission is to provide premium-quality furniture that combines
  timeless design, superior comfort, and exceptional craftsmanship.
  Every piece is carefully selected to help our customers create
  elegant, comfortable, and inspiring living spaces.
</p>


  </div>
</section>

{/* 4. Why Choose Supreme Home */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
        Why Choose Us
      </span>


  <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4">
    Excellence In Every Detail
  </h2>
</div>

<div className="grid md:grid-cols-3 gap-8">
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
      Premium Materials
    </h3>

    <p className="text-gray-600 leading-relaxed">
      We source only the finest materials to ensure durability,
      beauty, and long-lasting comfort in every product.
    </p>
  </div>

  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
      Expert Craftsmanship
    </h3>

    <p className="text-gray-600 leading-relaxed">
      Our furniture is built with precision and attention to detail,
      delivering superior quality and timeless appeal.
    </p>
  </div>

  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
      Customer Satisfaction
    </h3>

    <p className="text-gray-600 leading-relaxed">
      We are committed to providing exceptional service and ensuring
      every customer enjoys a seamless shopping experience.
    </p>
  </div>
</div>


  </div>
</section>

{/* 5. Call To Action */}

<section className="py-24 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
      Discover Luxury
    </span>


<h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
  Transform Your Home Today
</h2>

<p className="text-gray-600 text-lg leading-relaxed mb-10">
  Explore our carefully curated collection of luxury furniture and
  discover pieces that bring elegance, comfort, and sophistication
  to every room.
</p>

<Link href ="/collections"><button className="bg-transparent border border-gray-900 text-gray-900 px-10 py-4 rounded-full font-medium cursor-pointer hover:bg-[#C5A059] hover:text-white hover:border hover:border-white hover:opacity-90 transition">
  Explore Collection
</button></Link>


  </div>
</section>



    </>
  );
}