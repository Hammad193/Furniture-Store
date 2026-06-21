"use client";
import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const questions = [
    { q: "Do you offer free delivery and installation?", a: "Yes, we provide free delivery and professional installation for all bed orders across Funaitees and Taima." },
    { q: "How long is the warranty on your beds?", a: "We offer a 5-year structural warranty on all our bed frames covering manufacturing defects." },
    { q: "Can I customize the color and fabric of the bed?", a: "Absolutely! We offer a wide range of premium fabrics and colors to match your bedroom interior." },
    { q: "What are the standard bed sizes you offer?", a: "We offer all standard sizes: Single (90/200), Queen (150/200), and King (180/200). Custom sizes are also available." },
    { q: "Do you have a physical showroom?", a: "Yes, you are welcome to visit our showroom in Taima to feel the quality of our materials." },
    // Baqi 10 questions yahan...
    { q: "Is the mattress included?", a: "Mattress is sold separately, but we offer bundle discounts." },
    { q: "How long does delivery take?", a: "Usually 3-5 working days." },
  ];

  // Sirf pehle 5 ya phir sabhi dikhayein
  const displayQuestions = showAll ? questions : questions.slice(0, 5);

  return (
    <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: FAQ Section */}
        <div>
          <h2 className="text-3xl font-serif mb-8 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {displayQuestions.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setOpen(open === i ? null : i)} 
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 cursor-pointer hover:text-[#C5A059]"
                >
                  {item.q}
                  <ChevronDown size={18} className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && <div className="px-5 pb-5 text-gray-600 text-sm">{item.a}</div>}
              </div>
            ))}
            
            <button 
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-[#C5A059] font-bold cursor-pointer hover:underline"
            >
              {showAll ? "Show Less" : "Read More Questions →"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Support Section */}
        <div className="bg-[#C5A059] rounded-3xl p-10 text-white flex flex-col justify-center">
          <h3 className="text-3xl font-serif mb-6">Need Further Assistance?</h3>
          <p className="mb-8 opacity-90">Can't find the answer you're looking for? Please chat with our friendly team.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full"><MessageCircle size={24} /></div>
              <span>Chat with us on WhatsApp</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full"><Phone size={24} /></div>
              <span>+965 XXXX XXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full"><Mail size={24} /></div>
              <span>support@supremehome.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}