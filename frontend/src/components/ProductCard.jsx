import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaEye } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Section */}
      <div className="relative h-52 overflow-hidden bg-slate-50">
        <div className="flex h-full items-center justify-center text-6xl text-slate-300 transition-transform duration-500 group-hover:scale-110">
          {product.icon}
        </div>

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-xl bg-slate-900/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {product.category}
        </span>

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute right-4 top-4 rounded-xl bg-red-500 px-2.5 py-1 text-xs font-bold text-white glow-indigo">
            -{product.discount}%
          </span>
        )}

        {/* Hover Overlay Panel */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 ${isHovered ? "opacity-100" : "pointer-events-none"}`}>
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-50 active:scale-95 transition-all">
            <FaShoppingCart />
            Add to Cart
          </button>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-cosmic-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-cosmic-700 active:scale-95 transition-all"
          >
            <FaEye />
            Quick View
          </Link>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-slate-800 transition duration-200 group-hover:text-cosmic-600 line-clamp-1">
          {product.name}
        </h3>

        {/* Ratings & Reviews */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <div className="flex items-center text-amber-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(product.rating) ? "" : "text-slate-200"} />
            ))}
          </div>
          <span className="text-xs text-slate-500 font-semibold">({product.reviews})</span>
        </div>

        {/* Pricing */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-xl font-extrabold text-slate-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="mt-5 flex gap-2">
          <button className="flex-1 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white transition hover:bg-cosmic-600 active:scale-95">
            Add to Cart
          </button>
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-xl border border-slate-200 py-2.5 text-center text-xs font-bold text-slate-700 transition hover:bg-slate-50 active:scale-95"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
