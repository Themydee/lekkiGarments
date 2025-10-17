import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Scissors, 
  Tag, 
  Palette, 
  CheckCircle, 
  Truck, 
  Sparkles,
  Clock,
  Shield,
  ArrowRight,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Scissors,
    title: "Apparel Manufacturing",
    short: "End-to-end garment production with precision cutting, stitching, and finishing.",
    detailed: "From pattern making to final assembly, our state-of-the-art facility handles complete garment production. We specialize in shirts, dresses, trousers, jackets, and custom apparel. Our team of 300+ skilled workers operates modern machinery to ensure consistent quality and efficient production timelines. We can handle orders from 500 to 100,000+ units.",
    features: [
      "Pattern making & grading",
      "Precision cutting systems",
      "Advanced stitching technology",
      "Quality finishing & pressing",
      "Packaging & labeling",
    ],
  },
  {
    icon: Tag,
    title: "Custom Branding & Labeling",
    short: "Personalized labels, tags, and branding solutions for your unique identity.",
    detailed: "Make your brand stand out with our comprehensive branding services. We offer custom woven labels, printed tags, hang tags, care labels, and embroidered logos. Our design team works with you to create branding elements that reflect your brand's identity and meet international standards.",
    features: [
      "Custom woven labels",
      "Printed care tags",
      "Embroidered logos",
      "Hang tags design",
      "Packaging customization",
    ],
  },
  {
    icon: Palette,
    title: "Design-to-Production",
    short: "From concept sketches to finished garments—bringing your vision to life.",
    detailed: "Have a design idea? We bring it to reality. Our design-to-production service covers everything from initial sketches to final products. Our in-house designers collaborate with you to refine concepts, create tech packs, select fabrics, develop samples, and oversee production. Perfect for new fashion brands and seasonal collections.",
    features: [
      "Concept development",
      "Tech pack creation",
      "Fabric sourcing",
      "Sample development",
      "Full production oversight",
    ],
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    short: "Rigorous inspection at every stage ensuring international standards.",
    detailed: "Quality is non-negotiable. Our multi-stage quality control process includes fabric inspection, in-line production checks, final product inspection, and pre-shipment audits. We maintain ISO 9001 certification and can meet specific brand standards. Every garment is inspected for stitching quality, measurements, color consistency, and finishing.",
    features: [
      "Fabric quality inspection",
      "In-line production QC",
      "Final product inspection",
      "Measurement verification",
      "Pre-shipment audit",
    ],
  },
  {
    icon: Truck,
    title: "Export & Distribution",
    short: "Global logistics and distribution networks to deliver worldwide.",
    detailed: "We handle the complexities of international shipping so you don't have to. Our logistics team manages export documentation, customs clearance, freight forwarding, and delivery tracking. We have partnerships with major shipping lines and can deliver to destinations worldwide with competitive rates and reliable timelines.",
    features: [
      "Export documentation",
      "Customs clearance",
      "Freight forwarding",
      "Shipment tracking",
      "Warehouse services",
    ],
  },
  {
    icon: Sparkles,
    title: "Premium Finishing",
    short: "Luxury finishing touches that elevate your garments.",
    detailed: "Add that premium feel to your products. We offer specialized finishing services including stone washing, enzyme washing, embroidery, beading, sequins application, and special dyeing techniques. Our finishing department can handle delicate fabrics and complex designs while maintaining quality standards.",
    features: [
      "Stone & enzyme washing",
      "Embroidery services",
      "Beading & sequins",
      "Special dyeing",
      "Premium pressing",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive garment production solutions tailored to your brand's needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card
                    className="group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-200 animate-fade-in-up cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-black mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.short}
                      </p>
                      <div className="flex items-center text-black font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-black" />
                    </div>
                    <DialogTitle className="font-serif text-3xl text-black">
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="text-base leading-relaxed pt-4 text-gray-700">
                      {service.detailed}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <h4 className="font-semibold text-black mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Lekki Garment Factory?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              What sets us apart in the garment manufacturing industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Industry-leading production timelines without compromising quality",
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "ISO 9001 certified with rigorous quality control at every stage",
              },
              {
                icon: Sparkles,
                title: "Competitive Pricing",
                description: "Premium quality at rates that make sense for your business",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personal account manager for seamless communication",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-black mb-10">
              Let's discuss how we can bring your garment vision to life
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-black hover:bg-white hover:text-black text-white font-semibold text-lg px-8 py-6 shadow-md"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
  