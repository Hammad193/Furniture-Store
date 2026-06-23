"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext"; 
import { toast } from 'react-hot-toast';

// Professional Custom Toast Function
const showCustomToast = (title, message, isSuccess = true) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-sm w-full bg-white shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden border border-gray-100`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-xl ${isSuccess ? 'bg-green-100' : 'bg-red-100'}`}>
              {isSuccess ? '✅' : '⚠️'}
            </div>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-bold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-100">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-bold text-[#C5A059] hover:bg-gray-50 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  ), {duration:3000,
    
  });
};

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: "", city: "", postalCode: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    return parseFloat(price.toString().replace(/[^0-9.]/g, '')) || 0;
  };

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * (item.quantity || 1), 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    // Validation Check
    if (cart.length === 0) {
      // Yahan duration: 3000 add kiya gaya hai
      showCustomToast("Error", "Your cart is empty!", false); 
      return;
    }
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.postalCode) {
      // Yahan duration: 3000 add kiya gaya hai
      showCustomToast("Required", "Please fill in all address details!", false);
      return;
    }

    clearCart();
    // Yahan duration: 3000 add kiya gaya hai
    showCustomToast("Success", "Order placed successfully!");
    router.push("/placeorder");
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <section className="relative py-40 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop" alt="Checkout Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#111111]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white">Checkout</h1>
          <p className="text-white mt-4 text-lg">Complete your order securely</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-[30px] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Billing Details</h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input name="firstName" onChange={handleInputChange} type="text" placeholder="First Name" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition" />
                <input name="lastName" onChange={handleInputChange} type="text" placeholder="Last Name" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition" />
              </div>
              <input name="email" onChange={handleInputChange} type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition" />
              <input name="phone" onChange={handleInputChange} type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition" />
              <input name="address" onChange={handleInputChange} type="text" placeholder="Street Address" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition" />
              <div className="grid md:grid-cols-2 gap-5">
                <input name="city" onChange={handleInputChange} type="text" placeholder="City" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition" />
                <input name="postalCode" onChange={handleInputChange} type="text" placeholder="Postal Code" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition" />
              </div>
              <textarea rows="5" placeholder="Order Notes (Optional)" className="w-full px-5 py-4 rounded-2xl text-gray-900 border border-gray-200 bg-gray-50 outline-none resize-none focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/20 transition"></textarea>
            </form>
          </div>

          <div>
            <div className="sticky top-10 bg-white text-gray-900 rounded-[30px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <span className="text-[#C5A059] uppercase tracking-[4px] text-sm">Order Summary</span>
              <h2 className="text-3xl font-serif mt-4 mb-8">Your Order</h2>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover" />
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-gray-900">Qty: {item.quantity}</p>
                    </div>
                    <span className="ml-auto text-[#C5A059]">{item.price}</span>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-5 space-y-4">
                  <div className="flex justify-between text-gray-900"><span>Subtotal</span><span className="text-[#C5A059]">{subtotal.toFixed(2)} BD</span></div>
                  <div className="flex justify-between text-gray-900"><span>Shipping</span><span className="text-[#C5A059]">{shipping} BD</span></div>
                  <div className="flex justify-between text-2xl font-bold border-t border-gray-200 pt-5">
                    <span>Total</span>
                    <span className="text-[#C5A059]">{total.toFixed(2)} BD</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#C5A059]"><input type="radio" name="payment" defaultChecked /> <span>Cash On Delivery</span></label>
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#C5A059]"><input type="radio" name="payment" /> <span>Credit / Debit Card</span></label>
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#C5A059]"><input type="radio" name="payment" /> <span>Bank Transfer</span></label>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                className="w-full mt-8 bg-[#C5A059] hover:bg-[#b38f4d] text-white py-4 rounded-2xl font-semibold transition cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}