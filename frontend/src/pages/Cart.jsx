import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag, FaGift } from "react-icons/fa";
import Navbar from "../assets/components/navbar/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const navigate = useNavigate();
  // Dummy state for cart items
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      originalPrice: 4999,
      category: "Electronics",
      quantity: 1,
      iconName: "🎧",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 1499,
      originalPrice: 2499,
      category: "Gaming",
      quantity: 2,
      iconName: "🖱️",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.1) : 0;
  const freeShippingThreshold = 5000;
  const deliveryFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 99;
  const total = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "SPHERE10") {
      setDiscountApplied(true);
      alert("10% discount applied!");
    } else {
      alert("Invalid code. Try 'SPHERE10'");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 justify-between">
      <Navbar />

      <main className="flex-1 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Shopping Cart</h1>
              <p className="mt-2 text-sm text-slate-500">
                You have <span className="font-bold text-slate-800">{items.reduce((c, i) => c + i.quantity, 0)}</span> items in your cart
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-cosmic-600 hover:text-cosmic-700 transition"
            >
              <FaArrowLeft className="text-xs" />
              Continue Shopping
            </Link>
          </div>

          {items.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-16 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-3xl shadow-inner text-slate-400">
                <FaShoppingBag />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-slate-800">Your cart is empty</h2>
              <p className="mt-2 text-slate-500 max-w-sm">
                Before proceed to checkout, you must add some products to your shopping cart.
              </p>
              <Link
                to="/products"
                className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow hover:bg-cosmic-600 transition duration-300"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            /* Cart Grid */
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    {/* Icon visual */}
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-4xl border border-slate-100">
                      {item.iconName}
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-bold text-slate-800 hover:text-cosmic-600 transition duration-200">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400 font-semibold uppercase tracking-wider">{item.category}</p>
                      
                      {/* Price Mobile */}
                      <div className="mt-2.5 sm:hidden font-extrabold text-slate-800">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 active:scale-95"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-10 text-center text-sm font-bold text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 active:scale-95"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>

                    {/* Price Desktop */}
                    <div className="hidden sm:block text-right min-w-[100px]">
                      <p className="font-extrabold text-slate-900 text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                      {item.originalPrice && (
                        <p className="text-xs text-slate-400 line-through mt-0.5">₹{(item.originalPrice * item.quantity).toLocaleString()}</p>
                      )}
                    </div>

                    {/* Remove Action */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                ))}

                {/* Free Shipping Meter */}
                {subtotal < freeShippingThreshold && (
                  <div className="rounded-2xl border border-slate-200/60 bg-white p-5 text-sm text-slate-600 shadow-sm">
                    <p className="font-medium text-slate-700">
                      Add <span className="font-bold text-cosmic-600">₹{(freeShippingThreshold - subtotal).toLocaleString()}</span> more to get <span className="font-bold text-emerald-600">FREE delivery</span>!
                    </p>
                    <div className="mt-3.5 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cosmic-500 to-cyber-500 transition-all duration-500"
                        style={{ width: `${(subtotal / freeShippingThreshold) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Order Summary Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

                  {/* Calculations breakdown */}
                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal</span>
                      <span className="font-bold text-slate-800">₹{subtotal.toLocaleString()}</span>
                    </div>

                    {discountApplied && (
                      <div className="flex justify-between text-slate-500">
                        <span className="flex items-center gap-1.5 text-cosmic-600 font-semibold">
                          <FaGift className="text-xs" /> Promo Code Applied
                        </span>
                        <span className="font-bold text-cosmic-600">-₹{discountAmount.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-slate-500">
                      <span>Delivery Fee</span>
                      <span className={deliveryFee === 0 ? "text-emerald-600 font-bold" : "font-bold text-slate-800"}>
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                      </span>
                    </div>

                    <div className="border-t border-slate-100 my-4 pt-4 flex justify-between text-base">
                      <span className="font-bold text-slate-900">Total</span>
                      <span className="text-2xl font-black text-slate-900">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Promo Input */}
                  <form onSubmit={handleApplyPromo} className="mt-8 border-t border-slate-100 pt-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="e.g. SPHERE10"
                        disabled={discountApplied}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:outline-none focus:ring-1 focus:ring-cosmic-500 disabled:bg-slate-50"
                      />
                      <button
                        type="submit"
                        disabled={discountApplied}
                        className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:border-cosmic-500 hover:text-cosmic-600 transition disabled:opacity-50"
                      >
                        Apply
                      </button>
                    </div>
                    {!discountApplied && (
                      <p className="mt-2.5 text-[10px] font-semibold text-slate-400">
                        💡 Use code <span className="font-bold text-cosmic-600">SPHERE10</span> to get 10% off.
                      </p>
                    )}
                  </form>

                  {/* Checkout Button */}
                  <button
                    onClick={() => navigate("/checkout")}
                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cosmic-600 to-cyber-500 py-4 text-center font-bold text-white shadow-lg shadow-indigo-500/15 hover:opacity-90 active:scale-98 transition-all"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;