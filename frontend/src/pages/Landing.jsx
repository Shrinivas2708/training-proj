import { Link } from "react-router-dom";
import { FaCheckCircle, FaTruck, FaShieldAlt, FaHeadset, FaArrowRight } from "react-icons/fa";
import Navbar from "../assets/components/navbar/Navbar";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cosmic-950 to-slate-950 py-24 text-white">
        {/* Ambient Blur */}
        <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-cosmic-600/15 blur-[100px] animate-float"></div>
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-cyber-500/15 blur-[120px] animate-float-delayed"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm font-semibold text-cosmic-300 backdrop-blur-md">
            ✨ Welcome to ShopSphere
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
            Smart Shopping, <br />
            <span className="bg-gradient-to-r from-cosmic-400 via-cyber-400 to-neon-cyan bg-clip-text text-transparent">
              Better Deals.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Discover thousands of premium products curated just for you. Enjoy fast delivery, encrypted checkouts, and 100% satisfaction guaranteed.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cosmic-600 to-cyber-500 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-95"
            >
              Get Started
              <FaArrowRight className="text-sm" />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-slate-800/40 hover:scale-[1.02] active:scale-95"
            >
              Already a Member
            </Link>
          </div>

          <p className="mt-10 text-xs text-slate-400">
            ✅ Free shipping on orders above ₹5,000 • Secure Payments • 30-day Returns
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Why Choose ShopSphere?</h2>
            <p className="mt-3 text-slate-500">Everything you need for a seamless shopping experience</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaCheckCircle className="text-3xl text-cosmic-500 animate-pulse-slow" />,
                title: "Curated Selection",
                description: "Handpicked products across multiple categories tailored to your style.",
              },
              {
                icon: <FaTruck className="text-3xl text-emerald-500" />,
                title: "Fast Delivery",
                description: "Same-day and next-day delivery options available in metro areas.",
              },
              {
                icon: <FaShieldAlt className="text-3xl text-rose-500" />,
                title: "Secure Payment",
                description: "100% safe transactions protected with advanced payment integrations.",
              },
              {
                icon: <FaHeadset className="text-3xl text-violet-500" />,
                title: "24/7 Support",
                description: "Our dedicated support team is always active and ready to assist you.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200/60 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-800">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-950 py-20 text-white border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "10K+", label: "Premium Products" },
              { number: "50K+", label: "Happy Customers" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Active Support" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-cosmic-400 to-neon-cyan bg-clip-text sm:text-5xl">{stat.number}</div>
                <div className="mt-3 text-sm font-semibold tracking-wider uppercase text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Ready to Start Shopping?</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">Join thousands of customers who shop smart daily on ShopSphere. Create an account now to claim exclusive offers.</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-3.5 font-bold text-white transition duration-300 hover:bg-cosmic-600 active:scale-95 shadow-sm"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 font-bold text-slate-700 transition duration-300 hover:bg-slate-50 active:scale-95 shadow-sm"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
