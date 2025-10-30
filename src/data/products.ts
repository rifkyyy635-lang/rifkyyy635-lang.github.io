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
    image: "/stock_images/modern_luxury_living_860f7bee.jpg",
    category: "Living Room",
    description: "A beautifully crafted sofa featuring clean lines and premium linen upholstery. Perfect for contemporary living spaces.",
    features: ["Premium linen fabric", "Solid wood frame", "Deep seating comfort", "Removable cushions"],
    dimensions: "84\"W x 36\"D x 33\"H",
    material: "Linen upholstery with hardwood frame"
  },
  {
    id: 2,
    name: "Velvet Accent Chair",
    price: 699,
    image: "/stock_images/modern_luxury_living_284329e9.jpg",
    category: "Living Room",
    description: "Sophisticated accent chair upholstered in luxurious velvet. Perfect for creating cozy reading nooks.",
    features: ["Plush velvet fabric", "Comfortable padding", "Solid wood legs", "Classic silhouette"],
    dimensions: "30\"W x 32\"D x 35\"H",
    material: "Velvet upholstery with wood legs"
  },
  {
    id: 3,
    name: "Marble Coffee Table",
    price: 899,
    image: "/stock_images/modern_luxury_living_4a23d247.jpg",
    category: "Living Room",
    description: "Contemporary coffee table featuring genuine marble top and brass-finished legs. A statement piece for modern homes.",
    features: ["Genuine marble top", "Brass-finished legs", "Modern design", "Easy to clean"],
    dimensions: "48\"W x 24\"D x 18\"H",
    material: "Marble top with metal base"
  },
  {
    id: 4,
    name: "Leather Recliner",
    price: 1599,
    image: "/stock_images/modern_luxury_living_168e3c09.jpg",
    category: "Living Room",
    description: "Premium leather recliner with adjustable positions and built-in footrest. Ultimate comfort meets elegant design.",
    features: ["Genuine leather", "Multiple reclining positions", "Built-in footrest", "360° swivel base"],
    dimensions: "38\"W x 40\"D x 42\"H",
    material: "Top-grain leather with steel mechanism"
  },
  {
    id: 5,
    name: "Mid-Century Sectional",
    price: 2499,
    image: "/stock_images/modern_luxury_living_e5ebfc64.jpg",
    category: "Living Room",
    description: "Spacious sectional sofa with mid-century modern design. Features tufted cushions and tapered wooden legs.",
    features: ["L-shaped design", "Tufted cushions", "Tapered walnut legs", "Seats 5-6 people"],
    dimensions: "108\"W x 68\"D x 33\"H",
    material: "Polyester blend fabric with hardwood frame"
  },
  {
    id: 6,
    name: "Chesterfield Loveseat",
    price: 1299,
    image: "/stock_images/modern_luxury_living_6336507b.jpg",
    category: "Living Room",
    description: "Classic Chesterfield loveseat with deep button tufting and rolled arms. Timeless elegance for any room.",
    features: ["Deep button tufting", "Rolled arms", "Nailhead trim", "Premium upholstery"],
    dimensions: "62\"W x 36\"D x 32\"H",
    material: "Velvet with hardwood frame"
  },
  {
    id: 7,
    name: "Contemporary Ottoman",
    price: 399,
    image: "/stock_images/modern_luxury_living_62f01493.jpg",
    category: "Living Room",
    description: "Versatile ottoman that serves as extra seating, footrest, or coffee table. Features hidden storage compartment.",
    features: ["Hidden storage", "Tufted top", "Wooden legs", "Multi-functional"],
    dimensions: "36\"W x 36\"D x 18\"H",
    material: "Linen fabric with wood frame"
  },
  {
    id: 8,
    name: "Scandinavian Armchair",
    price: 799,
    image: "/stock_images/modern_luxury_living_110ab6f3.jpg",
    category: "Living Room",
    description: "Minimalist armchair with clean Scandinavian design. Features comfortable seat and ergonomic backrest.",
    features: ["Ergonomic design", "Solid wood frame", "Easy to clean", "Lightweight"],
    dimensions: "28\"W x 30\"D x 34\"H",
    material: "Oak wood with fabric cushions"
  },
  {
    id: 9,
    name: "Tufted Bench Sofa",
    price: 1099,
    image: "/stock_images/modern_luxury_living_8427a02c.jpg",
    category: "Living Room",
    description: "Elegant bench-style sofa with channel tufting. Perfect for entryways or as additional living room seating.",
    features: ["Channel tufting", "Bench design", "Metal legs", "Compact size"],
    dimensions: "72\"W x 24\"D x 30\"H",
    material: "Velvet upholstery with metal base"
  },
  {
    id: 10,
    name: "Curved Sofa",
    price: 2199,
    image: "/stock_images/modern_luxury_living_e00ed4c0.jpg",
    category: "Living Room",
    description: "Stunning curved sofa that creates a focal point in any living room. Features plush cushions and modern silhouette.",
    features: ["Curved design", "Plush cushions", "Modern style", "Statement piece"],
    dimensions: "96\"W x 38\"D x 32\"H",
    material: "Boucle fabric with hardwood frame"
  },
  {
    id: 11,
    name: "Rustic Oak Dining Table",
    price: 1299,
    image: "/stock_images/elegant_dining_room__e7a86051.jpg",
    category: "Dining",
    description: "Handcrafted dining table made from reclaimed oak wood. Each piece tells its own unique story.",
    features: ["Reclaimed oak wood", "Seats 6-8 people", "Natural finish", "Handcrafted details"],
    dimensions: "72\"L x 40\"W x 30\"H",
    material: "Reclaimed oak wood"
  },
  {
    id: 12,
    name: "Modern Glass Dining Table",
    price: 999,
    image: "/stock_images/elegant_dining_room__9c2d03c5.jpg",
    category: "Dining",
    description: "Contemporary dining table with tempered glass top and sleek metal base. Creates an airy, modern look.",
    features: ["Tempered glass top", "Chrome base", "Seats 4-6 people", "Easy to clean"],
    dimensions: "60\"L x 36\"W x 30\"H",
    material: "Tempered glass with chrome steel"
  },
  {
    id: 13,
    name: "Farmhouse Dining Set",
    price: 1899,
    image: "/stock_images/elegant_dining_room__ac4e4332.jpg",
    category: "Dining",
    description: "Complete farmhouse dining set with table and 6 chairs. Features distressed finish for authentic rustic charm.",
    features: ["7-piece set", "Distressed finish", "Matching chairs", "Extendable table"],
    dimensions: "78\"L x 42\"W x 30\"H",
    material: "Solid pine wood"
  },
  {
    id: 14,
    name: "Marble Top Dining Table",
    price: 1799,
    image: "/stock_images/elegant_dining_room__e177009c.jpg",
    category: "Dining",
    description: "Luxurious dining table with genuine marble top. Gold-finished legs add a touch of glamour.",
    features: ["Genuine marble top", "Gold metal legs", "Seats 6 people", "Elegant design"],
    dimensions: "72\"L x 42\"W x 30\"H",
    material: "Carrara marble with brass-finished steel"
  },
  {
    id: 15,
    name: "Round Pedestal Table",
    price: 899,
    image: "/stock_images/elegant_dining_room__57e5f276.jpg",
    category: "Dining",
    description: "Classic round dining table with sturdy pedestal base. Perfect for intimate dining experiences.",
    features: ["Round design", "Pedestal base", "Seats 4-5 people", "Space-saving"],
    dimensions: "48\" diameter x 30\"H",
    material: "Solid wood"
  },
  {
    id: 16,
    name: "Industrial Dining Table",
    price: 1199,
    image: "/stock_images/elegant_dining_room__109ce34f.jpg",
    category: "Dining",
    description: "Industrial-style dining table with thick wood top and metal frame. Robust construction meets modern design.",
    features: ["Thick wood top", "Metal frame", "Seats 6-8 people", "Industrial style"],
    dimensions: "84\"L x 40\"W x 30\"H",
    material: "Reclaimed wood with steel frame"
  },
  {
    id: 17,
    name: "Extendable Dining Table",
    price: 1499,
    image: "/stock_images/elegant_dining_room__2e5d8333.jpg",
    category: "Dining",
    description: "Versatile extendable dining table that adapts to your needs. Easily seats 4-10 people when fully extended.",
    features: ["Extendable design", "Self-storing leaf", "Seats 4-10 people", "Smooth mechanism"],
    dimensions: "60-84\"L x 42\"W x 30\"H",
    material: "Solid oak wood"
  },
  {
    id: 18,
    name: "Live Edge Dining Table",
    price: 2199,
    image: "/stock_images/elegant_dining_room__5f14d4cc.jpg",
    category: "Dining",
    description: "Stunning live edge dining table showcasing natural wood beauty. Each table is one-of-a-kind.",
    features: ["Live edge design", "Natural wood grain", "Seats 6-8 people", "Unique piece"],
    dimensions: "78\"L x 40\"W x 30\"H",
    material: "Live edge walnut with steel legs"
  },
  {
    id: 19,
    name: "Trestle Dining Table",
    price: 1099,
    image: "/stock_images/elegant_dining_room__9a462b60.jpg",
    category: "Dining",
    description: "Classic trestle dining table with traditional craftsmanship. Features mortise and tenon joinery.",
    features: ["Trestle base", "Traditional joinery", "Seats 6 people", "Timeless design"],
    dimensions: "72\"L x 38\"W x 30\"H",
    material: "Solid maple wood"
  },
  {
    id: 20,
    name: "Counter Height Dining Set",
    price: 1399,
    image: "/stock_images/elegant_dining_room__79f6568d.jpg",
    category: "Dining",
    description: "Modern counter height dining set perfect for casual dining. Includes table and 4 stools.",
    features: ["Counter height", "5-piece set", "Modern design", "Space-efficient"],
    dimensions: "48\"L x 36\"W x 36\"H",
    material: "Wood composite with metal accents"
  },
  {
    id: 21,
    name: "Upholstered Bed Frame",
    price: 1599,
    image: "/stock_images/bedroom_furniture_be_9e8cf93b.jpg",
    category: "Bedroom",
    description: "Elegant upholstered bed frame with tufted headboard. Creates a luxurious focal point in any bedroom.",
    features: ["Tufted headboard", "Button detail", "Sturdy frame", "Easy assembly"],
    dimensions: "Queen: 65\"W x 87\"L",
    material: "Velvet upholstery with wood frame"
  },
  {
    id: 22,
    name: "Platform Bed",
    price: 899,
    image: "/stock_images/bedroom_furniture_be_fbf82589.jpg",
    category: "Bedroom",
    description: "Low-profile platform bed with clean lines. No box spring required for modern minimalist bedrooms.",
    features: ["Platform design", "No box spring needed", "Solid slats", "Modern style"],
    dimensions: "Queen: 64\"W x 83\"L x 14\"H",
    material: "Solid wood with walnut finish"
  },
  {
    id: 23,
    name: "Canopy Bed Frame",
    price: 1999,
    image: "/stock_images/bedroom_furniture_be_7e9127a6.jpg",
    category: "Bedroom",
    description: "Romantic canopy bed frame with four posts. Create a dramatic and elegant bedroom centerpiece.",
    features: ["Four-post design", "Metal frame", "Canopy ready", "Queen size"],
    dimensions: "Queen: 64\"W x 84\"L x 80\"H",
    material: "Metal with matte black finish"
  },
  {
    id: 24,
    name: "Storage Bed",
    price: 1299,
    image: "/stock_images/bedroom_furniture_be_84282de9.jpg",
    category: "Bedroom",
    description: "Practical storage bed with built-in drawers. Maximizes bedroom space with hidden storage solutions.",
    features: ["Built-in drawers", "Hydraulic lift", "Storage compartments", "Space-saving"],
    dimensions: "Queen: 66\"W x 86\"L x 48\"H",
    material: "Engineered wood with fabric upholstery"
  },
  {
    id: 25,
    name: "Sleigh Bed",
    price: 1799,
    image: "/stock_images/bedroom_furniture_be_6740b9e1.jpg",
    category: "Bedroom",
    description: "Classic sleigh bed with curved headboard and footboard. Traditional elegance for your bedroom.",
    features: ["Curved design", "Solid construction", "Classic style", "Rich finish"],
    dimensions: "Queen: 68\"W x 90\"L x 54\"H",
    material: "Solid cherry wood"
  },
  {
    id: 26,
    name: "Nightstand Set",
    price: 499,
    image: "/stock_images/bedroom_furniture_be_468f7676.jpg",
    category: "Bedroom",
    description: "Matching pair of nightstands with two drawers each. Perfect complement to any bed frame.",
    features: ["2-piece set", "Two drawers each", "Soft-close drawers", "USB charging ports"],
    dimensions: "24\"W x 18\"D x 24\"H each",
    material: "Solid wood with oak finish"
  },
  {
    id: 27,
    name: "Dresser with Mirror",
    price: 1199,
    image: "/stock_images/bedroom_furniture_be_5280a740.jpg",
    category: "Bedroom",
    description: "Spacious 6-drawer dresser with matching mirror. Ample storage and classic styling.",
    features: ["6 drawers", "Matching mirror", "Dovetail joinery", "Soft-close drawers"],
    dimensions: "60\"W x 18\"D x 36\"H",
    material: "Solid maple wood"
  },
  {
    id: 28,
    name: "Wardrobe Armoire",
    price: 1699,
    image: "/stock_images/bedroom_furniture_be_36e5836e.jpg",
    category: "Bedroom",
    description: "Spacious wardrobe armoire with hanging rod and shelves. Perfect for bedrooms without closets.",
    features: ["Hanging rod", "Adjustable shelves", "Two drawers", "Mirror door"],
    dimensions: "48\"W x 24\"D x 72\"H",
    material: "Solid wood with white finish"
  },
  {
    id: 29,
    name: "Vanity Set",
    price: 799,
    image: "/stock_images/bedroom_furniture_be_35840c3c.jpg",
    category: "Bedroom",
    description: "Elegant vanity set with lighted mirror and cushioned stool. Create your personal beauty station.",
    features: ["Lighted mirror", "3 drawers", "Cushioned stool", "Power outlets"],
    dimensions: "42\"W x 18\"D x 54\"H",
    material: "MDF with white finish"
  },
  {
    id: 30,
    name: "Bedroom Bench",
    price: 399,
    image: "/stock_images/bedroom_furniture_be_235374d2.jpg",
    category: "Bedroom",
    description: "Upholstered bedroom bench with tufted top. Perfect for the foot of the bed or as extra seating.",
    features: ["Tufted top", "Storage underneath", "Solid legs", "Easy assembly"],
    dimensions: "48\"W x 18\"D x 19\"H",
    material: "Velvet upholstery with wood legs"
  },
  {
    id: 31,
    name: "Ceramic Table Lamp",
    price: 189,
    image: "/stock_images/modern_lighting_fixt_b7f35a64.jpg",
    category: "Lighting",
    description: "Artisan-crafted ceramic table lamp with textured finish. Adds warmth and character to any space.",
    features: ["Handmade ceramic base", "Linen shade", "3-way switch", "Unique texture"],
    dimensions: "16\"H x 8\"W",
    material: "Ceramic with linen shade"
  },
  {
    id: 32,
    name: "Woven Pendant Light",
    price: 249,
    image: "/stock_images/modern_lighting_fixt_72b4eafd.jpg",
    category: "Lighting",
    description: "Natural rattan pendant light that brings organic texture and warm illumination to your space.",
    features: ["Natural rattan weave", "Adjustable height", "Warm ambient light", "Bohemian style"],
    dimensions: "20\" diameter x 18\"H",
    material: "Natural rattan"
  },
  {
    id: 33,
    name: "Crystal Chandelier",
    price: 899,
    image: "/stock_images/modern_lighting_fixt_0ec7ed5c.jpg",
    category: "Lighting",
    description: "Elegant crystal chandelier with cascading crystals. Creates stunning light reflections and ambiance.",
    features: ["Crystal drops", "5 lights", "Adjustable chain", "Dimmable"],
    dimensions: "24\" diameter x 28\"H",
    material: "Crystal with chrome frame"
  },
  {
    id: 34,
    name: "Modern Arc Floor Lamp",
    price: 399,
    image: "/stock_images/modern_lighting_fixt_c639829d.jpg",
    category: "Lighting",
    description: "Contemporary arc floor lamp with marble base. Perfect for reading corners or over sofas.",
    features: ["Arched design", "Marble base", "Adjustable shade", "LED compatible"],
    dimensions: "80\"H x 60\" reach",
    material: "Metal with marble base"
  },
  {
    id: 35,
    name: "Industrial Pendant Light",
    price: 179,
    image: "/stock_images/modern_lighting_fixt_43544244.jpg",
    category: "Lighting",
    description: "Industrial-style pendant light with metal cage shade. Adds character to kitchens and dining areas.",
    features: ["Metal cage design", "Adjustable cord", "Edison bulb ready", "Rustic finish"],
    dimensions: "12\" diameter x 14\"H",
    material: "Metal with bronze finish"
  },
  {
    id: 36,
    name: "LED Ceiling Flush Mount",
    price: 149,
    image: "/stock_images/modern_lighting_fixt_182d3366.jpg",
    category: "Lighting",
    description: "Modern LED flush mount ceiling light. Energy-efficient and sleek design for any room.",
    features: ["LED integrated", "Energy efficient", "Dimmable", "Easy installation"],
    dimensions: "16\" diameter x 4\"H",
    material: "Acrylic with metal trim"
  },
  {
    id: 37,
    name: "Glass Globe Pendant",
    price: 229,
    image: "/stock_images/modern_lighting_fixt_0eeaf2b9.jpg",
    category: "Lighting",
    description: "Elegant glass globe pendant with brass hardware. Perfect for kitchen islands or entryways.",
    features: ["Clear glass globe", "Brass finish", "Adjustable height", "Single bulb"],
    dimensions: "10\" diameter x 12\"H",
    material: "Glass with brass fittings"
  },
  {
    id: 38,
    name: "Multi-Arm Chandelier",
    price: 699,
    image: "/stock_images/modern_lighting_fixt_665c68af.jpg",
    category: "Lighting",
    description: "Statement chandelier with multiple arms. Modern design perfect for dining rooms and entryways.",
    features: ["6 lights", "Modern design", "Black finish", "Adjustable chain"],
    dimensions: "32\" diameter x 24\"H",
    material: "Metal with matte black finish"
  },
  {
    id: 39,
    name: "Wall Sconce Set",
    price: 159,
    image: "/stock_images/modern_lighting_fixt_590b6b25.jpg",
    category: "Lighting",
    description: "Pair of modern wall sconces with geometric design. Perfect for hallways or flanking mirrors.",
    features: ["2-piece set", "Geometric design", "Up/down lighting", "Hardwired"],
    dimensions: "6\"W x 4\"D x 12\"H each",
    material: "Metal with brushed nickel finish"
  },
  {
    id: 40,
    name: "Track Lighting Kit",
    price: 279,
    image: "/stock_images/modern_lighting_fixt_865ad29f.jpg",
    category: "Lighting",
    description: "Adjustable track lighting kit with 4 heads. Versatile lighting solution for any space.",
    features: ["4 adjustable heads", "LED compatible", "Easy installation", "Modern design"],
    dimensions: "48\"L x 4\"W x 8\"H",
    material: "Metal with white finish"
  },
  {
    id: 41,
    name: "Leather Office Chair",
    price: 799,
    image: "/stock_images/office_furniture_des_262c4e81.jpg",
    category: "Office",
    description: "Executive office chair with premium leather upholstery and ergonomic design. Style meets comfort.",
    features: ["Genuine leather", "Ergonomic support", "Adjustable height", "360° swivel"],
    dimensions: "26\"W x 28\"D x 42\"H",
    material: "Leather with metal base"
  },
  {
    id: 42,
    name: "Standing Desk",
    price: 599,
    image: "/stock_images/office_furniture_des_129ddb97.jpg",
    category: "Office",
    description: "Electric height-adjustable standing desk. Promotes healthy working posture and productivity.",
    features: ["Electric height adjustment", "Memory presets", "Cable management", "Sturdy construction"],
    dimensions: "60\"W x 30\"D x 28-48\"H",
    material: "Laminate top with steel frame"
  },
  {
    id: 43,
    name: "L-Shaped Executive Desk",
    price: 899,
    image: "/stock_images/office_furniture_des_0172dae6.jpg",
    category: "Office",
    description: "Spacious L-shaped desk with ample workspace. Perfect for home offices and professional settings.",
    features: ["L-shaped design", "File drawer", "Keyboard tray", "Cable grommets"],
    dimensions: "66\"W x 66\"D x 30\"H",
    material: "Engineered wood with espresso finish"
  },
  {
    id: 44,
    name: "Mesh Task Chair",
    price: 299,
    image: "/stock_images/office_furniture_des_3ef6f06f.jpg",
    category: "Office",
    description: "Breathable mesh task chair with lumbar support. Comfortable for long work sessions.",
    features: ["Mesh back", "Lumbar support", "Adjustable arms", "Tilt function"],
    dimensions: "25\"W x 25\"D x 38\"H",
    material: "Mesh with nylon base"
  },
  {
    id: 45,
    name: "Writing Desk",
    price: 399,
    image: "/stock_images/office_furniture_des_b884c77c.jpg",
    category: "Office",
    description: "Compact writing desk with clean lines. Perfect for small spaces and minimalist offices.",
    features: ["Slim design", "Single drawer", "Metal legs", "Easy assembly"],
    dimensions: "42\"W x 20\"D x 30\"H",
    material: "Wood with metal frame"
  },
  {
    id: 46,
    name: "Filing Cabinet",
    price: 249,
    image: "/stock_images/office_furniture_des_cdb302fc.jpg",
    category: "Office",
    description: "2-drawer filing cabinet with lock. Keep important documents organized and secure.",
    features: ["2 drawers", "Locking mechanism", "Full extension slides", "Letter/legal size"],
    dimensions: "15\"W x 20\"D x 29\"H",
    material: "Metal with powder coat finish"
  },
  {
    id: 47,
    name: "Conference Table",
    price: 1299,
    image: "/stock_images/office_furniture_des_98126f12.jpg",
    category: "Office",
    description: "Large conference table for meetings and collaboration. Seats 8-10 people comfortably.",
    features: ["Boat-shaped top", "Cable management", "Seats 8-10", "Durable finish"],
    dimensions: "96\"L x 42\"W x 30\"H",
    material: "Laminate with metal base"
  },
  {
    id: 48,
    name: "Desk Organizer Set",
    price: 79,
    image: "/stock_images/office_furniture_des_d0d4f0f3.jpg",
    category: "Office",
    description: "Complete desk organizer set with multiple compartments. Keep your workspace tidy and efficient.",
    features: ["Multiple compartments", "Pen holders", "Document tray", "Modern design"],
    dimensions: "12\"W x 8\"D x 5\"H",
    material: "Metal mesh with black finish"
  },
  {
    id: 49,
    name: "Bookcase Desk Combo",
    price: 699,
    image: "/stock_images/office_furniture_des_99a0f783.jpg",
    category: "Office",
    description: "Multi-functional desk with integrated bookcase. Maximizes vertical space in home offices.",
    features: ["Integrated shelving", "Desk surface", "Storage drawers", "Space-saving"],
    dimensions: "48\"W x 24\"D x 72\"H",
    material: "Engineered wood"
  },
  {
    id: 50,
    name: "Monitor Stand",
    price: 89,
    image: "/stock_images/office_furniture_des_2beae774.jpg",
    category: "Office",
    description: "Adjustable monitor stand with storage drawer. Improve ergonomics and desk organization.",
    features: ["Adjustable height", "Storage drawer", "Cable management", "Sturdy construction"],
    dimensions: "20\"W x 10\"D x 6\"H",
    material: "Bamboo with metal accents"
  },
  {
    id: 51,
    name: "Solid Wood Bookshelf",
    price: 599,
    image: "/stock_images/storage_furniture_sh_0a34f71c.jpg",
    category: "Storage",
    description: "Timeless bookshelf crafted from solid walnut wood. Features adjustable shelves for versatile storage.",
    features: ["Solid walnut wood", "Adjustable shelves", "Open back design", "Handcrafted"],
    dimensions: "36\"W x 14\"D x 72\"H",
    material: "Solid walnut wood"
  },
  {
    id: 52,
    name: "Ladder Shelf",
    price: 249,
    image: "/stock_images/storage_furniture_sh_2fbf8650.jpg",
    category: "Storage",
    description: "Modern ladder-style shelf that leans against the wall. Perfect for displaying books and decor.",
    features: ["Ladder design", "5 shelves", "Space-saving", "No assembly required"],
    dimensions: "24\"W x 18\"D x 72\"H",
    material: "Engineered wood with oak finish"
  },
  {
    id: 53,
    name: "Storage Cabinet",
    price: 499,
    image: "/stock_images/storage_furniture_sh_0cdf7184.jpg",
    category: "Storage",
    description: "Multi-purpose storage cabinet with doors and shelves. Keep clutter hidden and organized.",
    features: ["Two doors", "Adjustable shelves", "Magnetic closures", "Anti-tip hardware"],
    dimensions: "36\"W x 16\"D x 42\"H",
    material: "Wood composite with white finish"
  },
  {
    id: 54,
    name: "Cube Storage Unit",
    price: 199,
    image: "/stock_images/storage_furniture_sh_5e696eeb.jpg",
    category: "Storage",
    description: "Versatile cube storage unit that works horizontally or vertically. Compatible with fabric bins.",
    features: ["9 cubes", "Versatile orientation", "Bin compatible", "Easy assembly"],
    dimensions: "36\"W x 12\"D x 36\"H",
    material: "Laminated particleboard"
  },
  {
    id: 55,
    name: "Media Console",
    price: 699,
    image: "/stock_images/storage_furniture_sh_9d505b52.jpg",
    category: "Storage",
    description: "Modern media console with storage compartments and cable management. Perfect for living rooms.",
    features: ["Cable management", "Adjustable shelves", "Tempered glass doors", "Supports 65\" TV"],
    dimensions: "60\"W x 18\"D x 24\"H",
    material: "Wood with glass doors"
  },
  {
    id: 56,
    name: "Floating Shelves Set",
    price: 129,
    image: "/stock_images/storage_furniture_sh_1cc21be5.jpg",
    category: "Storage",
    description: "Set of 3 floating shelves with hidden brackets. Modern display solution for any wall.",
    features: ["3-piece set", "Hidden brackets", "Easy installation", "Weight capacity 30lbs each"],
    dimensions: "36\"W x 10\"D x 2\"H each",
    material: "MDF with wood veneer"
  },
  {
    id: 57,
    name: "Tall Display Cabinet",
    price: 899,
    image: "/stock_images/storage_furniture_sh_796337bc.jpg",
    category: "Storage",
    description: "Elegant display cabinet with glass doors. Showcase your collectibles and treasured items.",
    features: ["Glass doors", "LED lighting", "Adjustable shelves", "Mirrored back"],
    dimensions: "32\"W x 14\"D x 72\"H",
    material: "Wood with tempered glass"
  },
  {
    id: 58,
    name: "Storage Bench",
    price: 299,
    image: "/stock_images/storage_furniture_sh_028b891c.jpg",
    category: "Storage",
    description: "Upholstered storage bench perfect for entryways. Provides seating and hidden storage.",
    features: ["Flip-top storage", "Upholstered seat", "Solid construction", "Easy access"],
    dimensions: "48\"W x 18\"D x 20\"H",
    material: "Fabric with wood frame"
  },
  {
    id: 59,
    name: "Modular Shelving System",
    price: 799,
    image: "/stock_images/storage_furniture_sh_12c6528d.jpg",
    category: "Storage",
    description: "Customizable modular shelving system. Create your perfect storage configuration.",
    features: ["Modular design", "Multiple configurations", "Sturdy construction", "Expandable"],
    dimensions: "72\"W x 12\"D x 84\"H",
    material: "Metal with wood shelves"
  },
  {
    id: 60,
    name: "Corner Shelf Unit",
    price: 179,
    image: "/stock_images/storage_furniture_sh_7697aa6b.jpg",
    category: "Storage",
    description: "Space-saving corner shelf unit. Perfect for utilizing unused corner spaces.",
    features: ["Corner design", "5 tiers", "Space-efficient", "Open design"],
    dimensions: "12\"W x 12\"D x 60\"H",
    material: "Metal with wood shelves"
  }
];
