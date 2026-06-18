import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../assets/components/common/AuthLayout";
import { FaEnvelope, FaLock } from "react-icons/fa";
import authService from "../utils/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await authService.login({ email, password });
      const token = response.data.token;
      login(token);
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <AuthLayout>
      <div className="rounded-3xl border border-slate-200/50 bg-white p-10 shadow-xl shadow-slate-100/50 w-full">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Welcome Back</h2>
        <p className="text-slate-500 mb-8 font-medium">Login to continue shopping</p>

        {error && <p className="mb-6 rounded-xl bg-red-55/40 border border-red-100 px-4 py-3 text-sm text-red-700 font-semibold">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-bold text-slate-700">Email Address</label>
            <div className="flex items-center border border-slate-200 bg-slate-50 rounded-xl px-3.5 focus-within:border-cosmic-500 focus-within:bg-white focus-within:ring-1 focus-within:ring-cosmic-500 transition duration-200">
              <FaEnvelope className="text-slate-400 text-sm mr-2.5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full py-3.5 bg-transparent outline-none text-slate-850 placeholder-slate-400 text-sm font-medium"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-slate-700">Password</label>
            <div className="flex items-center border border-slate-200 bg-slate-50 rounded-xl px-3.5 focus-within:border-cosmic-500 focus-within:bg-white focus-within:ring-1 focus-within:ring-cosmic-500 transition duration-200">
              <FaLock className="text-slate-400 text-sm mr-2.5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full py-3.5 bg-transparent outline-none text-slate-850 placeholder-slate-400 text-sm font-medium"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-cosmic-600 to-cyber-500 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-500/10 hover:opacity-90 active:scale-[0.98] transition duration-350">
            Login
          </button>
        </form>

        <p className="text-center mt-8 text-sm font-semibold text-slate-500">
          Don't have an account?
          <Link to="/register" className="text-cosmic-600 hover:text-cosmic-700 font-extrabold ml-1.5 transition">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
