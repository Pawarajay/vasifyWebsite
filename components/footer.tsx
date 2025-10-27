// "use client"
// import {
//     MessageCircle,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-white py-12 px-6"> 
//             <div className="container mx-auto">
//                 <div className="grid md:grid-cols-4 gap-8">
//                     <div>
//                 <Link href="/" className="flex items-center space-x-3">
//                     <Image
//                         src="/logo.jpg"
//                         alt="VasifyTech Logo"
//                         width={200}
//                         height={150}
//                         className="rounded-full"
//                     />
//                 </Link>
//                         <p className="text-gray-400 mb-4">The ultimate WhatsApp Business Platform for modern businesses.</p>
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4">Product</h4>
//                         <ul className="space-y-2 text-gray-400">
//                             <li>
//                                 <Link href="/features" className="hover:text-white transition-colors">
//                                     Features
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/services" className="hover:text-white transition-colors">
//                                     Services
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/pricing" className="hover:text-white transition-colors">
//                                     Pricing
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-white transition-colors">
//                                     API
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4">Company</h4>
//                         <ul className="space-y-2 text-gray-400">
//                             <li>
//                                 <Link href="/contact" className="hover:text-white transition-colors">
//                                     About
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/blogs" className="hover:text-white transition-colors">
//                                     Blog
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-white transition-colors">
//                                     Careers
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-white transition-colors">
//                                     Contact
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
//                                     Testimonials
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4">Support</h4>
//                         <ul className="space-y-2 text-gray-400">
//                             <li>
//                                 <Link href="/faq" className="hover:text-white transition-colors">
//                                     FAQ
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-white transition-colors">
//                                     Help Center
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-white transition-colors">
//                                     Documentation
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-white transition-colors">
//                                     Community
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//                     <p>&copy; 2025 VasifyTech. All rights reserved.</p>
//                 </div>
//                 <Link href="/privacy-policy" className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//                     <p>Privacy policy</p>
//                 </Link>

//             </div>
//         </footer>

//     )
// }

// export default Footer



"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        {/* Top Grid Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo + Intro */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="VasifyTech Logo"
                width={160}
                height={160}
                className="rounded-full"
              />
            </Link>
            <p className="text-gray-400">
              The ultimate WhatsApp Business Platform for modern businesses —
              empowering automation, engagement, and growth.
            </p>
          </div>

          {/* Product Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2025 VasifyTech. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
