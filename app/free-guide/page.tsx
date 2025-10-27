// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Download, FileText, Users, Star } from "lucide-react"
// import { DownloadModal } from "@/components/download-modal"

// const guides = [
//   {
//     id: 1,
//     title: "Custom WhatsApp Automation Guide Vasify",
//     description: "A comprehensive guide to setting up and automating WhatsApp Business for your business needs.",
//     pages: 3,
//     category: "Chatbots",
//     downloadCount: 12500,
//     rating: 4.9,
//     thumbnail: "/MyOperator-chatbot-platform.png?height=200&width=300&text=WhatsApp+API+Guide",
//     pdfUrl: "https://vasifytech.com/Custom_WhatsApp_Automation_Guide_Vasify.pdf",
//     topics: ["Getting Started", "API Integration", "Automation Flows", "Best Practices"],
//   },
//   {
//     id: 2,
//     title: "WhatsApp Ecommerce Eguide Vasify",
//     description:
//       "Master WhatsApp Business for e-commerce with our guide on automation, marketing, and customer engagement.",
//     pages: 3,
//     category: "E-commerce",
//     downloadCount: 8900,
//     rating: 4.8,
//     thumbnail: "/WhatsApp-Business-account.png?height=200&width=300&text=Marketing+Automation",
//     pdfUrl: "https://vasifytech.com/WhatsApp_Ecommerce_Eguide_Vasify.pdf",
//     topics: ["E-commerce Setup", "Product Catalog", "Order Management", "Customer Engagement"],
//   },
//   {
//     id: 3,
//     title: "Banking & Fintech E‑Guide Vasify",
//     description:
//       "Optimize your banking and fintech operations with WhatsApp Business automation, enhancing customer service and engagement.",
//     pages: 5,
//     category: "Banking & Fintech",
//     downloadCount: 15200,
//     rating: 4.9,
//     thumbnail: "/bankingfintech.png?height=200&width=300&text=Chatbot+Design",
//     pdfUrl: "https://vasifytech.com/Banking%20%26%20Fintech%20E%E2%80%91Guide.pdf",
//     topics: ["Secure Messaging", "Transaction Alerts", "Customer Support", "Regulatory Compliance"],
//   },
//   {
//     id: 4,
//     title: "Healthcare & Clinics E‑Guide Vasify",
//     description:
//       "Leverage WhatsApp Business for healthcare and clinics to improve patient communication and streamline operations.",
//     pages: 5,
//     category: "Healthcare & Clinics",
//     downloadCount: 6700,
//     rating: 4.7,
//     thumbnail: "/healthcare.png?height=200&width=300&text=Compliance+Guide",
//     pdfUrl: "https://vasifytech.com/Healthcare%20%26%20Clinics%20E%E2%80%91Guide.pdf",
//     topics: ["Appointment Reminders", "Patient Communication", "Telehealth Integration", "Data Privacy"],
//   },
//   {
//     id: 5,
//     title: "Education & Coaching Institutes E-Guide Vasify ",
//     description:
//       "Enhance student engagement and streamline administrative tasks with WhatsApp Business automation for educational institutions.",
//     pages: 5,
//     category: "Education & Coaching Institutes",
//     downloadCount: 9800,
//     rating: 4.8,
//     thumbnail: "/education.png?height=200&width=300&text=Support+Automation",
//     pdfUrl: "https://vasifytech.com/Education%20%26%20Coaching%20Institutes%20E-Guide.pdf",
//     topics: ["Student Communication", "Course Updates", "Administrative Automation", "Feedback Collection"],
//   },
//   // {
//   //   id: 6,
//   //   title: "WhatsApp E-commerce Integration",
//   //   description: "Complete guide to integrating WhatsApp with your e-commerce platform for better customer experience.",
//   //   pages: 41,
//   //   category: "E-commerce",
//   //   downloadCount: 11300,
//   //   rating: 4.9,
//   //   thumbnail: "/placeholder.svg?height=200&width=300&text=E-commerce+Integration",
//   //   pdfUrl: "/guides/whatsapp-ecommerce-integration.pdf",
//   //   topics: ["Order Management", "Payment Integration", "Shipping Updates", "Customer Notifications"],
//   // },
// ]

// const categories = ["All", "Banking & Fintech", "Healthcare & Clinics", "Chatbots", "Education & Coaching Institutes", "E-commerce"]

// export default function FreeGuidePage() {
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [selectedDifficulty, setSelectedDifficulty] = useState("All")
//   const [selectedGuide, setSelectedGuide] = useState<any>(null)
//   const [showDownloadModal, setShowDownloadModal] = useState(false)

