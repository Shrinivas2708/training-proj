import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Products" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "gaming", label: "Gaming" },
    { value: "books", label: "Books" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
  };

  return (
    <div className="bg-slate-50 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-slate-200/50 bg-white p-4 shadow-sm">
          <form onSubmit={handleSearch} className="flex flex-col gap-4 sm:flex-row">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products, brands, and more..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 pl-12 text-slate-900 placeholder-slate-400 transition focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Category Filter */}
            <div className="relative min-w-[160px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 pr-10 text-slate-700 transition focus:border-cosmic-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cosmic-500 cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <FaFilter className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-cosmic-600 to-cyber-500 px-8 py-3.5 font-bold text-white shadow-md shadow-indigo-500/10 transition duration-300 hover:opacity-90 active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
