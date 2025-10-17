import Layout from "@/components/Layout";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team.jpg";
import timelineImage from "@/assets/timeline.jpg";
import fabricImage from "@/assets/fabric-detail.jpg";

const About = () => {
  const team = [
    { name: "Chukwuemeka Okonkwo", role: "CEO", bio: "25+ years in textile manufacturing and business leadership" },
    { name: "Amina Mohammed", role: "Head of Production", bio: "Expert in large-scale garment production and quality assurance" },
    { name: "David Adekunle", role: "Design Director", bio: "Award-winning designer with international fashion experience" },
    { name: "Sarah Okafor", role: "Sustainability Lead", bio: "Champion of ethical manufacturing and eco-friendly practices" },
  ];

  const milestones = [
    { year: "2010", title: "Factory Established", description: "Founded in Lekki, Lagos" },
    { year: "2013", title: "First Export", description: "Expanded to international markets" },
    { year: "2016", title: "ISO Certification", description: "Achieved ISO 9001 quality standards" },
    { year: "2019", title: "Sustainability Initiative", description: "Launched eco-friendly program" },
    { year: "2022", title: "1M Garments", description: "Milestone production achievement" },
    { year: "2025", title: "Regional Leader", description: "Africa's premier production hub" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Transforming Africa's garment industry through precision, passion, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-10 rounded-2xl shadow-md animate-fade-in">
              <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-black mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class garment manufacturing solutions that empower fashion brands globally, while championing sustainable practices and creating meaningful employment opportunities across Nigeria.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-black mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become Africa's most trusted and innovative garment production partner, setting new standards for quality, sustainability, and customer excellence in the global textile industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
                Crafting Excellence Since 2010
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>What started as a small workshop in Lagos has grown into one of Africa's most respected garment manufacturing facilities.</p>
                <p>Today, we operate a 50,000 sq. ft. facility, employ 300+ skilled workers, and serve fashion brands across four continents.</p>
                <p>Every garment leaving our factory carries the pride of Nigerian manufacturing—a testament to what’s possible when tradition meets innovation.</p>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img src={fabricImage} alt="Our garment manufacturing excellence" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

    

      {/* Timeline */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-white max-w-2xl mx-auto">Key milestones in our path to excellence</p>
          </div>

         <div className="max-w-5xl mx-auto mb-12">
  <img
    src={timelineImage}
    alt="Timeline"
    className="w-full rounded-2xl shadow-lg animate-fade-in filter grayscale"
  />
</div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-gray-700 hover:bg-gray-900 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-white text-3xl font-bold font-serif mb-2">{milestone.year}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{milestone.title}</h3>
                <p className="text-gray-400 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-black-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "Excellence", description: "We pursue perfection in every stitch, never settling for less than world-class quality." },
              { icon: Users, title: "People First", description: "Our team's wellbeing and growth are fundamental to our success." },
              { icon: Target, title: "Innovation", description: "We continuously invest in technology and processes to stay ahead." },
            ].map((value, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <value.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
