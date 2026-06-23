"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckoutPage() {
  const { cart, clearCart, buyNowItem } = useCart();
  const router = useRouter();

  const [itemsToCheckout, setItemsToCheckout] = useState([]);

  // Sync logic: Cart ko priority di gayi hai, agar cart empty hai toh buyNowItem show hoga
  useEffect(() => {
    if (cart && cart.length > 0) {
      setItemsToCheckout(cart);
    } else if (buyNowItem) {
      setItemsToCheckout([buyNowItem]);
    } else {
      setItemsToCheckout([]);
    }
  }, [cart, buyNowItem]);

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

  const subtotal = itemsToCheckout.reduce((acc, item) => acc + parsePrice(item.price) * (item.quantity || 1), 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (itemsToCheckout.length === 0) {
      toast.error("Your order is empty!"); 
      return;
    }
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.postalCode) {
      toast.warn("Please fill in all address details!");
      return;
    }

    clearCart();
    toast.success("Order placed successfully!");
    router.push("/placeorder");
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginTop: '60px', zIndex: 9999 }} 
      />
      
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
                {itemsToCheckout.map((item) => (
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