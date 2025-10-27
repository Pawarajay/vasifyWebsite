import ChatbotDemo from "@/components/chatbot-demo"

export default function AutomotiveDemo() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🚗 Automotive AI Chatbot Demo</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Watch how AI assists in scheduling test drives, managing service bookings, and answering vehicle queries.
      </p>
      <ChatbotDemo industry="Automotive" />
    </section>
  )
}
