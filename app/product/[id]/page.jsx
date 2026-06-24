"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import productsData from "../../data/furniture-website-data.json";
import collectionData from "../../collectiondata/collection.json"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCart } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const router = useRouter();

  // Dono files ko combine kar ke ek array banaya
  const allAvailableProducts = [...productsData, ...collectionData];
  
  // Ab product find karne ke liye combined array use ho raha hai
  const product = allAvailableProducts.find((p) => String(p.id) === String(id));

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { directPurchase, setDirectPurchase } = useCart();
  const [activeTab, setActiveTab] = useState("description");

  // Reviews State
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ email: "", comment: "" });

  useEffect(() => {
    if (product) setMainImage(product.image);
    const savedReviews = localStorage.getItem(`reviews_${id}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [id, product]);

  useEffect(() => {
    localStorage.setItem(`reviews_${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.email && newReview.comment) {
      const updatedReviews = [...reviews, { ...newReview, id: Date.now() }];
      setReviews(updatedReviews);
      setNewReview({ email: "", comment: "" });
      toast.success("Review submitted successfully!");
    }
  };

  const deleteReview = (reviewId) => {
    setReviews(reviews.filter((r) => r.id !== reviewId));
    toast.error("Review has been removed.");
  };

  const images = [
    product?.image,
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
  ];

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found...
      </div>
    );

  // UPDATED: Related products ke liye ab combined array aur strict string comparison use kiya hai
  const relatedProducts = allAvailableProducts
    .filter((p) => p.category === product.category && String(p.id) !== String(id))
    .slice(0, 6);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-40">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm mb-6 text-gray-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* GALLERY */}
          <div className="flex flex-col gap-5">
            <div className="relative h-[420px] bg-white rounded-3xl overflow-hidden border shadow-sm group flex items-center justify-center">
              <img
                src={mainImage}
                alt={product.name}
                className="max-h-full object-contain group-hover:scale-105 transition duration-500"
              />
              <button
                onClick={() =>
                  setCurrentIndex(
                    (currentIndex - 1 + images.length) % images.length,
                  ) ||
                  setMainImage(
                    images[(currentIndex - 1 + images.length) % images.length],
                  )
                }
                className="absolute left-4 w-10 h-10 bg-white/90 rounded-full shadow cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % images.length) ||
                  setMainImage(images[(currentIndex + 1) % images.length])
                }
                className="absolute right-4 w-10 h-10 bg-white/90 rounded-full shadow cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                →
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setMainImage(img);
                    setCurrentIndex(idx);
                  }}
                  className={`w-20 h-20 rounded-xl cursor-pointer overflow-hidden border ${currentIndex === idx ? "border-[#C5A059]" : "border-gray-200"}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="space-y-5">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {product.name}
            </h1>
            <div className="text-yellow-500 text-sm">
              ★★★★★ <span className="text-gray-400">({reviews.length})</span>
            </div>
            <div className="text-3xl font-bold text-[#C5A059]">
              {product.price}
            </div>
            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>

            <div className="flex items-center border rounded-xl w-fit overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 hover:bg-gray-100 cursor-pointer"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 hover:bg-gray-100 cursor-pointer"
              >
                +
              </button>
            </div>

            <div className="bg-gray-50 border rounded-2xl p-4 space-y-2">
              <h3 className="text-sm font-semibold text-gray-900">
                Specifications
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Category: {product.category}</p>
                <p>• Material: Premium Quality Wood</p>
                <p>• Warranty: 2 Years</p>
                <p>• Delivery: Free Home Delivery</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  toast.success("Added to cart!");
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-transparent text-black border border-gray-900 cursor-pointer py-3 rounded-xl hover:text-white hover:border-none hover:bg-[#C5A059] transition"
              >
                🛒 Add to Cart
              </button>
              <button 
                onClick={() => {
                  setDirectPurchase(product, quantity);
                  router.push("/checkout");
                }}
                className="flex-1 flex items-center justify-center bg-transparent border border-gray-900 text-black py-3 rounded-xl font-medium hover:text-white hover:border-transparent hover:bg-[#C5A059] transition"
              >
                Buy Now
              </button>
              <button className="w-11 h-11 border rounded-xl hover:bg-red-50 cursor-pointer">
                ❤️
              </button>
              <button className="w-11 h-11 border rounded-xl hover:bg-gray-100 cursor-pointer">
                🔗
              </button>
            </div>
          </div>
        </div>

        {/* Description & Reviews Section */}
        <div className="mt-28">
      {/* Tabs Header */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-4 text-lg font-medium cursor-pointer transition-colors ${activeTab === "description" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-400"}`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-4 text-lg font-medium cursor-pointer transition-colors ${activeTab === "reviews" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-400"}`}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "description" ? (
        <div className="text-gray-600 leading-8 text-lg">
          {product.description || "Premium quality furniture crafted for comfort and style."}
        </div>
      ) : (
        <div className="space-y-12">
          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Share Your Experience</h2>
            <form onSubmit={handleReviewSubmit} className="space-y-5">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newReview.email}
                onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
              />
              <textarea
                required
                rows={5}
                placeholder="Write your review..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full p-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none resize-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C5A059] to-[#E3C98B] text-white font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* List */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
            {reviews.length === 0 ? (
              <div className="bg-gray-50 border border-dashed border-gray-200 rounded-[28px] p-12 text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-800">No Reviews Yet</h3>
              </div>
            ) : (
              <div className="grid gap-5">
                {reviews.map((r) => (
                  <div key={r.id} className="bg-white border border-gray-100 rounded-[28px] p-6 shadow-sm">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E3C98B] flex items-center justify-center text-white font-bold text-lg shrink-0">
                          {r.email.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{r.email}</h4>
                          <p className="text-gray-600 mt-1">{r.comment}</p>
                        </div>
                      </div>
                      <button onClick={() => deleteReview(r.id)} className="text-red-500 cursor-pointer hover:bg-red-50 px-4 py-2 rounded-xl transition-all">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-28">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <span className="inline-block px-4 py-2 bg-[#C5A059]/10 text-[#C5A059] rounded-full text-sm font-medium mb-3">Recommended For You</span>
                <h2 className="text-4xl font-bold text-gray-900">Related Products</h2>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer">←</button>
                <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:bg-[#C5A059] hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer">→</button>
              </div>
            </div>
            <div ref={sliderRef} className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group min-w-[340px] bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 snap-start">
                  <div className="relative h-80 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                    <Link href={`/product/${p.id}`}>
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    </Link>
                  </div>
                  <div className="p-6">
                    <Link href={`/product/${p.id}`}>
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#C5A059] transition mb-2">{p.name}</h3>
                    </Link>
                    <p className="text-3xl font-black bg-gradient-to-r from-[#C5A059] to-[#E3C98B] bg-clip-text text-transparent mb-6">{p.price}</p>
                    <div className="flex gap-3">
                      <button onClick={() => { addToCart(p, 1); toast.success("Added to cart!"); }} className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#C5A059] to-[#E3C98B] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">Add to Cart</button>
                      <Link href={`/product/${p.id}`} className="flex-1">
                        <button className="w-full py-3 rounded-2xl border border-gray-200 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">View</button>
                      </Link>
                    </div>
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