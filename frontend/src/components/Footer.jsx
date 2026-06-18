import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-cosmic-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Newsletter Section */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 border-b border-slate-800 pb-12 lg:flex-row">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-slate-400">Get updates on new collections, flash sales, and exclusive offers.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-cosmic-500 focus:outline-none focus:ring-1 focus:ring-cosmic-500"
            />
            <button
              type="submit"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cosmic-600 to-cyber-500 text-white shadow-lg shadow-indigo-500/10 hover:opacity-90 active:scale-95 transition-all"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-black text-white bg-gradient-to-r from-cosmic-400 to-neon-cyan bg-clip-text text-transparent">
              ShopSphere
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Your one-stop destination for premium products. Shop smart, save more, and enjoy the best deals online.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-xl text-slate-300 transition hover:bg-cosmic-600 hover:text-white glow-indigo">
                <FaFacebook />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-xl text-slate-300 transition hover:bg-cosmic-600 hover:text-white glow-indigo">
                <FaTwitter />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-xl text-slate-300 transition hover:bg-cosmic-600 hover:text-white glow-indigo">
                <FaInstagram />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-xl text-slate-300 transition hover:bg-cosmic-600 hover:text-white glow-indigo">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-white text-xs">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/" className="text-slate-400 transition hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 transition hover:text-white hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-slate-400 transition hover:text-white hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-slate-400 transition hover:text-white hover:underline">
                  Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-white text-xs">Support</h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#" className="text-slate-400 transition hover:text-white hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition hover:text-white hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition hover:text-white hover:underline">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition hover:text-white hover:underline">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-white text-xs">Contact Info</h3>
            <ul className="mt-6 space-y-3 text-slate-400">
              <li className="flex items-center gap-2">📧 support@shopsphere.com</li>
              <li className="flex items-center gap-2">📞 +91 98765 43210</li>
              <li className="flex items-center gap-2">📍 123 Shopping St, Delhi 110001</li>
              <li className="flex items-center gap-2">🕐 Mon - Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row text-sm">
          <p className="text-slate-500">
            &copy; {currentYear} ShopSphere. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
