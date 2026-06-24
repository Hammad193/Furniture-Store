export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* 1. Hero Section */}
        <div className="relative h-[300px] md:h-[400px] mb-10 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Bedroom"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-6xl text-gray-900 font-serif mb-4">Contact Us</h1>
            <p className="text-gray-800 text-sm md:text-lg">Crafting luxury and comfort for your sanctuary</p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-12 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Grid ko mobile par flex-col aur desktop par grid-cols-2 rakha hai */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              
              {/* Left Side */}
              <div className="bg-white/90 p-6 md:p-10 rounded-[30px] text-gray-900 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
                <span className="text-[#C5A059] uppercase tracking-[4px] text-xs md:text-sm">
                  Contact Information
                </span>

                <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">
                  Let's Start A Conversation
                </h2>

                <p className="text-gray-900 leading-relaxed mb-10">
                  Have questions about our products, delivery services,
                  or custom furniture solutions? Our team is ready to assist.
                </p>

                <div className="space-y-6">
                  {/* Address Section */}
                  <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-black/5 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Showroom Address</h4>
                      <p className="text-gray-500">Baghdad Avenue, Isa Town, SG 115, Bahrain</p>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-black/5 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone Number</h4>
                      <p className="text-gray-500">+965 XXXX XXXX</p>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-black/5 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Address</h4>
                      <p className="text-gray-500">info@supremehome.com</p>
                    </div>
                  </div>

                  {/* WhatsApp Section */}
                  <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-black/5 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                      💬
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">WhatsApp</h4>
                      <p className="text-gray-500">+965 XXXX XXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="bg-white p-6 md:p-10 rounded-[30px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <span className="text-[#C5A059] uppercase tracking-[4px] text-xs md:text-sm">
                  Send Message
                </span>

                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-4 mb-8">
                  Get In Touch
                </h2>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition-all duration-300"
                  />

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition-all duration-300"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition-all duration-300"
                    />
                  </div>

                  <textarea
                    rows="6"
                    placeholder="Write Your Message"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition-all duration-300 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-transparent border border-gray-900 hover:bg-[#b38f4d] hover:border hover:border-white text-black hover:text-white py-4 rounded-2xl font-semibold tracking-wide transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="pb-12 md:pb-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb="
                width="100%"
                height="450"
                loading="lazy"
                className="border-0 w-full"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}