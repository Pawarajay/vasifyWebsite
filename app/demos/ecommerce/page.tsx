import ChatbotDemo from "@/components/chatbot-demo"

export default function EcommerceDemo() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🛍️ E-Commerce AI Chatbot Demo</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        See how our chatbot helps shoppers find products, upsell instantly, and reduce cart abandonment.
      </p>
      <ChatbotDemo industry="E-Commerce" />
    </section>
  )
}
