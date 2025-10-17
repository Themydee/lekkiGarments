import { Scissors, FlaskConical, Package, CheckCircle, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Pattern Making",
    description: "Precise pattern development tailored to your specifications and design vision.",
  },
  {
    icon: FlaskConical,
    title: "Sampling & Development",
    description: "Iterative prototyping to perfect your garment before bulk production begins.",
  },
  {
    icon: Package,
    title: "Bulk Production",
    description: "Scalable manufacturing with consistent quality across every piece produced.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous inspection at every stage ensuring international standards.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "Reliable shipping and distribution to get your products where they need to be.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
            Fashion Manufacturing You Can Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reliable production, ethical practices, and timeless craftsmanship in every piece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg border border-gray-200 transition-all duration-500 hover:-translate-y-2 bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-all duration-300">
                  <service.icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