//   const filteredGuides = guides.filter((guide) => {
//     const categoryMatch = selectedCategory === "All" || guide.category === selectedCategory
//     return categoryMatch
//   })

//   const handleDownload = (guide: any) => {
//     setSelectedGuide(guide)
//     setShowDownloadModal(true)
//   }

//   return (
//     <div className="min-h-screen bg-white">

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-green-50 to-blue-50 py-28">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6">
//             <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
//               Free WhatsApp Business <span className="text-green-500">Guides</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Download our comprehensive guides to master WhatsApp Business automation, marketing, and customer
//               engagement. All guides are completely free and packed with actionable insights.
//             </p>
//             <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
//               <div className="flex items-center space-x-2">
//                 <Users className="w-5 h-5 text-green-500" />
//                 <span>50,000+ Downloads</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FileText className="w-5 h-5 text-blue-500" />
//                 <span>6 Comprehensive Guides</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Star className="w-5 h-5 text-yellow-500" />
//                 <span>4.8 Average Rating</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="py-12 bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <Button
//                     key={category}
//                     variant={selectedCategory === category ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setSelectedCategory(category)}
//                     className={selectedCategory === category ? "bg-green-500 hover:bg-green-600" : ""}
//                   >
//                     {category}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Guides Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredGuides.map((guide) => (
//               <Card key={guide.id} className="hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative">
//                   <img
//                     src={guide.thumbnail || "/placeholder.svg"}
//                     alt={guide.title}
//                     className="w-full h-48 object-cover rounded-t-lg"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <Badge className="bg-white text-gray-900">{guide.category}</Badge>
//                   </div>
//                 </div>

//                 <CardHeader>
//                   <CardTitle className="text-xl">{guide.title}</CardTitle>
//                   <CardDescription className="text-gray-600">{guide.description}</CardDescription>
//                 </CardHeader>

//                 <CardContent className="space-y-4">
//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <span>{guide.pages} pages</span>
//                     <div className="flex items-center space-x-1">
//                       <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                       <span>{guide.rating}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <Download className="w-4 h-4" />
//                     <span>{guide.downloadCount.toLocaleString()} downloads</span>
//                   </div>

//                   <div className="space-y-2">
//                     <h4 className="text-sm font-medium text-gray-900">What you'll learn:</h4>
//                     <div className="flex flex-wrap gap-1">
//                       {guide.topics.slice(0, 3).map((topic, index) => (
//                         <Badge key={index} variant="outline" className="text-xs">
//                           {topic}
//                         </Badge>
//                       ))}
//                       {guide.topics.length > 3 && (
//                         <Badge variant="outline" className="text-xs">
//                           +{guide.topics.length - 3} more
//                         </Badge>
//                       )}
//                     </div>
//                   </div>

//                   <Button
//                     className="w-full bg-green-500 hover:bg-green-600 text-white"
//                     onClick={() => handleDownload(guide)}
//                   >
//                     <Download className="w-4 h-4 mr-2" />
//                     Download Free Guide
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Implement What You've Learned?</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Take your WhatsApp automation to the next level with VasifyTech's powerful platform.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
//               <a href="/contact">Start Free Trial</a>
//             </Button>
//             <Button size="lg" variant="outline" asChild>
//               <a href="/contact">Schedule Demo</a>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Download Modal */}
//       {showDownloadModal && selectedGuide && (
//         <DownloadModal
//           guide={selectedGuide}
//           isOpen={showDownloadModal}
//           onClose={() => {
//             setShowDownloadModal(false)
//             setSelectedGuide(null)
//           }}
//         />
//       )}
//     </div>
//   )
// }


// 2nd 
// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Download, FileText, Users, Star, BookOpen } from "lucide-react";
// import { DownloadModal } from "@/components/download-modal";

// interface Guide {
//   id: number;
//   title: string;
//   description: string;
//   pages: number;
//   category: string;
//   downloadCount: number;
//   rating: number;
//   thumbnail: string;
//   pdfUrl: string;
//   topics: string[];
// }

