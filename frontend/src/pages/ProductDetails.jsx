import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart, FaArrowLeft, FaShieldAlt, FaTruck, FaRedo } from "react-icons/fa";
import Navbar from "../assets/components/navbar/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product dataset
  const productData = {
    1: {
      name: "Wireless Headphones",
      price: 2999,
      originalPrice: 4999,
      category: "Electronics",
      rating: 4.5,
      reviewsCount: 128,
      discount: 40,
      description: "Experience premium sound with our advanced active noise-cancelling wireless headphones. Designed with memory foam earcups for ultimate all-day comfort.",
      icon: "🎧",
      specs: [
        { label: "Battery Life", value: "Up to 40 Hours" },
        { label: "Connectivity", value: "Bluetooth 5.2" },
        { label: "Noise Cancelling", value: "Active (ANC)" },
        { label: "Warranty", value: "1 Year Domestic Warranty" }
      ],
      colors: ["Space Gray", "Cosmic Silver", "Cyber Purple"]
    },
    2: {
      name: "Gaming Mouse",
      price: 1499,
      originalPrice: 2499,
      category: "Gaming",
      rating: 4.8,
      reviewsCount: 95,
      discount: 40,
      description: "Level up your gameplay with the ultra-lightweight precision gaming mouse. Features an 16K DPI optical sensor and customizable RGB glowing modes.",
      icon: "🖱️",
      specs: [
        { label: "Sensor Resolution", value: "16,000 DPI" },
        { label: "Buttons", value: "6 Programmable" },
        { label: "Weight", value: "74 grams" },
        { label: "RGB Lighting", value: "Chroma Custom Zones" }
      ],
      colors: ["Core Black", "Cosmic White", "Cyber Pink"]
    }
  };

  // Fallback if ID is invalid
  const product = productData[id] || productData[1];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specs");

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => Math.max(1, q - 1));

  const handleAddToCart = () => {
    alert(`Added ${quantity} × ${product.name} (${selectedColor}) to your cart!`);
    navigate("/cart");
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 justify-between">
      <Navbar />

      <main className="flex-1 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cosmic-600 transition"
            >
              <FaArrowLeft className="text-xs" />
              Back to Catalog
            </Link>
          </div>

          {/* Product details split */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column: Visual Product Showcase */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200/50 bg-white p-12 shadow-sm min-h-[400px]">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-slate-50 text-9xl shadow-inner animate-float border border-slate-100">
                <span className="drop-shadow-lg">{product.icon}</span>
                {product.discount && (
                  <span className="absolute -right-4 -top-4 rounded-2xl bg-red-500 px-3.5 py-1.5 text-sm font-black text-white glow-indigo">
                    -{product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Decorative mini circles */}
              <div className="mt-12 flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <button
                    key={i}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl transition-all ${
                      i === 0 ? "border-cosmic-500 bg-cosmic-50 text-cosmic-600" : "border-slate-200 bg-white text-slate-400 hover:border-slate-300"
                    }`}
                  >
                    {product.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Specs & Buy Portal */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Category Badge */}
                <span className="inline-flex rounded-xl bg-slate-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {product.category}
                </span>

                {/* Title */}
                <h1 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  {product.name}
                </h1>

                {/* Rating review row */}
                <div className="mt-3.5 flex items-center gap-3">
                  <div className="flex items-center text-amber-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? "" : "text-slate-200"} />
                    ))}
                    <span className="ml-1.5 font-bold text-slate-800 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <span className="text-sm font-semibold text-cosmic-600 cursor-pointer hover:underline">
                    {product.reviewsCount} customer reviews
                  </span>
                </div>

                {/* Pricing Block */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-900">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="text-sm font-bold text-emerald-600">
                        Save ₹{(product.originalPrice - product.price).toLocaleString()}
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-relaxed text-slate-500">
                  {product.description}
                </p>

                {/* Variant Color Selector */}
                <div className="mt-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Color</span>
                  <div className="mt-3 flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 active:scale-95 ${
                          selectedColor === color
                            ? "border-cosmic-500 bg-cosmic-50 text-cosmic-600 shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity select increment */}
                <div className="mt-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quantity</span>
                  <div className="mt-3 flex items-center gap-1.5 w-max rounded-xl border border-slate-200 bg-slate-50 p-1">
                    <button
                      onClick={decrementQty}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 active:scale-95"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-slate-800">{quantity}</span>
                    <button
                      onClick={incrementQty}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 active:scale-95"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Buying CTA elements */}
              <div className="mt-10 border-t border-slate-100 pt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cosmic-600 to-cyber-500 py-4 font-bold text-white shadow-lg shadow-indigo-500/15 transition-all hover:opacity-90 active:scale-98"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 rounded-2xl border border-slate-200 bg-white py-4 font-bold text-slate-700 transition hover:bg-slate-50 active:scale-98"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Trust benefits banner */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
                  <div className="flex flex-col items-center gap-1.5">
                    <FaTruck className="text-base text-cosmic-500" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <FaShieldAlt className="text-base text-emerald-500" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <FaRedo className="text-base text-rose-500" />
                    <span>30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabs for Specs & Reviews */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <div className="flex gap-6 border-b border-slate-200 pb-3">
              <button
                onClick={() => setActiveTab("specs")}
                className={`pb-3 text-sm font-bold uppercase tracking-wider transition ${
                  activeTab === "specs" ? "border-b-2 border-cosmic-500 text-cosmic-600" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-3 text-sm font-bold uppercase tracking-wider transition ${
                  activeTab === "reviews" ? "border-b-2 border-cosmic-500 text-cosmic-600" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Reviews ({product.reviewsCount})
              </button>
            </div>

            <div className="py-6">
              {activeTab === "specs" ? (
                <div className="max-w-xl space-y-4">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-2 text-sm border-b border-slate-100 pb-3">
                      <span className="font-bold text-slate-400 uppercase tracking-wide text-xs">{spec.label}</span>
                      <span className="font-semibold text-slate-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">Sanskrti S.</span>
                        <div className="flex text-amber-400 text-xs">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">June 18, 2026</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Absolutely love these wireless headphones! The noise-cancelling is phenomenal and the sound stage is extremely balanced. Worth every rupee!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetails;