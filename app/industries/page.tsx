"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const industries = [
  {
    name: "Real Estate",
    benefit: "Automate lead capture & follow-ups.",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Hotels",
    benefit: "Handle 24x7 guest inquiries.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "E-Commerce",
    benefit: "Upsell instantly via chat.",
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    name: "Automotive",
    benefit: "Manage service bookings easily.",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "Education",
    benefit: "Automate student counseling.",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Healthcare",
    benefit: "Simplify appointment scheduling.",
    color: "from-teal-400 to-emerald-500",
  },
]

export default function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [showChat, setShowChat] = useState(false)

  const handleOpenChat = (industry: string) => {
    setSelectedIndustry(industry)
    setShowChat(true)
  }

  const handleCloseChat = () => setShowChat(false)

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-green-50 to-white overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Industry Solutions Snapshot
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          See how VasifyTech helps different industries automate communication and boost conversions.
        </p>
      </div>

      {/* Horizontal scroll on mobile */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 min-w-max md:min-w-0 px-2 md:px-0">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex-shrink-0 w-[280px] md:w-auto"
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent
                  className={`p-8 text-center bg-gradient-to-br ${industry.color} text-white rounded-2xl`}
                >
                  <h3 className="text-2xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-white/90 mb-6 text-base">{industry.benefit}</p>
                  <Button
                    onClick={() => handleOpenChat(industry.name)}
                    className="bg-white text-gray-800 hover:bg-gray-100 font-medium"
                  >
                     Try Industry Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Chatbot Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 md:right-10 z-50"
          >
            <div className="bg-white shadow-2xl rounded-2xl border border-gray-200 w-[340px] h-[460px] overflow-hidden relative">
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseChat}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-4 border-b bg-green-50">
                <h4 className="text-lg font-bold text-gray-900">
                  {selectedIndustry} Chatbot Demo
                </h4>
                <p className="text-sm text-gray-600">
                  Experience how automation can help your business.
                </p>
              </div>

              <div className="p-4 overflow-y-auto h-[380px]">
                {/* Replace this with your actual chatbot component */}
                <div className="flex flex-col items-start space-y-3 text-sm text-gray-800">
                  <div className="bg-green-100 px-4 py-2 rounded-xl self-end text-gray-800">
                    Hi , I’m your {selectedIndustry} assistant!
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-xl">
                    How can I help you today? (e.g., booking, inquiry, etc.)
                  </div>
                  <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full">
                    Start Demo Chat
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