// const guides: Guide[] = [
//   {
//     id: 1,
//     title: "Custom WhatsApp Automation Guide Vasify",
//     description: "A comprehensive guide to setting up and automating WhatsApp Business for your business needs.",
//     pages: 3,
//     category: "Chatbots",
//     downloadCount: 12500,
//     rating: 4.9,
//     thumbnail: "/MyOperator-chatbot-platform.png",
//     pdfUrl: "https://vasifytech.com/Custom_WhatsApp_Automation_Guide_Vasify.pdf",
//     topics: ["Getting Started", "API Integration", "Automation Flows", "Best Practices"],
//   },
//   {
//     id: 2,
//     title: "WhatsApp Ecommerce Eguide Vasify",
//     description:
//       "Master WhatsApp Business for e-commerce with our guide on automation, marketing, and customer engagement.",
//     pages: 3,
//     category: "E-commerce",
//     downloadCount: 8900,
//     rating: 4.8,
//     thumbnail: "/WhatsApp-Business-account.png",
//     pdfUrl: "https://vasifytech.com/WhatsApp_Ecommerce_Eguide_Vasify.pdf",
//     topics: ["E-commerce Setup", "Product Catalog", "Order Management", "Customer Engagement"],
//   },
// ];

// const categories = ["All", "Chatbots", "E-commerce", "Banking & Fintech", "Healthcare & Clinics", "Education & Coaching Institutes"];

// export default function FreeGuidePage(): JSX.Element {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
//   const [showDownloadModal, setShowDownloadModal] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", business: "" });

//   const filteredGuides = guides.filter((guide) => selectedCategory === "All" || guide.category === selectedCategory);

//   const handleDownload = (guide: Guide) => {
//     setSelectedGuide(guide);
//     setShowDownloadModal(true);
//     // WhatsApp follow-up logic can be added here if needed
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-green-50 to-blue-50 py-28">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
//           <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
//             Free WhatsApp Business <span className="text-green-500">Guides</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Download our comprehensive guides to master WhatsApp Business automation, marketing, and customer engagement.
//           </p>
//           <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
//             <div className="flex items-center space-x-2">
//               <Users className="w-5 h-5 text-green-500" />
//               <span>50,000+ Downloads</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FileText className="w-5 h-5 text-blue-500" />
//               <span>6 Guides</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Star className="w-5 h-5 text-yellow-500" />
//               <span>4.8 Average Rating</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Lead Capture Form */}
//       <section className="py-16 bg-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-green-50 rounded-xl shadow-lg p-8">
//           <h2 className="text-3xl font-bold mb-6 text-center">Get Your Free Guide</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Form submitted! You can now download the guide.");
//             }}
//             className="space-y-4"
//           >
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Business Type"
//               value={formData.business}
//               onChange={(e) => setFormData({ ...formData, business: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2">
//               <Download className="w-5 h-5" /> Download Free Guide
//             </Button>
//           </form>
//         </div>
//       </section>

//       {/* Guides Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredGuides.map((guide) => (
//             <Card key={guide.id} className="hover:shadow-xl transition-shadow duration-300">
//               <div className="relative">
//                 <img src={guide.thumbnail} alt={guide.title} className="w-full h-48 object-cover rounded-t-lg" />
//                 <div className="absolute top-4 left-4">
//                   <Badge className="bg-white text-gray-900">{guide.category}</Badge>
//                 </div>
//               </div>
//               <CardHeader>
//                 <CardTitle className="text-xl">{guide.title}</CardTitle>
//                 <CardDescription className="text-gray-600">{guide.description}</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>{guide.pages} pages</span>
//                   <div className="flex items-center space-x-1">
//                     <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                     <span>{guide.rating}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-2 text-sm text-gray-600">
//                   <Download className="w-4 h-4" />
//                   <span>{guide.downloadCount.toLocaleString()} downloads</span>
//                 </div>

//                 {/* Checklist / Topics */}
//                 <div className="space-y-2">
//                   <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
//                     <BookOpen className="w-4 h-4" /> What you'll learn:
//                   </h4>
//                   <div className="flex flex-wrap gap-1">
//                     {guide.topics.map((topic, idx) => (
//                       <Badge key={idx} variant="outline" className="text-xs">
//                         {topic}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 <Button
//                   className="w-full bg-green-500 hover:bg-green-600 text-white"
//                   onClick={() => handleDownload(guide)}
//                 >
//                   <Download className="w-4 h-4 mr-2" /> Download Free Guide
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Download Modal */}
//       {showDownloadModal && selectedGuide && (
//         <DownloadModal
//           guide={selectedGuide}
//           isOpen={showDownloadModal}
//           onClose={() => {
//             setShowDownloadModal(false);
//             setSelectedGuide(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// 3rd changes of download guide with form 
// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Download, FileText, Users, Star, BookOpen } from "lucide-react";
// import { DownloadModal } from "@/components/download-modal";

