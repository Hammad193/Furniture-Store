"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const { cart } = useCart();

  // Updated Product List
  const AllProducts = [
    { id: 1, name: "Bed Room Set ( queen ) size", link: "/shop/bedroom-set-queen" },
    { id: 2, name: "Bad Room Set ( single )", link: "/shop/bedroom-set-single" },
    { id: 3, name: "Bedroom Set ( double )", link: "/shop/bedroom-set-double" },
    { id: 4, name: "Bad Room Set ( double )", link: "/shop/bedroom-set-double-2" },
    { id: 5, name: "Bad Room Set ( king )", link: "/shop/bedroom-set-king" },
    { id: 6, name: "Badroom Set ( queen )", link: "/shop/bedroom-set-queen-2" },
    { id: 7, name: "Badroom Set ( queen )", link: "/shop/bedroom-set-queen-3" },
    { id: 8, name: "Office File Rack", link: "/shop/office-file-rack" },
    { id: 9, name: "Side Table", link: "/shop/side-table" },
    { id: 10, name: "Side Table", link: "/shop/side-table-2" },
    { id: 11, name: "Book Shelf", link: "/shop/book-shelf" },
    { id: 12, name: "Book Shelf", link: "/shop/book-shelf-2" },
    { id: 13, name: "Chest Drawer ( dark brown )", link: "/shop/chest-drawer-brown" },
    { id: 14, name: "Chest Drawer ( white )", link: "/shop/chest-drawer-white" },
    { id: 15, name: "Office Visitor Chair", link: "/shop/office-visitor-chair" },
    { id: 16, name: "Office Chair", link: "/shop/office-chair" },
    { id: 17, name: "Office Chair", link: "/shop/office-chair-2" },
    { id: 18, name: "Dressing Table", link: "/shop/dressing-table" },
    { id: 19, name: "Dressing Table", link: "/shop/dressing-table-2" },
    { id: 20, name: "Dressing Table", link: "/shop/dressing-table-3" },
    { id: 21, name: "Dressing Table", link: "/shop/dressing-table-4" },
    { id: 22, name: "Shoe Rack size 120/80/30 cm", link: "/shop/shoe-rack" },
    { id: 23, name: "Shoe Rack size 120/80/30 cm", link: "/shop/shoe-rack-2" },
    { id: 24, name: "Office Table length 150 cm", link: "/shop/office-table-150" },
    { id: 25, name: "Office Table length 150 cm", link: "/shop/office-table-150-2" },
    { id: 26, name: "Office Table length 150 cm", link: "/shop/office-table-150-3" },
    { id: 27, name: "Office Table length 120 cm", link: "/shop/office-table-120" },
    { id: 28, name: "Office Table length 120 cm", link: "/shop/office-table-120-2" },
    { id: 29, name: "TV Stand length 120 cm", link: "/shop/tv-stand-120" },
    { id: 30, name: "TV Stand length 120 cm", link: "/shop/tv-stand-120-2" },
    { id: 31, name: "TV Stand length 180 cm", link: "/shop/tv-stand-180" },
    { id: 32, name: "TV Stand length 180 cm", link: "/shop/tv-stand-180-2" },
    { id: 33, name: "Cupboards 2 Door with mirror", link: "/shop/cupboard-2-mirror" },
    { id: 34, name: "Cupboards 2 Door", link: "/shop/cupboard-2" },
    { id: 35, name: "Cupboards 2 Door", link: "/shop/cupboard-2-2" },
    { id: 36, name: "Cupboards 3 Door with long mirror", link: "/shop/cupboard-3-mirror" },
    { id: 37, name: "Cupboards 3 Door with long mirror", link: "/shop/cupboard-3-mirror-2" },
    { id: 38, name: "King size Mattress 180/200 thickness 10 inches", link: "/shop/mattress-king-10" },
    { id: 39, name: "Mattress With Soft Toper 180/200", link: "/shop/mattress-toper" },
    { id: 40, name: "king size spring mattress 180/200", link: "/shop/mattress-spring-king" },
    { id: 41, name: "Single Mattress 90/190 thickness 5 inches", link: "/shop/mattress-single-5" },
    { id: 42, name: "Single size Mattress 90/190 thickness 7 inches", link: "/shop/mattress-single-7" },
    { id: 43, name: "Double size Mattress 120/200 thickness 5 inches", link: "/shop/mattress-double-5" },
    { id: 44, name: "Double size Mattress 120/200 thickness 7 inches", link: "/shop/mattress-double-7" },
    { id: 45, name: "Queen size Mattress 150/200 thickness 5 inches", link: "/shop/mattress-queen-5" },
    { id: 46, name: "Queen size Mattress 150/200 thickness 7 inches", link: "/shop/mattress-queen-7" },
    { id: 47, name: "King size Mattress 180/200 thickness 5 inches", link: "/shop/mattress-king-5" },
    { id: 48, name: "King size Mattress 180/200 thickness 7 inches", link: "/shop/mattress-king-7" },
    { id: 49, name: "King Bed 180/200", link: "/shop/bed-king" },
    { id: 66, name: "Single Heavy Duty Bed 90/190", link: "/shop/bed-single-heavy" }
  ];

  const filteredProducts = searchTerm.trim() !== "" 
    ? AllProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
    : [];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop' },
    { name: 'Category', path: '/category' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex flex-col cursor-pointer">
            <span className="text-2xl font-serif font-bold text-gray-900 tracking-widest hover:text-[#C5A059] transition">SKY FURNITURE</span>
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">FURNITURE</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-[#C5A059] transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-6 text-gray-800">
            <Search className="cursor-pointer hover:text-[#C5A059] transition" onClick={() => setIsSearchOpen(!isSearchOpen)} />
            <Link href="/signup"><User className="cursor-pointer hover:text-[#C5A059] transition" /></Link>
            <Link href="/cartpage">
              <div className="relative cursor-pointer">
                <ShoppingCart className="hover:text-[#C5A059] transition" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-500 py-2 border-b">
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {isSearchOpen && (
        <div className="absolute top-20 w-full bg-white p-6 border-b shadow-lg z-50">
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border-b-2 border-[#C5A059] outline-none text-[#C5A059]"
              />
              <Search className="text-[#C5A059] cursor-pointer" size={24} onClick={() => setIsSearchOpen(false)} />
            </div>
            
            {searchTerm.trim() !== "" && (
              <div className="max-h-60 overflow-y-auto bg-gray-50 rounded-lg p-2">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <Link 
                      key={p.id} 
                      href={p.link} 
                      onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }}
                      className="block p-3 hover:bg-gray-200 border-b last:border-0 text-gray-700"
                    >
                      {p.name}
                    </Link>
                  ))
                ) : (
                  <p className="p-3 text-gray-400">No products found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}