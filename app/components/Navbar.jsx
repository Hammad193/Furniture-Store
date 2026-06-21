"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex flex-col cursor-pointer">
            <span className="text-2xl font-serif font-bold text-gray-900 tracking-widest hover:text-blue-500 transition">SKY FURNITURE</span>
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">FURNITURE</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-blue-500 transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-6 text-gray-800">
            <Search className="cursor-pointer hover:text-blue-500 transition" onClick={() => setIsSearchOpen(!isSearchOpen)} />
            <Link href="/signup"><User className="cursor-pointer hover:text-blue-500 transition" /></Link>
            <Link href="/cartpage"><div className="relative cursor-pointer">
              <ShoppingCart className="hover:text-blue-500 transition" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div></Link>
            
            {/* Mobile Menu Trigger */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-500 py-2 border-b"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-20 w-full bg-white p-6 border-b shadow-lg z-50">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full p-2 border-b-2 border-blue-500 outline-none text-blue-600"
            />
            <Search className="text-blue-500 cursor-pointer" size={24} onClick={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}