// interface Guide {
//   id: number;
//   title: string;
//   description: string;
//   pages: number;
//   category: string;
//   downloadCount: number;
//   rating: number;
//   thumbnail: string;
//   pdfUrl: string;
//   topics: string[];
// }

// const guides: Guide[] = [
//   {
//     id: 1,
//     title: "Custom WhatsApp Automation Guide Vasify",
//     description: "A comprehensive guide to setting up and automating WhatsApp Business for your business needs.",
//     pages: 3,
//     category: "Chatbots",
//     downloadCount: 12500,
//     rating: 4.9,
//     thumbnail: "/MyOperator-chatbot-platform.png",
//     pdfUrl: "https://vasifytech.com/Custom_WhatsApp_Automation_Guide_Vasify.pdf",
//     topics: ["Getting Started", "API Integration", "Automation Flows", "Best Practices"],
//   },
//   {
//     id: 2,
//     title: "WhatsApp Ecommerce Eguide Vasify",
//     description:
//       "Master WhatsApp Business for e-commerce with our guide on automation, marketing, and customer engagement.",
//     pages: 3,
//     category: "E-commerce",
//     downloadCount: 8900,
//     rating: 4.8,
//     thumbnail: "/WhatsApp-Business-account.png",
//     pdfUrl: "https://vasifytech.com/WhatsApp_Ecommerce_Eguide_Vasify.pdf",
//     topics: ["E-commerce Setup", "Product Catalog", "Order Management", "Customer Engagement"],
//   },
// ];

// const categories = ["All", "Chatbots", "E-commerce", "Banking & Fintech", "Healthcare & Clinics", "Education & Coaching Institutes"];

// export default function FreeGuidePage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
//   const [showDownloadModal, setShowDownloadModal] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", business: "", phone: "" });

//   const filteredGuides = guides.filter(
//     (guide) => selectedCategory === "All" || guide.category === selectedCategory
//   );

//   const handleDownload = (guide: Guide) => {
//     setSelectedGuide(guide);
//     setShowDownloadModal(true);

//     // Trigger WhatsApp message if phone is provided
//     if (formData.phone) {
//       const message = encodeURIComponent(
//         `Hello, my name is ${formData.name} from ${formData.business}. I have downloaded the "${guide.title}" guide. Please assist me with AI setup.`
//       );
//       window.open(`https://wa.me/${formData.phone}?text=${message}`, "_blank");
//     }
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Form submitted! You can now download the guide.");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-green-50 to-blue-50 py-28 text-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
//           <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
//             Free WhatsApp Business <span className="text-green-500">Guides</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Download our comprehensive guides to master WhatsApp Business automation, marketing, and customer engagement.
//           </p>
//           <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
//             <div className="flex items-center space-x-2">
//               <Users className="w-5 h-5 text-green-500" /> <span>50,000+ Downloads</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FileText className="w-5 h-5 text-blue-500" /> <span>6 Guides</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Star className="w-5 h-5 text-yellow-500" /> <span>4.8 Avg Rating</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Lead Capture Form */}
//       <section className="py-16 bg-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-green-50 rounded-xl shadow-lg p-8">
//           <h2 className="text-3xl font-bold mb-6 text-center">Get Your Free Guide</h2>
//           <form onSubmit={handleFormSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Business Type"
//               value={formData.business}
//               onChange={(e) => setFormData({ ...formData, business: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input
//               type="tel"
//               placeholder="WhatsApp Number (with country code)"
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2">
//               <Download className="w-5 h-5" /> Submit & Download
//             </Button>
//           </form>
//         </div>
//       </section>

//       {/* Guides Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredGuides.map((guide) => (
//             <Card key={guide.id} className="hover:shadow-xl transition-shadow duration-300">
//               <div className="relative">
//                 <img src={guide.thumbnail} alt={guide.title} className="w-full h-48 object-cover rounded-t-lg" />
//                 <div className="absolute top-4 left-4">
//                   <Badge className="bg-white text-gray-900">{guide.category}</Badge>
//                 </div>
//               </div>
//               <CardHeader>
//                 <CardTitle className="text-xl">{guide.title}</CardTitle>
//                 <CardDescription className="text-gray-600">{guide.description}</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>{guide.pages} pages</span>
//                   <div className="flex items-center space-x-1">
//                     <Star className="w-4 h-4 text-yellow-500 fill-current" /> <span>{guide.rating}</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-gray-600">
//                   <Download className="w-4 h-4" /> <span>{guide.downloadCount.toLocaleString()} downloads</span>
//                 </div>
//                 <div className="space-y-2">
//                   <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
//                     <BookOpen className="w-4 h-4" /> What you'll learn:
//                   </h4>
//                   <div className="flex flex-wrap gap-1">
//                     {guide.topics.map((topic, idx) => (
//                       <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
//                     ))}
//                   </div>
//                 </div>
//                 <Button
//                   className="w-full bg-green-500 hover:bg-green-600 text-white"
//                   onClick={() => handleDownload(guide)}
//                 >
//                   <Download className="w-4 h-4 mr-2" /> Download Free Guide
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Download Modal */}
//       {showDownloadModal && selectedGuide && (
//         <DownloadModal
//           guide={selectedGuide}
//           isOpen={showDownloadModal}
//           onClose={() => {
//             setShowDownloadModal(false);
//             setSelectedGuide(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Users, Star, BookOpen } from "lucide-react";
import { DownloadModal } from "@/components/download-modal";

