import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero.png"
import fabricImage from "@/assets/cut.png";
import sustainabilityImage from "@/assets/sustainability.jpg";
import { Play } from "lucide-react";
import factoryVideo from '@/assets/4.mp4'
import teamImage from "@/assets/team.jpg";

const galleryImages = [
  { src: heroImage, alt: "Modern garment manufacturing facility with skilled workers", category: "Factory" },
  { src: fabricImage, alt: "Premium fabric with intricate weave patterns", category: "Factory" },
  { src: sustainabilityImage, alt: "Sustainable eco-friendly textile materials", category: "Materials" },

];

const categories = ["All", "Factory", "Materials"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Inside the Factory
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in">
            A visual journey through our world-class manufacturing facility
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-md"
                    : "bg-white border border-gray-400 text-black hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer animate-fade-in aspect-square"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white text-black text-sm font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-400 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Section */}
      <section className="py-24 bg-white text-black">
  <div className="container mx-auto px-6 md:px-12">
    <div className="max-w-4xl mx-auto text-center animate-fade-in">
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
        See Us in Action
      </h2>
      <p className="text-lg text-gray-500 mb-10">
        Experience the precision and passion that goes into every garment
      </p>

      {/* Video Container */}
      <div className="relative aspect-video bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-md group">
        <video
          id="factoryVideo"
          className="w-full h-full object-cover"
          controls={false}
          preload="metadata"
        >
          <source src={factoryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Play Button */}
        <button
          onClick={() => {
            const video = document.getElementById("factoryVideo") as HTMLVideoElement;
            if (video.paused) {
              video.play();
              video.controls = true;
            } else {
              video.pause();
            }
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-all duration-300"
        >
          <Play size={72} className="text-white hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
};

export default Gallery;
