"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog } from "@headlessui/react"
import { ArrowRight, MessageCircle, Zap, Users, BarChart3, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isConsultOpen, setIsConsultOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [isChatOpen, setIsChatOpen] = useState(false)

  const words = [
    "Accelerate Your Business with AI",
    "Empower Engagement with Automation",
    "Scale Growth Intelligently",
  ]

  const features = [
    { icon: Zap, title: "Instant Automation", description: "Set up automated responses and workflows in minutes, not hours." },
    { icon: Users, title: "Multi-Agent Support", description: "Manage multiple customer conversations with team collaboration." },
    { icon: BarChart3, title: "Advanced Analytics", description: "Track performance with detailed insights and reporting." },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade security with full compliance and data protection." },
  ]

  // Typewriter animation
  useEffect(() => {
    const currentWord = words[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.slice(0, typedText.length + 1))
        if (typedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setTypedText(currentWord.slice(0, typedText.length - 1))
        if (typedText.length === 0) {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentIndex])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <>
      <Head>
        <title>AI Agent | VasifyTech</title>
        <meta
          name="description"
          content="Accelerate your business with AI — smart automation, chatbot demos, and free consultations to drive engagement."
        />
      </Head>

      <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
        {/* Animated blobs background */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-green-300 rounded-full opacity-30 filter blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-30 filter blur-3xl"
          animate={{ x: [0, -200, 0], y: [0, -100, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                {typedText}
                <span className="border-r-4 border-green-500 ml-1 animate-pulse"></span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Harness the power of conversational AI to transform customer engagement across industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium flex items-center transition-all duration-300 shadow-lg hover:scale-105"
                  onClick={() => setIsChatOpen(true)}
                >
                  Talk to Our AI Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
                  onClick={() => setIsConsultOpen(true)}
                >
                  Book Free Consultation
                </Button>

                <a
                  href="#demos"
                  className="text-green-600 underline text-lg font-medium mt-3 sm:mt-0 sm:ml-2 hover:scale-105 transition-transform duration-300"
                >
                  See Industry Demos →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/vasifytechhero.webp"
                  alt="AI Chatbot Interaction"
                  width={600}
                  height={450}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
              <motion.div
                className="absolute -top-6 -left-6 w-10 h-10 bg-green-400 rounded-full opacity-80"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-8 h-8 bg-blue-400 rounded-full opacity-80"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              />
            </motion.div>
          </div>
        </section>

        {/* Industry Demo Section */}
        <section id="demos" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800"
            >
              Industry Demos
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Real Estate", "Healthcare", "Education", "Retail", "Finance", "Travel"].map((industry) => (
                <motion.div
                  key={industry}
                  whileHover={{ scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all bg-white"
                >
                  <h3 className="text-2xl font-semibold mb-2">{industry}</h3>
                  <p className="text-gray-600 mb-4">Experience how AI transforms {industry.toLowerCase()} operations.</p>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300"
                    onClick={() => setIsChatOpen(true)}
                  >
                    Try Demo
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features / Why Choose Us Section */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800"
            >
              Why Choose VasifyTech
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg bg-white text-left flex flex-col items-start gap-4"
                >
                  <feature.icon className="h-10 w-10 text-green-500" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Optional Stats */}
            <motion.div
              className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {[
                { label: "Happy Clients", value: 100 },
                { label: "Projects Completed", value: 50 },
                { label: "Industries Served", value: 15 },
                { label: "Team Members", value: 10 },
              ].map((stat) => (
                <motion.div key={stat.label} className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
                  <motion.h3
                    className="text-3xl font-bold text-green-500"
                    animate={{ count: [0, stat.value] }}
                  >
                    {stat.value}+
                  </motion.h3>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Floating Chat Widget */}
        <motion.div
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsChatOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.div>

        {/* Chatbot Modal */}
        <AnimatePresence>
          {isChatOpen && (
            <Dialog open={isChatOpen} onClose={() => setIsChatOpen(false)} className="relative z-50">
              <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full">
                  <Dialog.Title className="text-2xl font-bold mb-4">AI Chatbot Demo</Dialog.Title>
                  <p className="text-gray-600 mb-4">This is a live AI chat demo placeholder. Integrate your chatbot here.</p>
                  <Button onClick={() => setIsChatOpen(false)}>Close</Button>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </AnimatePresence>

        {/* Consultation Modal */}
        <Dialog open={isConsultOpen} onClose={() => setIsConsultOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-md bg-white rounded-xl shadow-lg p-6">
              <Dialog.Title className="text-2xl font-bold mb-4">Book a Free Consultation</Dialog.Title>
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                  />
                  <div className="flex justify-end gap-4">
                    <Button type="submit" className="bg-green-500 text-white">
                      Submit
                    </Button>
                    <Button variant="outline" onClick={() => setIsConsultOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-green-600 font-bold mb-4">Thank you! We will contact you soon.</p>
                  <Button onClick={() => setIsConsultOpen(false)}>Close</Button>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  )
}
