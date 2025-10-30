import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Haven & Home</h3>
            <p className="text-sm text-muted-foreground">
              Curating beautiful, timeless pieces for your home since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Living Room</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Bedroom</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Dining</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Haven & Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;