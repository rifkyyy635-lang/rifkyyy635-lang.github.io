import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import productSofa from "@/assets/product-sofa.jpg";
import productTable from "@/assets/product-table.jpg";
import productBed from "@/assets/product-bed.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productChair from "@/assets/product-chair.jpg";
import productCoffeeTable from "@/assets/product-coffee-table.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productImages = [
    productSofa,
    productTable,
    productBed,
    productLamp,
    productChair,
    productCoffeeTable,
    productSofa,
    productTable,
    productBed
  ];

  const productsWithImages = products.map((product, index) => ({
    ...product,
    image: productImages[index % productImages.length]
  }));

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "All" 
    ? productsWithImages 
    : productsWithImages.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of furniture and home décor
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-background sticky top-[73px] z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Shop;