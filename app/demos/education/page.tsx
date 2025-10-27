import ChatbotDemo from "@/components/chatbot-demo"

export default function EducationDemo() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🎓 Education AI Chatbot Demo</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Explore how AI can automate student counseling, course inquiries, and admission support.
      </p>
      <ChatbotDemo industry="Education" />
    </section>
  )
}
