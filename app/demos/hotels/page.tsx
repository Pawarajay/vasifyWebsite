import ChatbotDemo from "@/components/chatbot-demo"

export default function HotelsDemo() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏨 Hotels AI Chatbot Demo</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Experience how AI handles guest inquiries, room bookings, and special requests — all in real time.
      </p>
      <ChatbotDemo industry="Hotels" />
    </section>
  )
}
