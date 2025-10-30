export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  dimensions?: string;
  material?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Linen Sofa",
    price: 1899,
    image: "/placeholder.svg",
    category: "Living Room",
    description: "A beautifully crafted sofa featuring clean lines and premium linen upholstery. Perfect for contemporary living spaces.",
    features: ["Premium linen fabric", "Solid wood frame", "Deep seating comfort", "Removable cushions"],
    dimensions: "84\"W x 36\"D x 33\"H",
    material: "Linen upholstery with hardwood frame"
  },
  {
    id: 2,
    name: "Rustic Oak Dining Table",
    price: 1299,
    image: "/placeholder.svg",
    category: "Dining",
    description: "Handcrafted dining table made from reclaimed oak wood. Each piece tells its own unique story.",
    features: ["Reclaimed oak wood", "Seats 6-8 people", "Natural finish", "Handcrafted details"],
    dimensions: "72\"L x 40\"W x 30\"H",
    material: "Reclaimed oak wood"
  },
  {
    id: 3,
    name: "Upholstered Bed Frame",
    price: 1599,
    image: "/placeholder.svg",
    category: "Bedroom",
    description: "Elegant upholstered bed frame with tufted headboard. Creates a luxurious focal point in any bedroom.",
    features: ["Tufted headboard", "Button detail", "Sturdy frame", "Easy assembly"],
    dimensions: "Queen: 65\"W x 87\"L",
    material: "Velvet upholstery with wood frame"
  },
  {
    id: 4,
    name: "Ceramic Table Lamp",
    price: 189,
    image: "/placeholder.svg",
    category: "Lighting",
    description: "Artisan-crafted ceramic table lamp with textured finish. Adds warmth and character to any space.",
    features: ["Handmade ceramic base", "Linen shade", "3-way switch", "Unique texture"],
    dimensions: "16\"H x 8\"W",
    material: "Ceramic with linen shade"
  },
  {
    id: 5,
    name: "Velvet Accent Chair",
    price: 699,
    image: "/placeholder.svg",
    category: "Living Room",
    description: "Sophisticated accent chair upholstered in luxurious velvet. Perfect for creating cozy reading nooks.",
    features: ["Plush velvet fabric", "Comfortable padding", "Solid wood legs", "Classic silhouette"],
    dimensions: "30\"W x 32\"D x 35\"H",
    material: "Velvet upholstery with wood legs"
  },
  {
    id: 6,
    name: "Marble Coffee Table",
    price: 899,
    image: "/placeholder.svg",
    category: "Living Room",
    description: "Contemporary coffee table featuring genuine marble top and brass-finished legs. A statement piece for modern homes.",
    features: ["Genuine marble top", "Brass-finished legs", "Modern design", "Easy to clean"],
    dimensions: "48\"W x 24\"D x 18\"H",
    material: "Marble top with metal base"
  },
  {
    id: 7,
    name: "Woven Pendant Light",
    price: 249,
    image: "/placeholder.svg",
    category: "Lighting",
    description: "Natural rattan pendant light that brings organic texture and warm illumination to your space.",
    features: ["Natural rattan weave", "Adjustable height", "Warm ambient light", "Bohemian style"],
    dimensions: "20\" diameter x 18\"H",
    material: "Natural rattan"
  },
  {
    id: 8,
    name: "Leather Office Chair",
    price: 799,
    image: "/placeholder.svg",
    category: "Office",
    description: "Executive office chair with premium leather upholstery and ergonomic design. Style meets comfort.",
    features: ["Genuine leather", "Ergonomic support", "Adjustable height", "360° swivel"],
    dimensions: "26\"W x 28\"D x 42\"H",
    material: "Leather with metal base"
  },
  {
    id: 9,
    name: "Solid Wood Bookshelf",
    price: 599,
    image: "/placeholder.svg",
    category: "Storage",
    description: "Timeless bookshelf crafted from solid walnut wood. Features adjustable shelves for versatile storage.",
    features: ["Solid walnut wood", "Adjustable shelves", "Open back design", "Handcrafted"],
    dimensions: "36\"W x 14\"D x 72\"H",
    material: "Solid walnut wood"
  }
];