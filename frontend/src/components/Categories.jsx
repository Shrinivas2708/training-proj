import { FaLaptop, FaTshirt, FaGamepad, FaBook, FaHeadphones, FaShoePrints } from "react-icons/fa";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { id: 1, name: "Electronics", icon: FaLaptop, color: "bg-blue-50 text-blue-600 border-blue-100", hoverShadow: "hover:shadow-blue-500/10" },
    { id: 2, name: "Fashion", icon: FaTshirt, color: "bg-pink-50 text-pink-600 border-pink-100", hoverShadow: "hover:shadow-pink-500/10" },
    { id: 3, name: "Gaming", icon: FaGamepad, color: "bg-purple-50 text-purple-600 border-purple-100", hoverShadow: "hover:shadow-purple-500/10" },
    { id: 4, name: "Books", icon: FaBook, color: "bg-green-50 text-green-600 border-green-100", hoverShadow: "hover:shadow-green-500/10" },
    { id: 5, name: "Accessories", icon: FaHeadphones, color: "bg-yellow-50 text-yellow-600 border-yellow-100", hoverShadow: "hover:shadow-yellow-500/10" },
    { id: 6, name: "Shoes", icon: FaShoePrints, color: "bg-orange-50 text-orange-600 border-orange-100", hoverShadow: "hover:shadow-orange-500/10" },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Shop by Category</h2>
          <p className="mt-3 text-slate-500">Explore our wide range of products across different categories</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to="/products"
                className={`group rounded-2xl border border-slate-200/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${category.hoverShadow}`}
              >
                <div className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border text-2xl transition-all duration-300 group-hover:scale-110 ${category.color}`}>
                  <IconComponent />
                </div>
                <h3 className="font-bold text-slate-800 transition group-hover:text-cosmic-600">{category.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
