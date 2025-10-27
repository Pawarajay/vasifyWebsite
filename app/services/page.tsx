"use client"

import {
  ArrowRight,
  MessageCircle,
  Bot,
  Globe,
  Smartphone,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const overviewServices = [
    {
      icon: Bot,
      title: "AI Chatbot Agent",
      description:
        "Conversational AI that automates customer support and lead generation.",
      link: "/ai-agent",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business API",
      description:
        "Engage customers instantly via verified WhatsApp automation flows.",
      link: "/whatsapp-development",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Smartphone,
      title: "Website & App Development",
      description:
        "Custom web and mobile apps built to elevate your brand presence.",
      link: "/website-development",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: BookOpen,
      title: "Free AI Guide",
      description:
        "Download our AI Business Guide to understand automation possibilities.",
      link: "/free-guide",
      color: "from-yellow-500 to-orange-600",
    },
  ]

  const whatsappServices = [
    {
      icon: Bot,
      title: "WhatsApp Automation",
      description:
        "Complete automation solutions for customer engagement and support on WhatsApp",
      features: [
        "Chatbot Development",
        "Automated Workflows",
        "Smart Responses",
        "Lead Qualification",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp E-commerce",
      description:
        "Complete online store solutions integrated with WhatsApp for seamless shopping experience",
      features: [
        "Product Catalog",
        "Order Management",
        "Payment Integration",
        "Customer Support",
      ],
      color: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-green-500">WhatsApp Business</span> Solutions & More
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            From WhatsApp automation to custom software development, we provide end-to-end solutions to help your business thrive in the digital age.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Overview of Services */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Explore Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Quick access to our top solutions designed to accelerate your business transformation.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overviewServices.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Card className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                      <p className="text-gray-600 mt-2">{service.description}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Link href={service.link}>
                        <Button className="bg-green-500 hover:bg-green-600 text-white mt-4">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Tooltip / Mini Chatbot */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 bg-gray-900 text-white text-sm rounded-xl px-4 py-3 shadow-lg pointer-events-none"
                >
                  <div className="relative">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
                    <span>Want to see how this works for your business? </span>
                    <Link href={service.link} className="underline text-green-400 ml-1">
                      Try Demo Now
                    </Link>
                    {/* Typing dots */}
                    <div className="flex space-x-1 mt-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-150"></span>
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-300"></span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Services Section */}
      <section className="py-20 px-6 bg-gray-50" id="whatsapp-services">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            WhatsApp Business Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Our core WhatsApp services designed to transform your customer engagement and drive business growth.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsappServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Link href="/contact">
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500 text-center">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-green-100 mb-8 max-w-3xl mx-auto"
          >
            Let's discuss your project and create a custom solution that fits your business needs perfectly.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-medium"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
