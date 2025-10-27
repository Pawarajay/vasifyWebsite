// "use client"

// import { useState } from "react"
// import {
//   ArrowRight,
//   MessageCircle,
//   Star,
//   Users,
//   Zap,
//   Shield,
//   BarChart3,
//   Bot,
//   ShoppingCart,
//   QrCode,
//   Code,
//   Building,
//   GraduationCap,
//   CreditCard,
//   Plane,
//   UserCheck,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import Head from "next/head"
// import { Dialog } from "@headlessui/react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import Marquee from "react-fast-marquee"

// export default function AIAgentPage() {
//   const [isDemoOpen, setIsDemoOpen] = useState(false)
//   const [demoIndustry, setDemoIndustry] = useState("")
//   const [isConsultOpen, setIsConsultOpen] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
//   const [formSubmitted, setFormSubmitted] = useState(false)

//   const trustedLogos = ["NICMAR", "Parul University", "RINGS & I", "SNAP", "Sri Balaji Society", "AFAIRS", "IMS"]

//   const targetIndustries = [
//     {
//       icon: ShoppingCart,
//       title: "Retail & Services",
//       description:
//         "Retailers, salons, gyms, and clinics looking to enhance customer engagement and streamline operations.",
//       color: "from-green-500 to-emerald-600",
//     },
//     {
//       icon: Building,
//       title: "Real Estate",
//       description:
//         "Agents and developers aiming to automate lead management and client communication directly via WhatsApp.",
//       color: "from-blue-500 to-cyan-600",
//     },
//     {
//       icon: GraduationCap,
//       title: "EdTech & Coaching",
//       description: "Institutes and platforms seeking efficient student communication and enrollment processes.",
//       color: "from-purple-500 to-pink-600",
//     },
//     {
//       icon: CreditCard,
//       title: "BFSI & Insurance",
//       description: "Advisors in banking, finance, and insurance requiring secure and automated client interactions.",
//       color: "from-orange-500 to-red-600",
//     },
//     {
//       icon: Plane,
//       title: "Hospitality & Travel",
//       description: "Hotels and travel agents looking to manage bookings and customer inquiries seamlessly.",
//       color: "from-indigo-500 to-purple-600",
//     },
//     {
//       icon: UserCheck,
//       title: "Freelancers & Consultants",
//       description:
//         "Independent professionals and regional service providers needing a robust tool for client acquisition and management.",
//       color: "from-teal-500 to-green-600",
//     },
//   ]

//   const features = [
//     { icon: Zap, title: "Instant Automation", description: "Set up automated responses and workflows in minutes, not hours" },
//     { icon: Users, title: "Multi-Agent Support", description: "Manage multiple customer conversations with team collaboration" },
//     { icon: BarChart3, title: "Advanced Analytics", description: "Track performance with detailed insights and reporting" },
//     { icon: Shield, title: "Enterprise Security", description: "Bank-grade security with full compliance and data protection" },
//   ]

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Consultation Form Submitted:", formData)
//     setFormSubmitted(true)
//     setFormData({ name: "", email: "", phone: "" })
//   }

//   return (
//     <>
//       <Head>
//         <title>AI Agent - Intelligent Conversational AI for Business | VasifyTech</title>
//         <meta
//           name="description"
//           content="Revolutionary AI Agent that handles unstructured conversations in all Indian languages. Easy WhatsApp, mobile & web integration with smart CRM connectivity and industry-specific automation flows."
//         />
//       </Head>

//       <div className="min-h-screen relative">
//         {/* Hero Section with Animated Background */}
//         <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
//           <div className="absolute inset-0 -z-10">
//             {/* Animated gradient background */}
//             <div className="w-full h-full bg-gradient-to-r from-green-100 via-green-200 to-green-100 animate-gradient-x"></div>
//           </div>

//           <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//             Meet Your <span className="text-green-500">AI Agent</span> for WhatsApp & Business Automation
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             Intelligent conversational AI that handles unstructured conversations, multi-language support, and industry-specific automation.
//           </p>
//           <div className="flex justify-center gap-4">
//             <Button
//               size="lg"
//               className="bg-green-500 text-white px-8 py-4 rounded-lg"
//               onClick={() => setIsConsultOpen(true)}
//             >
//               Book Free Consultation
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg"
//               onClick={() => {
//                 setDemoIndustry("General")
//                 setIsDemoOpen(true)
//               }}
//             >
//               Try AI Demo
//             </Button>
//           </div>
//         </section>

