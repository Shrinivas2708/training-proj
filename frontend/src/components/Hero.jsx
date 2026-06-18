import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cosmic-900 to-slate-950 py-24 text-white">
      {/* Decorative Orbs */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cosmic-600/20 blur-[100px] animate-float"></div>
      <div className="absolute right-0 top-12 h-[450px] w-[450px] rounded-full bg-cyber-500/15 blur-[120px] animate-float-delayed"></div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Banner Tag */}
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/40 px-4 py-2 text-sm font-semibold text-cosmic-300 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-pulse"></span>
          ✨ Summer Sale - Up to 50% Off
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
          Discover <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-cosmic-400 via-cyber-400 to-neon-cyan bg-clip-text text-transparent">
            Smart Shopping
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Browse thousands of premium products curated just for you. Enjoy fast delivery, encrypted checkouts, and 100% satisfaction guaranteed.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-slate-950 shadow-lg shadow-white/5 transition duration-300 hover:bg-slate-100 hover:scale-[1.03] active:scale-95"
          >
            Shop Now
            <FaArrowRight className="text-sm transition duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-slate-800/40 hover:scale-[1.03] hover:border-slate-600 active:scale-95"
          >
            Explore Catalog
          </Link>
        </div>

        {/* Features tag */}
        <p className="mt-10 text-sm text-slate-400">
          ✅ Free shipping on orders above ₹5,000 • Easy 30-day returns
        </p>
      </div>
    </section>
  );
}

export default Hero;
