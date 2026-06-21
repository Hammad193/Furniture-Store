export default function ContactPage() {
return ( 
<>
<div className="min-h-screen bg-white">


  {/* Hero Section */}
  <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://urbangalleria.com/cdn/shop/files/banner.png?v=1757361550')",
      }}
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 text-center px-4">
      <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
        Contact Us
      </h1>

      <p className="text-gray-200 text-lg md:text-xl">
        We'd love to hear from you
      </p>
    </div>
  </div>

  {/* Contact Section */}
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-[#111111] to-[#222222] p-10 rounded-[30px] text-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

          <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
            Contact Information
          </span>

          <h2 className="text-4xl font-serif mt-4 mb-6">
            Let's Start A Conversation
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            Have questions about our products, delivery services,
            or custom furniture solutions? Our team is ready to assist.
          </p>

          <div className="space-y-6">

            <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                📍
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Showroom Address
                </h4>
                <p className="text-gray-400">
                  Baghdad Avenue, Isa Town, SG 115, Bahrain
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                📞
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Phone Number
                </h4>
                <p className="text-gray-400">
                  +965 XXXX XXXX
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                ✉️
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Email Address
                </h4>
                <p className="text-gray-400">
                  info@supremehome.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#C5A059] flex items-center justify-center text-xl shrink-0">
                💬
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  WhatsApp
                </h4>
                <p className="text-gray-400">
                  +965 XXXX XXXX
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-10 rounded-[30px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">

          <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">
            Send Message
          </span>

          <h2 className="text-4xl font-serif text-gray-900 mt-4 mb-8">
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
              className="w-full bg-[#C5A059] hover:bg-[#b38f4d] text-white py-4 rounded-2xl font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              SEND MESSAGE
            </button>

          </form>
        </div>

      </div>
    </div>
  </section>

  {/* Google Map */}
  <section className="pb-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">

        <iframe
          src="https://www.google.com/maps/embed?pb="
          width="100%"
          height="450"
          loading="lazy"
          className="border-0"
        ></iframe>

      </div>
    </div>
  </section>

</div>
</>

);
}
