import fabricImage from "@/assets/about.png";

const About = () => {
  return (
    <section className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={fabricImage}
                alt="Premium fabric craftsmanship at Lekki Garment Factory"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/5 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              The Future of Fashion Manufacturing, Made in Africa
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At <span className="font-semibold text-black">Lekki Garment Factory</span>, we are redefining what it means 
                to manufacture in Africa. Our facility combines innovation, ethical production, 
                and empowerment to deliver world-class garments that tell a story of excellence.
              </p>
              <p>
                We believe in building a fashion industry that uplifts communities, respects the 
                environment, and delivers unmatched quality. Our state-of-the-art facility houses 
                skilled artisans and cutting-edge technology, enabling us to bring your designs to 
                life with precision and care.
              </p>
              <p>
                From concept to completion, we partner with global brands to create garments that 
                embody craftsmanship, sustainability, and timeless style. When you choose Lekki, 
                you choose a future where fashion and responsibility go hand in hand.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">10+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">
                  Years Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">
                  Global Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">1M+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">
                  Garments Crafted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
