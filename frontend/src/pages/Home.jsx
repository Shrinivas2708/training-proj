import Navbar from "../assets/components/navbar/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import FeaturedBanner from "../components/FeaturedBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      {/* <Hero /> */}

      {/* Search Bar */}
      <SearchBar />

      {/* Categories Section */}
      <Categories />

      {/* Trending Products */}
      <ProductGrid title="Trending Products" />

      {/* Featured Banner */}
      <FeaturedBanner />

      {/* Featured Products */}
      <ProductGrid title="Featured Products" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;