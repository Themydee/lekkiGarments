import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
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
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            Have a design in mind? Let’s bring your vision to life — from sketch to stitch.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            {/* Contact Info */}
            <div className="space-y-10">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-black" />,
                  title: "Location",
                  text: "14 Lekki - Epe Expy, Lekki Penninsula II, Lekki 106104, Lagos, Nigeria",
                },
                {
                  icon: <Phone className="w-6 h-6 text-black" />,
                  title: "Phone",
                  text: "08022917001",
                },
                {
                  icon: <Mail className="w-6 h-6 text-black" />,
                  title: "Email",
                  text: "Lekkigarmentfactory@gmail.com",
                },
                {
                  icon: <Clock className="w-6 h-6 text-black" />,
                  title: "Working Hours",
                  text: "Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM",
                },
              ].map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-gray-100 p-6 rounded-2xl hover:bg-gray-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {info.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-300 p-10 rounded-3xl shadow-2xl space-y-6"
            >
              <h2 className="text-3xl font-serif font-semibold mb-4 text-center">
                Send Us a Message
              </h2>

              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-gray-50 text-black border border-gray-300 placeholder:text-gray-500 focus:border-black transition-all"
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-gray-50 text-black border border-gray-300 placeholder:text-gray-500 focus:border-black transition-all"
              />

              <Textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-gray-50 text-black border border-gray-300 placeholder:text-gray-500 focus:border-black resize-none transition-all"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-gray-300 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.666316723503!2d3.51204507587724!3d6.436885424161968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8be02b6e8649%3A0xdc85d01a12d6308e!2sLekki%20Garment%20Factory!5e0!3m2!1sen!2sng!4v1760710833264!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
