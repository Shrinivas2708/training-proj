import { Link } from "react-router-dom";
import { FaCheckCircle, FaBoxOpen, FaTruck, FaHome } from "react-icons/fa";
import Navbar from "../assets/components/navbar/Navbar";
import Footer from "../components/Footer";

function Orders() {
  // Mock order data
  const orders = [
    {
      id: "12345",
      date: "June 17, 2026",
      status: "Delivered",
      statusCode: 4, // 1: Ordered, 2: Shipped, 3: Out for Delivery, 4: Delivered
      items: [
        { name: "Wireless Headphones", quantity: 1, price: 2999, iconName: "🎧" },
        { name: "Gaming Mouse", quantity: 2, price: 1499, iconName: "🖱️" }
      ],
      total: 5997,
      deliveryAddress: "123 Main St, New Delhi, 110001",
    },
    {
      id: "12346",
      date: "June 18, 2026",
      status: "In Transit",
      statusCode: 2,
      items: [
        { name: "Mechanical Keyboard", quantity: 1, price: 5999, iconName: "⌨️" }
      ],
      total: 5999,
      deliveryAddress: "456 Park Avenue, New Delhi, 110012",
    }
  ];

  const statusSteps = [
    { code: 1, label: "Ordered", icon: <FaBoxOpen /> },
    { code: 2, label: "Shipped", icon: <FaTruck /> },
    { code: 3, label: "In Transit", icon: <FaTruck /> },
    { code: 4, label: "Delivered", icon: <FaCheckCircle /> }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 justify-between">
      <Navbar />

      <main className="flex-1 py-12 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">My Orders</h1>
            <p className="mt-2 text-sm text-slate-500">Track and view history of your past orders</p>
          </div>

          {orders.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-16 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-3xl shadow-inner text-slate-400">
                <FaBoxOpen />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-slate-800">No orders found</h2>
              <p className="mt-2 text-slate-500 max-w-sm">
                It looks like you haven't placed any orders yet. Explore our products page to place an order.
              </p>
              <Link
                to="/products"
                className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow hover:bg-cosmic-600 transition duration-300"
              >
                Go to Products
              </Link>
            </div>
          ) : (
            /* Orders List */
            <div className="space-y-8">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8"
                >
                  {/* Order Top Panel */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Order #{order.id}</h2>
                      <p className="text-xs text-slate-400 font-semibold mt-1">Placed on {order.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-500">Status:</span>
                      <span
                        className={`inline-flex rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider ${
                          order.status === "Delivered"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>

                  {/* Order Items List */}
                  <div className="py-6 space-y-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-2xl border border-slate-100">
                          {item.iconName}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-slate-800 truncate">{item.name}</p>
                          <p className="text-xs text-slate-400 font-semibold mt-0.5">Quantity: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-extrabold text-slate-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  {/* Progressive Tracking Steps */}
                  <div className="border-t border-slate-100 py-8">
                    <div className="relative flex items-center justify-between max-w-xl mx-auto">
                      {/* Tracking Line */}
                      <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-slate-100">
                        <div
                          className="h-full bg-gradient-to-r from-cosmic-500 to-cyber-500 transition-all duration-500"
                          style={{
                            width: `${((order.statusCode - 1) / (statusSteps.length - 1)) * 100}%`
                          }}
                        ></div>
                      </div>

                      {/* Steps Indicator circles */}
                      {statusSteps.map((step) => {
                        const isCompleted = order.statusCode >= step.code;
                        const isActive = order.statusCode === step.code;
                        return (
                          <div key={step.code} className="relative z-10 flex flex-col items-center">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow transition duration-300 ${
                                isCompleted
                                  ? "bg-gradient-to-r from-cosmic-600 to-cyber-500 text-white"
                                  : "bg-white border border-slate-200 text-slate-400"
                              } ${isActive ? "scale-110 ring-4 ring-indigo-100" : ""}`}
                            >
                              {step.icon}
                            </div>
                            <span
                              className={`absolute top-12 whitespace-nowrap text-[10px] font-black uppercase tracking-wider ${
                                isCompleted ? "text-slate-800" : "text-slate-400"
                              }`}
                            >
                              {step.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary Block Footer */}
                  <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-xs text-slate-400">
                      <span className="font-bold text-slate-500">Shipping Address: </span>
                      {order.deliveryAddress}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-bold uppercase">Total Amount</p>
                      <p className="text-2xl font-black text-slate-900 mt-1">₹{order.total.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Orders;