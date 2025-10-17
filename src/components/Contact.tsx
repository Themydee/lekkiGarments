import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 md:py-32 bg-white text-black" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
            Made to Inspire. Built to Last.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your production journey? Let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-600">14 Lekki - Epe Expy, Lekki Penninsula II, Lekki 106104, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-600">08022917001</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-600">lekkigarmentfactory@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white border border-gray-200 p-10 rounded-3xl shadow-lg animate-fade-in-up"
          >
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-gray-50 text-black border border-gray-300 placeholder:text-gray-500 focus:border-black transition-colors"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-gray-50 text-black border border-gray-300 placeholder:text-gray-500 focus:border-black transition-colors"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-gray-50 text-black border border-gray-300 placeholder:text-gray-500 focus:border-black resize-none transition-colors"
              />
            </div>

            <div className="space-y-4">
        
              <Button
                type="submit"
                size="lg"
                variant="outline"
                className="w-full border-2 border-black text-black hover:bg-black hover:text-white font-semibold transition-all duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
