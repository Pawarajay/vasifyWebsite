"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppQR from "@/components/whatsapp-qr"

// ============================
// ContactForm Component
// ============================
function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const services = [
    "WhatsApp Automation",
    "Website & App Development",
    "Digital Marketing",
    "E-Commerce Solutions",
    "Chatbot Development",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${name}! Your message for "${service}" has been received.`)
    setName("")
    setEmail("")
    setService("")
    setMessage("")
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Select Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">-- Choose a Service --</option>
            {services.map((s, idx) => (
              <option key={idx} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
          Send Message
        </Button>
      </form>
    </div>
  )
}

// ============================
// ContactCard Component
// ============================
function ContactCard({ icon: Icon, title, details, description }: any) {
  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-lg active:shadow-lg transition-shadow duration-300 text-center cursor-pointer">
      <CardHeader>
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
          <Icon className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
        <div className="text-xl font-bold text-green-600">{details}</div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

// ============================
// Main ContactSection Component
// ============================
export default function ContactSection() {
  const contactInfo = [
    { icon: Phone, title: "Phone", details: "+91 9769754446", description: "Mon-Fri from 9am to 6pm EST" },
    { icon: Mail, title: "Email", details: "Sushil@vasifytech.com, sudhanshu@vasifytech.com", description: "We'll respond within 2 hours" },
    { icon: MapPin, title: "Office", details: "601, 6th floor, Kohinoor CHS, Dattamandir road, Kandivali West, Mumbai – 400067", description: "Available for meetings" },
    { icon: Clock, title: "Response Time", details: "< 2 Hours", description: "Average response time" },
  ]

  const benefits = [
    "Free consultation & strategy session",
    "30-day money-back guarantee",
    "24/7 dedicated support",
    "Proven track record with 500+ clients",
    "Custom solutions for your business",
    "No long-term contracts required",
  ]

  const handlePhoneClick = () => { window.location.href = "tel:+919769754446" }
  const handleWhatsAppClick = () => {
    const phoneNumber = "919769754446"
    const message = "Hi! I'm interested in VasifyTech's services. Can you help me get started?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Auto-scroll to form
  useEffect(() => {
    const timer = setTimeout(() => {
      const formSection = document.getElementById("contact-form-section")
      if (formSection) formSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Map animation
  const mapRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(mapRef, { once: true })
  const controls = useAnimation()
  useEffect(() => { if (isInView) controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } }) }, [isInView, controls])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Contact Form & Benefits */}
      <section id="contact-form-section" className="mt-20 py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose VasifyTech?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're your growth partners committed to delivering exceptional results and outstanding service.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{b}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp / Phone / QR */}
            <div className="bg-green-500 p-6 rounded-2xl text-white mb-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-green-100">Book a free 30-minute strategy call to discuss your business goals.</p>
              <div className="space-y-3">
                <Button onClick={handleWhatsAppClick} className="w-full bg-white text-green-600 font-semibold text-left justify-start">
                  <MessageCircle className="mr-3 h-5 w-5" /> Chat on WhatsApp
                </Button>
                <Button onClick={handlePhoneClick} variant="outline" className="w-full border-2 border-white text-white font-medium text-left justify-start">
                  <Phone className="mr-3 h-5 w-5" /> Call: +91 9769754446
                </Button>
                <div className="flex space-x-3 mb-4">
                  <Button onClick={() => window.open("https://www.facebook.com/profile.php?id=61564894984098", "_blank")} variant="outline" className="flex-1 border-2 border-white text-white font-medium">
                    <Facebook className="mr-2 h-5 w-5" /> Facebook
                  </Button>
                  <Button onClick={() => window.open("https://www.instagram.com/vasifytech", "_blank")} variant="outline" className="flex-1 border-2 border-white text-white font-medium">
                    <Instagram className="mr-2 h-5 w-5" /> Instagram
                  </Button>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Scan QR Code</h4>
                    <p className="text-green-100 text-sm">Quick WhatsApp access</p>
                  </div>
                  <WhatsAppQR />
                </div>
              </div>
              <Button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold">
                Schedule Free Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <ContactForm />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <ContactCard key={idx} {...info} />
          ))}
        </div>
      </section>

      {/* Animated Map */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Office Location</h2>
          <motion.div ref={mapRef} initial={{ opacity: 0, scale: 0.8 }} animate={controls} className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.103641745744!2d72.84064607547677!3d19.192764144724337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b684f9d8633d%3A0x1b243c4dc6e7b2b6!2sVasifyTech!5e0!3m2!1sen!2sin!4v1697064724132!5m2!1sen!2sin"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  )
}
