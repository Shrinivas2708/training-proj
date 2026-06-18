import hero from "../../hero.png";

function AuthLayout({ children }) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* LEFT SIDE - Cosmic Presentation */}
      <div className="relative hidden flex-col justify-between bg-cosmic-950 p-20 text-white lg:flex">
        {/* Glow Orbs */}
        <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-cosmic-600/30 blur-[120px] animate-float"></div>
        <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-cyber-500/20 blur-[130px] animate-float-delayed"></div>

        {/* Top brand */}
        <div className="relative z-10">
          <span className="bg-gradient-to-r from-cosmic-300 via-cyber-400 to-neon-cyan bg-clip-text text-3xl font-black tracking-tight text-transparent">
            ShopSphere
          </span>
        </div>

        {/* Main message */}
        <div className="relative z-10 my-auto max-w-lg">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white xl:text-6xl">
            Smart Shopping, <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Elevated Deals.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Experience next-generation e-commerce powered by modern layouts, interactive designs, and reliable checkouts.
          </p>

          <div className="relative mt-12 flex justify-center">
            <img
              src={hero}
              alt="hero product showcase"
              className="relative z-10 w-[420px] drop-shadow-[0_20px_50px_rgba(99,102,241,0.3)] transition duration-700 hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 flex justify-between text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</span>
          <span>Powered by Spring Boot & MongoDB</span>
        </div>
      </div>

      {/* RIGHT SIDE - Interactive Forms */}
      <div className="relative flex items-center justify-center bg-slate-50 px-6 py-12 sm:px-12 lg:px-20">
        {/* Mobile floating ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl lg:hidden"></div>

        <div className="relative z-10 w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;