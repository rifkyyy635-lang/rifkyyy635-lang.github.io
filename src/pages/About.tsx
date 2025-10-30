import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing timeless design and exceptional craftsmanship to homes worldwide
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Haven & Home was founded with a simple belief: your home should be a reflection of who you are. 
              Since our beginning, we've been dedicated to curating exceptional furniture and décor that combines 
              timeless design with modern functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every piece in our collection is chosen for its quality, craftsmanship, and ability to transform 
              a house into a home. We work directly with skilled artisans and established manufacturers who share 
              our commitment to excellence and sustainability.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Each piece is built to last and designed to be loved for years to come.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Choice</h3>
                <p className="text-muted-foreground">
                  We prioritize sustainably sourced materials and partner with makers who share our environmental values.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Timeless Design</h3>
                <p className="text-muted-foreground">
                  Our collections feature classic designs that transcend trends, ensuring your investment stands the test of time.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We're committed to providing an exceptional experience from the moment you discover a piece to 
              the day it arrives at your door. Our team is dedicated to helping you find exactly what you need 
              to create your perfect space.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're furnishing your first apartment or redesigning your forever home, we're here to 
              support you every step of the way with expert advice, detailed product information, and outstanding 
              customer service.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;