import ChatbotDemo from "@/components/chatbot-demo"

export default function HealthcareDemo() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏥 Healthcare AI Chatbot Demo</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Learn how our chatbot simplifies appointment scheduling, patient support, and medical FAQs.
      </p>
      <ChatbotDemo industry="Healthcare" />
    </section>
  )
}
