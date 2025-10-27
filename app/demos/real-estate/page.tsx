import ChatbotDemo from "@/components/chatbot-demo"

export default function RealEstateDemo() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        🏠 Real Estate AI Chatbot Demo
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        See how our AI chatbot captures leads, follows up, and books property visits 24×7 — automatically.
      </p>
      <ChatbotDemo industry="Real Estate" />
    </section>
  )
}
