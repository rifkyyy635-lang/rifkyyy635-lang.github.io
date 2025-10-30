import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-home.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productTable from "@/assets/product-table.jpg";
import productBed from "@/assets/product-bed.jpg";

const Home = () => {
  const productImages = [productSofa, productTable, productBed];
  const featuredProducts = products.slice(0, 3).map((product, index) => ({
    ...product,
    image: productImages[index]
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Beautiful home interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        <div className="relative z-10 container mx-auto px-4 text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Create Your Perfect Space
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Discover timeless furniture and décor that transforms your house into a home.
          </p>
          <Link to="/shop">
            <Button size="lg" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Room</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Living Room", "Bedroom", "Dining"].map((category) => (
            <Link
              key={category}
              to="/shop"
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces that combine timeless design with modern comfort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Crafted with Care</h2>
            <p className="text-muted-foreground mb-4">
              At Haven & Home, we believe your living space should reflect your unique story. 
              Every piece in our collection is carefully selected for its quality, craftsmanship, 
              and timeless appeal.
            </p>
            <p className="text-muted-foreground mb-6">
              From sustainably sourced materials to artisan-crafted details, we're committed 
              to bringing you furniture that's as beautiful as it is durable.
            </p>
            <Link to="/about">
              <Button variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-muted" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;