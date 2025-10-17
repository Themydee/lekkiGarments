import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 group">
            <img
              src={Logo}
              alt="Lekki Garment Factory"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-serif text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
              Lekki Garment Factory
            </span>
          </Link>
          <br />
            <p className="text-white/70 text-sm leading-relaxed">
              Crafting excellence in every stitch. Africa's premier garment 
              production hub delivering world-class quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
           <div className="flex gap-4">
  {[
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/lekkigarmentfactory/" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/lekki-garment-factory/" },
  ].map((social, index) => {
    const Icon = social.icon;
    return (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors group"
        aria-label={social.label}
      >
        <Icon className="w-5 h-5 text-white/70 group-hover:text-gold transition-colors" />
      </a>
    );
  })}
</div>

          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lekki Garment Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
