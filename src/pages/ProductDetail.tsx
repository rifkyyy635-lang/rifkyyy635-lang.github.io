import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ShoppingCart, ArrowLeft, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productSofa from "@/assets/product-sofa.jpg";
import productTable from "@/assets/product-table.jpg";
import productBed from "@/assets/product-bed.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productChair from "@/assets/product-chair.jpg";
import productCoffeeTable from "@/assets/product-coffee-table.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = products.find(p => p.id === Number(id));

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

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const productImage = productImages[(product.id - 1) % productImages.length];

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={productImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-semibold text-foreground">${product.price.toFixed(2)}</p>
            </div>

            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8 space-y-4">
              {product.dimensions && (
                <div>
                  <h3 className="font-semibold mb-2">Dimensions</h3>
                  <p className="text-muted-foreground">{product.dimensions}</p>
                </div>
              )}
              
              {product.material && (
                <div>
                  <h3 className="font-semibold mb-2">Material</h3>
                  <p className="text-muted-foreground">{product.material}</p>
                </div>
              )}

              <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;