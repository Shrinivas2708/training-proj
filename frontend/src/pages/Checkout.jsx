import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../assets/components/navbar/Navbar";
import Footer from "../components/Footer";

function Checkout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Dummy cart items
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      quantity: 1,
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 1499,
      quantity: 2,
    },
    {
      id: 3,
      name: "USB-C Cable",
      price: 499,
      quantity: 1,
    },
  ];

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 5000 ? 0 : 99;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        navigate("/orders", { replace: true });
      }, 1500);
    } catch (error) {
      setLoading(false);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 justify-between">
      <Navbar />

      <main className="flex-1 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Checkout</h1>
            <p className="mt-2 text-sm text-slate-500">Complete your purchase details below</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* LEFT SIDE - Shipping Information */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-200/50 bg-white p-8 shadow-sm">
                <div className="mb-8 flex items-center gap-3">
                  <FaTruck className="text-2xl text-cosmic-600" />
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Shipping Information</h2>
                </div>

                <form className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 transition"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 transition"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Delivery Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 transition"
                    />
                  </div>

                  {/* City, State, Pincode */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New Delhi"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Delhi"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="110001"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 transition"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT SIDE - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-3xl border border-slate-200/50 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <FaMapMarkerAlt className="text-2xl text-cosmic-600" />
                  <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
                </div>

                {/* Product List */}
                <div className="mb-6 space-y-4 max-h-56 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                        <p className="text-xs text-slate-400 font-semibold mt-0.5">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-extrabold text-slate-800 text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-800">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Delivery Fee</span>
                    <span className={deliveryFee === 0 ? "text-emerald-600 font-bold" : "font-bold text-slate-800"}>
                      {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="my-6 border-t border-slate-100 pt-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-base font-bold text-slate-900">Total</span>
                    <span className="text-2xl font-black text-slate-900">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-cosmic-600 to-cyber-500 py-4 text-center font-bold text-white shadow-lg shadow-indigo-500/15 hover:opacity-90 active:scale-98 transition disabled:bg-slate-300"
                >
                  {loading ? "Processing..." : "Place Order"}
                </button>

                <p className="mt-4 text-center text-xs text-slate-400 leading-relaxed">
                  By placing an order, you agree to our terms of service and refund policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Checkout;
