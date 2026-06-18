import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2); // Dummy cart count
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/75 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to={isAuthenticated ? "/home" : "/"}
            className="flex items-center gap-2 text-2xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-cosmic-600 via-cyber-500 to-neon-cyan bg-clip-text text-transparent transition hover:opacity-80">
              ShopSphere
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            {isAuthenticated ? (
              <>
                <Link
                  to="/home"
                  className={`relative font-semibold text-sm transition duration-200 hover:text-cosmic-600 ${
                    isActive("/home") ? "text-cosmic-600" : "text-slate-600"
                  }`}
                >
                  Home
                  {isActive("/home") && (
                    <span className="absolute -bottom-7 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-500 to-cyber-500"></span>
                  )}
                </Link>
                <Link
                  to="/products"
                  className={`relative font-semibold text-sm transition duration-200 hover:text-cosmic-600 ${
                    isActive("/products") ? "text-cosmic-600" : "text-slate-600"
                  }`}
                >
                  Products
                  {isActive("/products") && (
                    <span className="absolute -bottom-7 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-500 to-cyber-500"></span>
                  )}
                </Link>
                <Link
                  to="/orders"
                  className={`relative font-semibold text-sm transition duration-200 hover:text-cosmic-600 ${
                    isActive("/orders") ? "text-cosmic-600" : "text-slate-600"
                  }`}
                >
                  Orders
                  {isActive("/orders") && (
                    <span className="absolute -bottom-7 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-500 to-cyber-500"></span>
                  )}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className={`relative font-semibold text-sm transition duration-200 hover:text-cosmic-600 ${
                    isActive("/") ? "text-cosmic-600" : "text-slate-600"
                  }`}
                >
                  Home
                  {isActive("/") && (
                    <span className="absolute -bottom-7 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-500 to-cyber-500"></span>
                  )}
                </Link>
                <a
                  href="#features"
                  className="font-semibold text-sm text-slate-600 transition duration-200 hover:text-cosmic-600"
                >
                  Features
                </a>
              </>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/80 text-xl text-slate-700 transition hover:bg-slate-200/80 hover:text-cosmic-600"
            >
              <FaShoppingCart />
              {isAuthenticated && cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white glow-indigo">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              {isAuthenticated ? (
                <>
                  <button className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200/80 hover:text-cosmic-600">
                    <FaUser />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-red-600 hover:border-red-200"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-bold text-slate-700 transition hover:text-cosmic-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="rounded-xl bg-gradient-to-r from-cosmic-600 to-cyber-500 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl text-slate-700 transition hover:bg-slate-200 lg:hidden"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="space-y-2">
            {isAuthenticated ? (
              <>
                <Link
                  to="/home"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-cosmic-600"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-cosmic-600"
                >
                  Products
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-cosmic-600"
                >
                  Orders
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-cosmic-600"
                >
                  Home
                </Link>
                <a
                  href="#features"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-cosmic-600"
                >
                  Features
                </a>
              </>
            )}
          </div>
          <div className="mt-4 border-t border-slate-200 pt-4">
            {isAuthenticated ? (
              <div className="space-y-2">
                <button className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50">
                  <FaUser />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    logout();
                  }}
                  className="flex w-full items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-red-600"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl py-3 text-center text-base font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-cosmic-600 to-cyber-500 py-3 text-center text-base font-bold text-white shadow-md hover:shadow-indigo-500/20"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
