"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

export default function CTAZone() {
  return (
    <>
      {/* Interactive CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 overflow-hidden text-center">
        {/* Background Animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-20 -right-20 animate-pulse"></div>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to See AI in Action?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-xl mb-12"
          >
            Let’s build your own 24x7 AI agent that talks, books, and converts leads — instantly.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/ai-agent">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium">
                Talk to Our AI Agent (Demo Chat)
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/free-guide">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-medium">
                Download Free AI Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Chatbot Bubble */}
      <Link href="/ai-agent">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 bg-green-500 text-white rounded-2xl shadow-lg px-5 py-3 cursor-pointer flex items-center gap-3 z-50 animate-pulse"
        >
          <Bot className="h-6 w-6" />
          <span className="text-sm font-medium">
            Hi! I’m your AI Agent. Want to see how I can automate your business?
          </span>
        </motion.div>
      </Link>
    </>
  )
}
