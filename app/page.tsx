import { ChatInterface } from "@/components/chat-interface"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">College Department AI Assistant</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant answers about teachers, fees, syllabus, admission process, and more. Our AI assistant is here to
            help you 24/7.
          </p>
        </div>
        <ChatInterface />
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need human assistance? Our AI will automatically create a support ticket for you.
          </p>
        </div>
      </div>
    </div>
  )
}
