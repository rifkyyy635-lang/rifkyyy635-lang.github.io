import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more..." 
                  rows={6}
                  required 
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question about our products, shipping, returns, or anything else, 
                our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-muted p-3">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@havenandhome.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-muted p-3">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">1-800-HAVEN-HOME</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-muted p-3">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Showroom</h3>
                    <p className="text-muted-foreground">
                      123 Design Street<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;