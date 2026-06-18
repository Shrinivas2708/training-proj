import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";

function FeaturedBanner() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-cosmic-950 to-cyber-950 p-12 text-white md:p-16 border border-slate-800/80 shadow-xl shadow-slate-950/20">
          {/* Neon Glow Circle */}
          <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/3 rounded-full bg-cyber-500/10 blur-[100px] animate-pulse-slow"></div>
          <div className="absolute -left-12 -bottom-12 h-[300px] w-[300px] rounded-full bg-cosmic-600/10 blur-[80px]"></div>

          <div className="relative z-10">
            {/* Flash Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4.5 py-2 text-red-400 backdrop-blur-md">
              <FaFire className="text-lg animate-bounce" />
              <span className="text-xs font-black uppercase tracking-wider">Flash Sale</span>
            </div>

            <h2 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Limited Time Offer
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
              Get up to <span className="text-neon-cyan font-bold">50% off</span> on premium items. This offer is valid for 48 hours only. Don't miss out!
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cosmic-600 to-cyber-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:opacity-90 active:scale-95"
              >
                Shop Now
              </Link>
              <button className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-850/40 px-8 py-3.5 font-bold text-slate-300 backdrop-blur-sm transition duration-300 hover:bg-slate-800/60 hover:text-white hover:border-slate-600 active:scale-95">
                Learn More
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="mt-12 grid grid-cols-4 gap-4 sm:max-w-md">
              {[
                { label: "Days", value: "02" },
                { label: "Hours", value: "14" },
                { label: "Mins", value: "36" },
                { label: "Secs", value: "42" },
              ].map((time) => (
                <div key={time.label} className="text-center">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-2 py-3 text-2xl font-black font-mono tracking-tight text-white backdrop-blur-sm sm:px-4 sm:py-4 sm:text-4xl glow-indigo">
                    {time.value}
                  </div>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">{time.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBanner;
