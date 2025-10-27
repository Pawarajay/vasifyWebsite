"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, X } from "lucide-react"

interface ChatbotDemoProps {
  industry: string
}

export default function ChatbotDemo({ industry }: ChatbotDemoProps) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: `👋 Hi! I’m your AI assistant for ${industry}. How can I help you today?` },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { sender: "user", text: input }])
    setInput("")

    // Fake AI response simulation (replace with actual API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `🤖 That’s great! Let me show you how AI helps in ${industry}.` },
      ])
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200"
    >
      <div className="bg-green-600 text-white p-4 text-center font-semibold text-lg flex justify-between items-center">
        <span>{industry} AI Chatbot Demo</span>
        <X className="w-5 h-5 opacity-70" />
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-green-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 shadow-sm rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 flex items-center gap-2 border-t bg-white">
        <input
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  )
}
