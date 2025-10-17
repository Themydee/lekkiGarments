import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lekki Garment Factory - Premium manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-32">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Your Global Partner for Seamless Garment Production
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            From sketch to shipment — we bring your designs to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/edaK1Z2RhfMvwMTu6?utm_source=Google+Form&utm_medium=Email&utm_campaign=Work+Order"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white hover:bg-gray-200 text-black font-semibold text-lg px-8 py-6 shadow-md transition-all duration-300 hover:scale-105"
              >
                Start a Production Order
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <Link to="/about">
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-6 transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
