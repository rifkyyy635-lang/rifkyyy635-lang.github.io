import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
          <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-lg font-semibold text-foreground">${price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;