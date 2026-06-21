import { Truck, ShieldCheck, Gem, Headphones } from 'lucide-react';

const features = [
  { icon: <Truck />, title: "Free Delivery", desc: "Free Delivery all over Kuwait" },
  { icon: <ShieldCheck />, title: "Trusted Quality", desc: "Premium craftsmanship guaranteed" },
  { icon: <Gem />, title: "Premium Quality", desc: "Handcrafted with finest materials" },
  { icon: <Headphones />, title: "24/7 Support", desc: "Always here to help you" },
];

export default function Facilities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
          >
            <div className="text-[#C5A059] mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}