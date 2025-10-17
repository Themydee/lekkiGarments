import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Sustainability />
      <Partners />
      <Contact />
    </Layout>
  );
};

export default Index;
