import { Leaf, Users, Recycle, Award, Shield, Globe } from "lucide-react";
import sustainabilityImage from "@/assets/cut.png";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Users,
    title: "Ethical Labor",
    description: "Fair wages, safe conditions, and respect for every team member.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Sustainably sourced fabrics and organic cotton production.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Zero-waste initiatives and responsible recycling programs.",
  },
];

const Sustainability = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              Seamless. Sustainable. Scalable.
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We believe fashion should never come at the expense of our planet or people. 
              Our commitment to eco-friendly materials, responsible sourcing, and fair labor 
              ensures every garment we produce honors both craftsmanship and environmental responsibility.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: "ISO Certified" },
                { icon: Shield, label: "Fair Trade" },
                { icon: Globe, label: "Eco-Friendly" },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="p-4 text-center border border-gray-200 hover:border-black transition-colors bg-white"
                >
                  <cert.icon className="w-8 h-8 text-black mx-auto mb-2" />
                  <p className="text-xs font-medium text-black">{cert.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={sustainabilityImage}
                alt="Sustainable garment production at Lekki Factory"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gray-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
