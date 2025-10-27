"use client";

import Link from "next/link";
import { Globe, Code, Smartphone, Monitor, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function WebsiteDevelopmentPage() {
  const expertise = [
    { title: "Web Development", icon: <Globe className="h-8 w-8" />, description: "Responsive websites with modern UI & UX." },
    { title: "App Development", icon: <Smartphone className="h-8 w-8" />, description: "Cross-platform mobile applications." },
    { title: "API Development", icon: <Code className="h-8 w-8" />, description: "Seamless backend integrations and REST APIs." },
    { title: "Dashboard Solutions", icon: <Monitor className="h-8 w-8" />, description: "Powerful analytics & admin dashboards." },
  ];

  const developmentSteps = [
    "Requirement Analysis",
    "Wireframing & Design",
    "Development & Integration",
    "Testing & QA",
    "Deployment & Support",
  ];

  const techStack = ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "AWS", "Docker"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".timeline-step").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Build What Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Business Deserves
              </span>
            </h1>
            <p className="text-xl text-blue-100">
              Custom websites and apps designed to elevate your business with speed, responsiveness, and modern tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Get Free Estimate <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link href="/ai-advisor">
                <button className="bg-transparent border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Talk to Our AI Project Advisor
                </button>
              </Link>
            </div>
          </div>

          {/* Free Estimate Form */}
          <div className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-xl text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input type="text" placeholder="Project Type (Web/App/API)" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <textarea placeholder="Project Details" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300">
                Submit Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Development Process</h2>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-10 left-8 right-8 h-1 bg-gray-300 hidden md:block"></div>
            {developmentSteps.map((step, idx) => (
              <div key={idx} className="flex-1 relative timeline-step opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center">
                <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white z-10">
                  {idx + 1}
                </div>
                <h4 className="font-semibold text-lg mt-4">{step}</h4>
                <div className="md:hidden w-1 h-12 bg-gray-300 mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-gray-100 rounded-xl px-6 py-3 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Get Free Estimate <ArrowRight className="h-5 w-5"/>
              </button>
            </Link>
            <Link href="/ai-advisor">
              <button className="bg-transparent border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Talk to Our AI Project Advisor
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }
        .timeline-step {
          transition: all 0.7s ease-out;
        }
      `}</style>
    </div>
  );
}
