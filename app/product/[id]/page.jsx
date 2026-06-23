"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from "../../context/CartContext";
import productsData from "../../data/furniture-website-data.json";
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
              {isSuccess ? '✅' : '🗑️'}
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
  ));
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = productsData.find((p) => String(p.id) === String(id));
  
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reviews State
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ email: "", comment: "" });

  // 1. Page load hone par localStorage se data lana
  useEffect(() => {
    if (product) setMainImage(product.image);
    
    const savedReviews = localStorage.getItem(`reviews_${id}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [id, product]);

  // 2. Reviews update hone par localStorage mein save karna
  useEffect(() => {
    localStorage.setItem(`reviews_${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.email && newReview.comment) {
      const updatedReviews = [...reviews, { ...newReview, id: Date.now() }];
      setReviews(updatedReviews);
      setNewReview({ email: "", comment: "" });
      showCustomToast("Success", "Review submitted successfully!");
    }
  };

  const deleteReview = (reviewId) => {
    setReviews(reviews.filter((r) => r.id !== reviewId));
    showCustomToast("Deleted", "Review has been removed.", false);
  };

  const images = [product?.image, "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000", "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000"];

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found...</div>;

  // Related Products Logic
  const relatedProducts = productsData.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 6); 

  return (
    <div className="min-h-screen bg-white text-gray-900 py-40">
      <div className="max-w-7xl mx-auto px-4">
        
        <nav className="text-sm mb-6 text-gray-500">
          <Link href="/" className="hover:text-black">Home</Link> / 
          <Link href="/shop" className="hover:text-black"> Shop</Link> / 
          <span className="text-gray-900 font-bold"> {product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gallery Code */}
          <div className="flex flex-col gap-4">
            <div className="relative h-96 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center group">
              <img src={mainImage} alt={product.name} className="max-h-full object-contain" />
              <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length) || setMainImage(images[(currentIndex - 1 + images.length) % images.length])} className="absolute left-4 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">←</button>
              <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length) || setMainImage(images[(currentIndex + 1) % images.length])} className="absolute right-4 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">→</button>
            </div>
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button key={idx} onClick={() => { setMainImage(img); setCurrentIndex(idx); }} className={`w-20 h-20 border-2 rounded-lg ${currentIndex === idx ? 'border-gray-900' : 'border-transparent'}`}>
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-serif mb-2">{product.name}</h1>
            <div className="text-yellow-500 mb-4">★★★★★ <span className="text-gray-400 text-sm">({reviews.length} reviews)</span></div>
            <div className="bg-gray-50 p-4 rounded-xl mb-6">
              <h3 className="font-bold mb-2">Specifications</h3>
              <p className="text-gray-600">Category: {product.category}</p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-[#C5A059]">{product.price}</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex border rounded-lg">
                <button onClick={() => { setQuantity(q => Math.max(1, q - 1)); showCustomToast("Update", "Quantity decreased"); }} className="px-4 py-2 hover:bg-gray-100">-</button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button onClick={() => { setQuantity(q => q + 1); showCustomToast("Update", "Quantity increased"); }} className="px-4 py-2 hover:bg-gray-100">+</button>
              </div>
              <button onClick={() => { addToCart(product, quantity); showCustomToast("Cart", "Added to your collection!"); }} className="flex-1 bg-gray-900 text-white py-3 rounded-lg hover:bg-[#C5A059]">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Description & Reviews Section */}
        <div className="mt-20 border-t pt-10">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-600 mb-10">{product.description || "Premium quality furniture crafted for comfort and style."}</p>
          
          <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
          <form onSubmit={handleReviewSubmit} className="bg-gray-50 p-6 rounded-xl mb-10">
            <input type="email" required placeholder="Your Email" value={newReview.email} onChange={(e) => setNewReview({...newReview, email: e.target.value})} className="w-full p-3 border rounded-lg mb-4" />
            <textarea required placeholder="Your Comment" value={newReview.comment} onChange={(e) => setNewReview({...newReview, comment: e.target.value})} className="w-full p-3 border rounded-lg mb-4"></textarea>
            <button type="submit" className="bg-gray-900 text-white px-8 py-2 rounded">Submit Review</button>
          </form>

          <div className="space-y-4">
            {reviews.map((r) => (
              <div key={r.id} className="p-4 border rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">{r.email}</p>
                  <p className="text-gray-600">{r.comment}</p>
                </div>
                <button onClick={() => deleteReview(r.id)} className="text-red-500 text-sm hover:underline">Delete</button>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t pt-10">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="flex gap-6 overflow-x-auto pb-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="min-w-[300px] bg-white p-4 rounded-3xl border border-gray-100 hover:shadow-xl transition duration-500">
                  <div className="h-64 bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                    <Link href={`/product/${p.id}`}><img src={p.image} alt={p.name} className="w-full h-full object-cover" /></Link>
                  </div>
                  <Link href={`/product/${p.id}`}><h3 className="font-bold text-lg">{p.name}</h3></Link>
                  <p className="text-[#C5A059] font-bold mt-2">{p.price}</p>
                  <div className="flex gap-2 mt-4">
                    <button onClick={() => { addToCart(p, 1); showCustomToast("Cart", "Added to your collection!"); }} className="flex-1 bg-gray-900 text-white py-2 rounded-xl cursor-pointer text-sm hover:bg-[#C5A059]">Add to Cart</button>
                    <Link href={`/product/${p.id}`} className="flex-1">
                      <button className="w-full text-white py-2 rounded-xl bg-gray-900 text-sm cursor-pointer hover:bg-[#C5A059] transition">View</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}