interface Guide {
  id: number;
  title: string;
  description: string;
  pages: number;
  category: string;
  downloadCount: number;
  rating: number;
  thumbnail: string;
  pdfUrl: string;
  topics: string[];
}

const guides: Guide[] = [
  {
    id: 1,
    title: "Custom WhatsApp Automation Guide Vasify",
    description: "A comprehensive guide to setting up and automating WhatsApp Business for your business needs.",
    pages: 3,
    category: "Chatbots",
    downloadCount: 12500,
    rating: 4.9,
    thumbnail: "/MyOperator-chatbot-platform.png",
    pdfUrl: "https://vasifytech.com/Custom_WhatsApp_Automation_Guide_Vasify.pdf",
    topics: ["Getting Started", "API Integration", "Automation Flows", "Best Practices"],
  },
  {
    id: 2,
    title: "WhatsApp Ecommerce Eguide Vasify",
    description:
      "Master WhatsApp Business for e-commerce with our guide on automation, marketing, and customer engagement.",
    pages: 3,
    category: "E-commerce",
    downloadCount: 8900,
    rating: 4.8,
    thumbnail: "/WhatsApp-Business-account.png",
    pdfUrl: "https://vasifytech.com/WhatsApp_Ecommerce_Eguide_Vasify.pdf",
    topics: ["E-commerce Setup", "Product Catalog", "Order Management", "Customer Engagement"],
  },
];

const categories = ["All", "Chatbots", "E-commerce", "Banking & Fintech", "Healthcare & Clinics", "Education & Coaching Institutes"];

export default function FreeGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", business: "", phone: "" });

  const filteredGuides = guides.filter(
    (guide) => selectedCategory === "All" || guide.category === selectedCategory
  );

  const handleDownload = (guide: Guide) => {
    setSelectedGuide(guide);
    setShowDownloadModal(true);

    // Trigger WhatsApp follow-up
    if (formData.phone.trim() !== "") {
      const message = encodeURIComponent(
        `Hello, my name is ${formData.name} from ${formData.business}. I have downloaded the "${guide.title}" guide. Please assist me with AI setup.`
      );
      // Open WhatsApp in new tab
      window.open(`https://wa.me/${formData.phone}?text=${message}`, "_blank");
    }

    // Automatically trigger PDF download
    const link = document.createElement("a");
    link.href = guide.pdfUrl;
    link.target = "_blank";
    link.download = guide.title + ".pdf";
    link.click();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! You can now download the guide by clicking the Download button.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Free WhatsApp Business <span className="text-green-500">Guides</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive guides to master WhatsApp Business automation, marketing, and customer engagement.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" /> <span>50,000+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-500" /> <span>6 Guides</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" /> <span>4.8 Avg Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-green-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Get Your Free Guide</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Business Type"
              value={formData.business}
              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              placeholder="WhatsApp Number (with country code, e.g., 911234567890)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Submit & Download
            </Button>
          </form>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={guide.thumbnail} alt={guide.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">{guide.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
                <CardDescription className="text-gray-600">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{guide.pages} pages</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" /> <span>{guide.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Download className="w-4 h-4" /> <span>{guide.downloadCount.toLocaleString()} downloads</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> What you'll learn:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {guide.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                  </div>
                </div>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => handleDownload(guide)}
                >
                  <Download className="w-4 h-4 mr-2" /> Download Free Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && selectedGuide && (
        <DownloadModal
          guide={selectedGuide}
          isOpen={showDownloadModal}
          onClose={() => {
            setShowDownloadModal(false);
            setSelectedGuide(null);
          }}
        />
      )}
    </div>
  );
}
