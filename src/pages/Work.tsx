import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const WorkOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    garmentType: "",
    quantity: "",   
    fabricDetails: "",
    deliveryDate: "",
    referenceFile: null,
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Work Order Submitted:", formData);
    alert("✅ Your work order has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      garmentType: "",
      quantity: "",
      fabricDetails: "",
      deliveryDate: "",
      referenceFile: null,
      additionalNotes: "",
    });
  };

  return (
    <Layout>
      <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-gold mb-4 text-center">
            Production Work Order
          </h1>
          <p className="text-gray-400 mb-10 text-center">
            Please fill in the details below to place your production order. Our
            team will contact you shortly to confirm your request.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 p-8 rounded-2xl shadow-lg space-y-6 border border-gold/10"
          >
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="ABC Clothing Ltd."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="+234 800 000 0000"
                />
              </div>
            </div>

            {/* Order Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Garment Type</label>
                <input
                  type="text"
                  name="garmentType"
                  value={formData.garmentType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="e.g. Polo Shirts, Uniforms, Jackets"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Fabric Details</label>
              <textarea
                name="fabricDetails"
                value={formData.fabricDetails}
                onChange={handleChange}
                rows="3"
                required
                className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Describe the fabric type, color, and specifications..."
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Preferred Delivery Date</label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Reference File (optional)</label>
              <input
                type="file"
                name="referenceFile"
                onChange={handleChange}
                className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-black hover:file:bg-gold/80"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Any extra details or instructions..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-gold text-black font-semibold hover:bg-gold/80 transition-all duration-300 hover:scale-105"
              >
                Submit Work Order
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default WorkOrder;
