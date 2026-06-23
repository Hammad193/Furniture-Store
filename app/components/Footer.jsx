import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 hover:text-[#C5A059] cursor-pointer">
              Furniture Store
            </h3>

            <p className="text-sm leading-7">
              Discover premium furniture for your living room,
              bedroom, dining room, and office. Quality,
              comfort, and style delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#C5A059]">Home</Link></li>
              <li><Link href="/shop" className="hover:text-[#C5A059]">Product</Link></li>
              <li><Link href="/collections" className="hover:text-[#C5A059]">Collections</Link></li>
              <li><Link href="/about" className="hover:text-[#C5A059]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A059]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Categories
            </h4>

            <ul className="space-y-3">
              <li><Link href="/404" className="hover:text-[#C5A059]">Living Room</Link></li>
              <li><Link href="/404" className="hover:text-[#C5A059]">Bedroom</Link></li>
              <li><Link href="/404" className="hover:text-[#C5A059]">Dining Room</Link></li>
              <li><Link href="/404" className="hover:text-[#C5A059]">Office Furniture</Link></li>
              <li><Link href="/404" className="hover:text-[#C5A059]">Outdoor Furniture</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm">
              <li>📍 Lahore, Pakistan</li>
              <li>📞 +92 300 1234567</li>
              <li>✉️ info@furniturestore.com</li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="/404" className="cursor-pointer hover:text-[#C5A059]">Facebook</a>
              <a href="/404" className="cursor-pointer hover:text-[#C5A059]">Instagram</a>
              <a href="/404" className="cursor-pointer hover:text-[#C5A059]">YouTube</a>
            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-800 mt-12 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div>
              <h4 className="text-xl font-semibold text-white">
                Subscribe Newsletter
              </h4>
              <p className="text-sm mt-1">
                Get updates on new products and special offers.
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full md:w-80 rounded-l-lg text-white outline-none"
              />

              <button className="bg-white text-black px-6 hover:bg-[#C5A059] hover:text-white rounded-r-lg font-medium cursor-pointer">
                Subscribe
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © 2026 Furniture Store. All Rights Reserved.Created by Webo Creators.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/404" className="cursor-pointer hover:text-[#C5A059]">
              Privacy Policy
            </Link>

            <Link href="/404" className="cursor-pointer hover:text-[#C5A059]">
              Terms & Conditions
            </Link>

            <Link href="/404" className="cursor-pointer hover:text-[#C5A059]">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}