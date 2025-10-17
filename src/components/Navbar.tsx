import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Left) */}
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

          {/* Desktop Navigation (Middle) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Book Consultation (Right) */}
          <div className="hidden md:flex items-center justify-end">
            <Link to="/work-order">
              <Button
                size="sm"
                className="bg-white text-black font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105"
              >
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 animate-fade-in">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                size="sm"
                className="w-full bg-white text-black font-semibold hover:bg-gray-200"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