//         {/* Client Logos Carousel */}
//         <section className="py-10 bg-white">
//           <Marquee gradient={false} speed={50} className="flex items-center">
//             {trustedLogos.map((logo, idx) => (
//               <div key={idx} className="mx-10 flex items-center justify-center h-20 w-40 bg-gray-100 rounded-lg">
//                 <span className="font-bold text-gray-700">{logo}</span>
//               </div>
//             ))}
//           </Marquee>
//         </section>

//         {/* AI Demo / Target Industries Section */}
//         <section className="py-20 px-6">
//           <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
//             Experience Our AI Chatbot in Action
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {targetIndustries.map((industry, index) => (
//               <div key={index} className="relative group">
//                 <Card className="bg-white border-0 shadow-sm h-full">
//                   <CardHeader className="text-center pb-4">
//                     <div
//                       className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center`}
//                     >
//                       <industry.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <CardTitle className="text-xl font-bold text-gray-900">{industry.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-gray-600 text-center">{industry.description}</p>
//                   </CardContent>
//                 </Card>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition"
//                   onClick={() => {
//                     setDemoIndustry(industry.title)
//                     setIsDemoOpen(true)
//                   }}
//                 >
//                   🎯 Try Demo
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-20 px-6 bg-gray-100">
//           <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Powerful Features</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition">
//                 <CardHeader className="text-center pb-4">
//                   <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
//                     <feature.icon className="h-8 w-8 text-green-600" />
//                   </div>
//                   <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 text-center">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* Floating Chatbot Widget */}
//         <div className="fixed bottom-6 right-6 z-50">
//           <Button
//             size="lg"
//             className="rounded-full bg-green-500 text-white p-4 shadow-lg"
//             onClick={() => {
//               setDemoIndustry("General")
//               setIsDemoOpen(true)
//             }}
//           >
//             <MessageCircle className="h-6 w-6" />
//           </Button>
//         </div>

//         {/* AI Demo Modal */}
//         <Dialog open={isDemoOpen} onClose={() => setIsDemoOpen(false)} className="relative z-50">
//           <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//           <div className="fixed inset-0 flex items-center justify-center p-4">
//             <Dialog.Panel className="mx-auto max-w-2xl bg-white rounded-xl shadow-lg p-6">
//               <Dialog.Title className="text-2xl font-bold mb-4">AI Chatbot Demo - {demoIndustry}</Dialog.Title>
//               <p className="mb-6 text-gray-600">
//                 Here you can integrate your live chatbot iframe, video, or interactive demo for {demoIndustry}.
//               </p>
//               <Button onClick={() => setIsDemoOpen(false)} className="bg-green-500 text-white">
//                 Close
//               </Button>
//             </Dialog.Panel>
//           </div>
//         </Dialog>

//         {/* Book Consultation Modal */}
//         <Dialog open={isConsultOpen} onClose={() => setIsConsultOpen(false)} className="relative z-50">
//           <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//           <div className="fixed inset-0 flex items-center justify-center p-4">
//             <Dialog.Panel className="mx-auto max-w-md bg-white rounded-xl shadow-lg p-6">
//               <Dialog.Title className="text-2xl font-bold mb-4">Book a Free Consultation</Dialog.Title>
//               {!formSubmitted ? (
//                 <form onSubmit={handleFormSubmit} className="space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                   />
//                   <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                   />
//                   <div className="flex justify-end gap-4">
//                     <Button type="submit" className="bg-green-500 text-white">
//                       Submit
//                     </Button>
//                     <Button variant="outline" onClick={() => setIsConsultOpen(false)}>
//                       Cancel
//                     </Button>
//                   </div>
//                 </form>
//               ) : (
//                 <div className="text-center">
//                   <p className="text-green-600 font-bold mb-4">Thank you! We will contact you soon.</p>
//                   <Button onClick={() => setIsConsultOpen(false)}>Close</Button>
//                 </div>
//               )}
//             </Dialog.Panel>
//           </div>
//         </Dialog>

//         {/* Hero Background Animation CSS */}
//         <style jsx>{`
//           @keyframes gradient-x {
//             0% {
//               background-position: 0% 50%;
//             }
//             50% {
//               background-position: 100% 50%;
//             }
//             100% {
//               background-position: 0% 50%;
//             }
//           }
//           .animate-gradient-x {
//             background-size: 200% 200%;
//             animation: gradient-x 15s ease infinite;
//           }
//         `}</style>
//       </div>
//     </>
//   )
// }



// 2nd Animated design (best)
// "use client"

// import { useState } from "react"
// import {
//   ArrowRight,
//   MessageCircle,
//   Star,
//   Users,
//   Zap,
//   Shield,
//   BarChart3,
//   Bot,
//   ShoppingCart,
//   Code,
//   Building,
//   GraduationCap,
//   CreditCard,
//   Plane,
//   UserCheck,
//   LineChart,
//   BrainCircuit,
//   Rocket,
// } from "lucide-react"
// import Link from "next/link"
// import { Dialog } from "@headlessui/react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import Marquee from "react-fast-marquee"

// export default function AIAgentPage() {
//   const [isDemoOpen, setIsDemoOpen] = useState(false)
//   const [isConsultOpen, setIsConsultOpen] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
//   const [formSubmitted, setFormSubmitted] = useState(false)
//   const [roiData, setRoiData] = useState({ leads: "", conversion: "", dealValue: "" })
//   const [roiResult, setRoiResult] = useState<number | null>(null)

//   const trustedLogos = ["NICMAR", "Parul University", "RINGS & I", "SNAP", "Sri Balaji Society", "AFAIRS", "IMS"]

//   const targetIndustries = [
//     { icon: Building, title: "Real Estate", color: "from-blue-500 to-cyan-600" },
//     { icon: Plane, title: "Travel & Hospitality", color: "from-indigo-500 to-purple-600" },
//     { icon: ShoppingCart, title: "Retail & E-Commerce", color: "from-green-500 to-emerald-600" },
//     { icon: GraduationCap, title: "Education & Coaching", color: "from-purple-500 to-pink-600" },
//     { icon: CreditCard, title: "Finance & Insurance", color: "from-orange-500 to-red-600" },
//     { icon: UserCheck, title: "Consultants & Freelancers", color: "from-teal-500 to-green-600" },
//   ]

//   const howItWorks = [
//     {
//       icon: Bot,
//       title: "Detect",
//       desc: "AI captures and understands customer intent from any chat channel.",
//       color: "from-green-400 to-emerald-600",
//     },
//     {
//       icon: BrainCircuit,
//       title: "Respond",
//       desc: "Automated smart replies with multilingual, context-aware precision.",
//       color: "from-blue-400 to-cyan-600",
//     },
//     {
//       icon: Rocket,
//       title: "Optimize",
//       desc: "Learns from every interaction to improve conversions automatically.",
//       color: "from-purple-400 to-pink-600",
//     },
//   ]

//   const caseStudies = [
//     {
//       title: "Real Estate Lead Automation",
//       result: "3× more qualified leads via WhatsApp in 30 days",
//     },
//     {
//       title: "Travel Agency AI Assistant",
//       result: "40% reduction in customer support time",
//     },
//     {
//       title: "EdTech Enrollment Bot",
//       result: "Increased admissions by 25% within 2 months",
//     },
//   ]

//   // ROI calculator
//   const handleRoiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRoiData({ ...roiData, [e.target.name]: e.target.value })
//   }

//   const calculateROI = () => {
//     const leads = parseFloat(roiData.leads) || 0
//     const conversion = parseFloat(roiData.conversion) / 100 || 0
//     const dealValue = parseFloat(roiData.dealValue) || 0
//     const revenue = leads * conversion * dealValue
//     setRoiResult(revenue)
//   }

//   // Consultation form
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setFormSubmitted(true)
//     setFormData({ name: "", email: "", phone: "" })
//   }

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="relative text-center py-24 px-6 overflow-hidden">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-100 via-emerald-200 to-green-100 animate-gradient-x"></div>
//         <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//           Your <span className="text-emerald-600">24×7 Digital Employee</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
//           Automate conversations, qualify leads, and engage customers — powered by AI trained for your industry.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <Button size="lg" className="bg-emerald-600 text-white px-8 py-4" onClick={() => setIsDemoOpen(true)}>
//             Try Live AI Agent Demo
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-2 border-emerald-600 text-emerald-700 px-8 py-4"
//             onClick={() => setIsConsultOpen(true)}
//           >
//             Book Consultation
//           </Button>
//         </div>
//       </section>

//       {/* Industry Use Cases Slider */}
//       <section className="py-16 bg-gray-50">
//         <h2 className="text-4xl font-bold text-center mb-10">Industry Use Cases</h2>
//         <Marquee gradient={false} speed={45}>
//           {targetIndustries.map((item, idx) => (
//             <div
//               key={idx}
//               className={`mx-6 min-w-[260px] p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center`}
//             >
//               <div
//                 className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
//               >
//                 <item.icon className="w-8 h-8 text-white" />
//               </div>
//               <p className="font-semibold text-gray-800">{item.title}</p>
//             </div>
//           ))}
//         </Marquee>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {howItWorks.map((step, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl p-8 text-center bg-gradient-to-br ${step.color} text-white shadow-lg transform hover:scale-105 transition`}
//             >
//               <step.icon className="w-12 h-12 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
//               <p className="opacity-90">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ROI Calculator */}
//       <section className="py-20 px-6 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center mb-12">Estimate Your ROI</h2>
//         <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
//           <div className="grid md:grid-cols-3 gap-4 mb-6">
//             <input
//               type="number"
//               name="leads"
//               placeholder="Leads per month"
//               onChange={handleRoiChange}
//               className="border border-gray-300 rounded-lg px-4 py-2"
//             />
//             <input
//               type="number"
//               name="conversion"
//               placeholder="Conversion rate (%)"
//               onChange={handleRoiChange}
//               className="border border-gray-300 rounded-lg px-4 py-2"
//             />
//             <input
//               type="number"
//               name="dealValue"
//               placeholder="Avg deal value (₹)"
//               onChange={handleRoiChange}
//               className="border border-gray-300 rounded-lg px-4 py-2"
//             />
//           </div>
//           <Button onClick={calculateROI} className="bg-emerald-600 text-white w-full py-3">
//             Calculate ROI
//           </Button>
//           {roiResult !== null && (
//             <p className="text-center text-lg text-emerald-700 font-semibold mt-6">
//               💰 Estimated Monthly Revenue: ₹{roiResult.toLocaleString("en-IN")}
//             </p>
//           )}
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {caseStudies.map((study, idx) => (
//             <Card key={idx} className="max-w-sm shadow hover:shadow-lg transition rounded-2xl">
//               <CardHeader>
//                 <CardTitle>{study.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">{study.result}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 text-center bg-gradient-to-r from-emerald-600 to-green-500 text-white">
//         <h2 className="text-4xl font-bold mb-6">Ready to Deploy Your AI Agent?</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           <Button size="lg" className="bg-white text-emerald-700" onClick={() => setIsDemoOpen(true)}>
//             Try Live AI Agent Demo
//           </Button>
//           <Button size="lg" variant="outline" className="border-2 border-white text-white" onClick={() => setIsConsultOpen(true)}>
//             Book Consultation
//           </Button>
//         </div>
//       </section>

//       {/* Demo Modal */}
//       <Dialog open={isDemoOpen} onClose={() => setIsDemoOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="max-w-2xl bg-white rounded-xl shadow-lg p-6">
//             <Dialog.Title className="text-2xl font-bold mb-4">AI Chatbot Demo</Dialog.Title>
//             <p className="text-gray-600 mb-6">Integrate a live chatbot iframe or demo video here.</p>
//             <Button onClick={() => setIsDemoOpen(false)} className="bg-emerald-600 text-white">
//               Close
//             </Button>
//           </Dialog.Panel>
//         </div>
//       </Dialog>

//       {/* Consultation Modal */}
//       <Dialog open={isConsultOpen} onClose={() => setIsConsultOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="max-w-md bg-white rounded-xl shadow-lg p-6">
//             <Dialog.Title className="text-2xl font-bold mb-4">Book Consultation</Dialog.Title>
//             {!formSubmitted ? (
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
//                 <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
//                 <input type="text" name="phone" placeholder="Phone Number" onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
//                 <Button type="submit" className="bg-emerald-600 text-white w-full">Submit</Button>
//               </form>
//             ) : (
//               <p className="text-green-600 text-center font-semibold">Thank you! We'll contact you shortly.</p>
//             )}
//           </Dialog.Panel>
//         </div>
//       </Dialog>

//       {/* Background Animation */}
//       <style jsx>{`
//         @keyframes gradient-x {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//       `}</style>
//     </div>
//   )
// }


//simple 
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Bot, ArrowRight, Building2, HeartPulse, Car, Plane, Home } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Dialog } from "@headlessui/react";

// export default function AIAgentPage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "ai", text: "👋 Hi there! I’m your AI Agent. How can I help your business today?" },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     const newMessages = [...messages, { sender: "user", text: input }];
//     setMessages(newMessages);
//     setInput("");

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "ai",
//           text:
//             "💡 I can help with automating leads, 24x7 customer chat, and smart responses for your business!",
//         },
//       ]);
//     }, 800);
//   };

//   const industries = [
//     { icon: Home, name: "Real Estate" },
//     { icon: Plane, name: "Travel" },
//     { icon: Car, name: "Automotive" },
//     { icon: HeartPulse, name: "Healthcare" },
//     { icon: Building2, name: "Enterprise" },
//   ];

//   const howItWorks = [
//     { step: "1", title: "Detect", desc: "AI understands customer intent in real time." },
//     { step: "2", title: "Respond", desc: "Delivers instant, personalized replies 24/7." },
//     { step: "3", title: "Optimize", desc: "Learns from interactions to improve ROI." },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           Your 24×7 Digital Employee
//         </motion.h1>
//         <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
//           Automate customer engagement, lead generation, and support with our AI Agent built for your business.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
//           >
//             Try Live AI Agent Demo
//           </button>
//           <Link
//             href="/contact"
//             className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
//           >
//             Book Consultation
//           </Link>
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="absolute inset-0 opacity-20"
//         >
//           <Image
//             src="/images/ai-bg-pattern.png"
//             alt="AI Background"
//             fill
//             className="object-cover object-center"
//           />
//         </motion.div>
//       </section>

//       {/* Use Cases Slider */}
//       <section className="py-20 px-6 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-10">AI Agents for Every Industry</h2>
//         <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
//           {industries.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="flex-shrink-0 w-60 bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center"
//             >
//               <item.icon className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="font-semibold text-lg">{item.name}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {howItWorks.map((step, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -5 }}
//               className="bg-white shadow-lg rounded-2xl p-6 border"
//             >
//               <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
//               <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//               <p className="text-gray-600">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ROI Calculator */}
//       <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 text-center">
//         <h2 className="text-3xl font-bold mb-6">Estimate Your AI ROI</h2>
//         <ROISection />
//       </section>

//       {/* Case Studies */}
//       <section className="py-20 px-6 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-10">AI Success Stories</h2>
//         <div className="flex gap-6 overflow-x-auto no-scrollbar">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md p-6 border"
//             >
//               <h3 className="font-semibold text-lg mb-2">Project {i}</h3>
//               <p className="text-gray-600 mb-4">
//                 Increased client conversions by {20 + i * 10}% using AI chat automation.
//               </p>
//               <Link href="#" className="text-blue-600 font-medium flex items-center gap-1">
//                 View Case Study <ArrowRight size={16} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 bg-gradient-to-br from-blue-700 to-indigo-800 text-white text-center">
//         <h2 className="text-4xl font-bold mb-6">Experience the Power of AI Today</h2>
//         <p className="max-w-2xl mx-auto mb-8 opacity-90">
//           Get a personalized AI agent tailored to your business operations.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
//           >
//             Try Live AI Agent Demo
//           </button>
//           <Link
//             href="/contact"
//             className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
//           >
//             Book Consultation
//           </Link>
//         </div>
//       </section>

//       {/* Popup with Simulated AI Chat */}
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-6">
//             <Dialog.Title className="text-2xl font-bold mb-4 flex items-center gap-2">
//               <Bot className="text-blue-600" /> AI Agent Demo
//             </Dialog.Title>

//             {/* Simulated Chat UI */}
//             <div className="w-full bg-gray-50 rounded-lg border shadow-sm p-4 flex flex-col h-[450px]">
//               <div className="flex-1 overflow-y-auto mb-4 space-y-3">
//                 {messages.map((m, i) => (
//                   <div
//                     key={i}
//                     className={`p-2 rounded-lg max-w-[80%] ${
//                       m.sender === "user"
//                         ? "bg-blue-600 text-white ml-auto"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {m.text}
//                   </div>
//                 ))}
//               </div>

//               <div className="flex items-center">
//                 <input
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder="Type a message..."
//                   className="flex-1 border rounded-lg px-3 py-2 mr-2 focus:outline-none"
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>

//             <button
//               onClick={() => setIsOpen(false)}
//               className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
//             >
//               Close Demo
//             </button>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// }

// /* ROI CALCULATOR COMPONENT */
// function ROISection() {
//   const [leads, setLeads] = useState("");
//   const [rate, setRate] = useState("");
//   const [value, setValue] = useState("");
//   const [roi, setRoi] = useState<number | null>(null);

//   const calculateROI = () => {
//     const l = parseFloat(leads);
//     const r = parseFloat(rate) / 100;
//     const v = parseFloat(value);
//     if (isNaN(l) || isNaN(r) || isNaN(v)) return;
//     const profit = l * r * v;
//     setRoi(profit);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
//       <div className="grid gap-4 mb-4">
//         <input
//           type="number"
//           placeholder="Monthly Leads"
//           value={leads}
//           onChange={(e) => setLeads(e.target.value)}
//           className="border rounded-lg px-3 py-2 w-full"
//         />
//         <input
//           type="number"
//           placeholder="Conversion Rate (%)"
//           value={rate}
//           onChange={(e) => setRate(e.target.value)}
//           className="border rounded-lg px-3 py-2 w-full"
//         />
//         <input
//           type="number"
//           placeholder="Avg Deal Value (₹)"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           className="border rounded-lg px-3 py-2 w-full"
//         />
//       </div>
//       <button
//         onClick={calculateROI}
//         className="bg-blue-700 text-white w-full py-2 rounded-lg hover:bg-blue-800 transition"
//       >
//         Calculate ROI
//       </button>
//       {roi !== null && (
//         <p className="mt-4 text-lg font-semibold text-gray-800">
//           Estimated Monthly Revenue: ₹{roi.toLocaleString("en-IN")}
//         </p>
//       )}
//     </div>
//   );
// }


//Ai-agent replaying 
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Bot,
//   ArrowRight,
//   Building2,
//   HeartPulse,
//   Car,
//   Plane,
//   Home,
//   Send,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Dialog } from "@headlessui/react";

// export default function AIAgentPage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "ai", text: "👋 Hi there! I’m your AI Agent. How can I help your business today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const aiReplies = [
//     "🤖 I can automate customer support and capture leads 24/7!",
//     "💬 Want to see how AI can boost your conversions?",
//     "🚀 Businesses using AI agents have saved over 60% in response time.",
//     "📈 I can help increase lead conversions through instant replies.",
//     "✨ Ask me how to integrate AI with your WhatsApp or website.",
//   ];

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     const newMessages = [...messages, { sender: "user", text: input }];
//     setMessages(newMessages);
//     setInput("");
//     setIsTyping(true);

//     setTimeout(() => {
//       const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
//       setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
//       setIsTyping(false);
//     }, 1200);
//   };

//   const industries = [
//     { icon: Home, name: "Real Estate" },
//     { icon: Plane, name: "Travel" },
//     { icon: Car, name: "Automotive" },
//     { icon: HeartPulse, name: "Healthcare" },
//     { icon: Building2, name: "Enterprise" },
//   ];

//   const howItWorks = [
//     { step: "1", title: "Detect", desc: "AI understands customer intent in real time." },
//     { step: "2", title: "Respond", desc: "Delivers instant, personalized replies 24/7." },
//     { step: "3", title: "Optimize", desc: "Learns from interactions to improve ROI." },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           Your 24×7 Digital Employee
//         </motion.h1>
//         <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
//           Automate customer engagement, lead generation, and support with our AI Agent built for your business.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
//           >
//             Try Live AI Agent Demo
//           </button>
//           <Link
//             href="/contact"
//             className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
//           >
//             Book Consultation
//           </Link>
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="absolute inset-0 opacity-20"
//         >
//           <Image
//             src="/images/ai-bg-pattern.png"
//             alt="AI Background"
//             fill
//             className="object-cover object-center"
//           />
//         </motion.div>
//       </section>

//       {/* Use Cases */}
//       <section className="py-20 px-6 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-10">AI Agents for Every Industry</h2>
//         <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
//           {industries.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="flex-shrink-0 w-60 bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center"
//             >
//               <item.icon className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="font-semibold text-lg">{item.name}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {howItWorks.map((step, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -5 }}
//               className="bg-white shadow-lg rounded-2xl p-6 border"
//             >
//               <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
//               <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//               <p className="text-gray-600">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ROI Calculator */}
//       <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 text-center">
//         <h2 className="text-3xl font-bold mb-6">Estimate Your AI ROI</h2>
//         <ROISection />
//       </section>

//       {/* Case Studies */}
//       <section className="py-20 px-6 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-10">AI Success Stories</h2>
//         <div className="flex gap-6 overflow-x-auto no-scrollbar">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md p-6 border"
//             >
//               <h3 className="font-semibold text-lg mb-2">Project {i}</h3>
//               <p className="text-gray-600 mb-4">
//                 Increased client conversions by {20 + i * 10}% using AI chat automation.
//               </p>
//               <Link href="#" className="text-blue-600 font-medium flex items-center gap-1">
//                 View Case Study <ArrowRight size={16} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6 bg-gradient-to-br from-blue-700 to-indigo-800 text-white text-center">
//         <h2 className="text-4xl font-bold mb-6">Experience the Power of AI Today</h2>
//         <p className="max-w-2xl mx-auto mb-8 opacity-90">
//           Get a personalized AI agent tailored to your business operations.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
//           >
//             Try Live AI Agent Demo
//           </button>
//           <Link
//             href="/contact"
//             className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
//           >
//             Book Consultation
//           </Link>
//         </div>
//       </section>

//       {/* Chatbot Modal */}
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-6">
//             <Dialog.Title className="text-2xl font-bold mb-4 flex items-center gap-2">
//               <Bot className="text-blue-600" /> AI Agent Demo
//             </Dialog.Title>

//             {/* Simulated Chat */}
//             <div className="w-full bg-gray-50 rounded-lg border shadow-sm p-4 flex flex-col h-[450px]">
//               <div className="flex-1 overflow-y-auto mb-4 space-y-3">
//                 {messages.map((m, i) => (
//                   <div
//                     key={i}
//                     className={`p-2 rounded-lg max-w-[80%] ${
//                       m.sender === "user"
//                         ? "bg-blue-600 text-white ml-auto"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {m.text}
//                   </div>
//                 ))}
//                 {isTyping && (
//                   <div className="bg-gray-200 text-gray-600 rounded-lg px-3 py-2 inline-block animate-pulse">
//                     AI is typing...
//                   </div>
//                 )}
//               </div>

//               <div className="flex items-center">
//                 <input
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder="Type a message..."
//                   className="flex-1 border rounded-lg px-3 py-2 mr-2 focus:outline-none"
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1"
//                 >
//                   <Send size={16} /> Send
//                 </button>
//               </div>
//             </div>

//             <button
//               onClick={() => setIsOpen(false)}
//               className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
//             >
//               Close Demo
//             </button>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// }

// /* ROI CALCULATOR COMPONENT */
// function ROISection() {
//   const [leads, setLeads] = useState("");
//   const [rate, setRate] = useState("");
//   const [value, setValue] = useState("");
//   const [roi, setRoi] = useState<number | null>(null);

//   const calculateROI = () => {
//     const l = parseFloat(leads);
//     const r = parseFloat(rate) / 100;
//     const v = parseFloat(value);
//     if (isNaN(l) || isNaN(r) || isNaN(v)) return;
//     const profit = l * r * v;
//     setRoi(profit);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
//       <div className="grid gap-4 mb-4">
//         <input
//           type="number"
//           placeholder="Monthly Leads"
//           value={leads}
//           onChange={(e) => setLeads(e.target.value)}
//           className="border rounded-lg px-3 py-2 w-full"
//         />
//         <input
//           type="number"
//           placeholder="Conversion Rate (%)"
//           value={rate}
//           onChange={(e) => setRate(e.target.value)}
//           className="border rounded-lg px-3 py-2 w-full"
//         />
//         <input
//           type="number"
//           placeholder="Avg Deal Value (₹)"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           className="border rounded-lg px-3 py-2 w-full"
//         />
//       </div>
//       <button
//         onClick={calculateROI}
//         className="bg-blue-700 text-white w-full py-2 rounded-lg hover:bg-blue-800 transition"
//       >
//         Calculate ROI
//       </button>
//       {roi !== null && (
//         <p className="mt-4 text-lg font-semibold text-gray-800">
//           Estimated Monthly Revenue: ₹{roi.toLocaleString("en-IN")}
//         </p>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  ArrowRight,
  Building2,
  HeartPulse,
  Car,
  Plane,
  Home,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

export default function AIAgentPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hi there! I’m your AI Agent. How can I help your business today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const aiReplies = [
    "🤖 I can automate customer support and capture leads 24/7!",
    "💬 Want to see how AI can boost your conversions?",
    "🚀 Businesses using AI agents have saved over 60% in response time.",
    "📈 I can help increase lead conversions through instant replies.",
    "✨ Ask me how to integrate AI with your WhatsApp or website.",
  ];

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  const industries = [
    { icon: Home, name: "Real Estate" },
    { icon: Plane, name: "Travel" },
    { icon: Car, name: "Automotive" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: Building2, name: "Enterprise" },
  ];

  const howItWorks = [
    { step: "1", title: "Detect", desc: "AI understands customer intent in real time." },
    { step: "2", title: "Respond", desc: "Delivers instant, personalized replies 24/7." },
    { step: "3", title: "Optimize", desc: "Learns from interactions to improve ROI." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Your 24×7 Digital Employee
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
          Automate customer engagement, lead generation, and support with our AI Agent built for your business.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Try Live AI Agent Demo
          </button>
          <Link
            href="/contact"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">AI Agents for Every Industry</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-60 bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center"
            >
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-2xl p-6 border"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Estimate Your AI ROI</h2>
        <ROISection />
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">AI Success Stories</h2>
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md p-6 border"
            >
              <h3 className="font-semibold text-lg mb-2">Project {i}</h3>
              <p className="text-gray-600 mb-4">
                Increased client conversions by {20 + i * 10}% using AI chat automation.
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center gap-1">
                View Case Study <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-700 to-indigo-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Experience the Power of AI Today</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Get a personalized AI agent tailored to your business operations.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Try Live AI Agent Demo
          </button>
          <Link
            href="/contact"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Chatbot Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-6">
            <Dialog.Title className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Bot className="text-blue-600" /> AI Agent Demo
            </Dialog.Title>

            {/* Simulated Chat */}
            <div className="w-full bg-gray-50 rounded-lg border shadow-sm p-4 flex flex-col h-[450px]">
              <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg max-w-[80%] ${
                      m.sender === "user"
                        ? "bg-blue-600 text-white ml-auto"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-gray-200 text-gray-600 rounded-lg px-3 py-2 inline-block animate-pulse">
                    AI is typing...
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 border rounded-lg px-3 py-2 mr-2 focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1"
                >
                  <Send size={16} /> Send
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
            >
              Close Demo
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

/* ROI CALCULATOR COMPONENT */
function ROISection() {
  const [leads, setLeads] = useState("");
  const [rate, setRate] = useState("");
  const [value, setValue] = useState("");
  const [roi, setRoi] = useState<number | null>(null);

  const calculateROI = () => {
    const l = parseFloat(leads);
    const r = parseFloat(rate) / 100;
    const v = parseFloat(value);
    if (isNaN(l) || isNaN(r) || isNaN(v)) return;
    const profit = l * r * v;
    setRoi(profit);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
      <div className="grid gap-4 mb-4">
        <input
          type="number"
          placeholder="Monthly Leads"
          value={leads}
          onChange={(e) => setLeads(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Conversion Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Avg Deal Value (₹)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <button
        onClick={calculateROI}
        className="bg-blue-700 text-white w-full py-2 rounded-lg hover:bg-blue-800 transition"
      >
        Calculate ROI
      </button>
      {roi !== null && (
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Estimated Monthly Revenue: ₹{roi.toLocaleString("en-IN")}
        </p>
      )}
    </div>
  );
}
