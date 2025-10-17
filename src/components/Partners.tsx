const partners = [
  "Fashion House",
  "Style International",
  "Couture Collection",
  "Urban Threads",
  "Elite Apparel",
  "Global Garments",
];

const Partners = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-12 animate-fade-in">
          Trusted by Leading Brands
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 group animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-gray-600 group-hover:text-black font-medium text-sm text-center transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
