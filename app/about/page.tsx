"use client"

import { ArrowRight, Users, Briefcase, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

// ============================
// Team Data
// ============================
const teamMembers = [
  { name: "Sushil Kumar", role: "Founder", linkedIn: "https://www.linkedin.com/in/sushilkumar/", image: "/team/sushil.jpg" },
  { name: "Sudhanshu Thombare", role: "Founder", linkedIn: "https://www.linkedin.com/in/sudhanshusharma/", image: "/team/sudhanshu.jpg" },
  { name: "Samay Shadani", role: "Co-Founder & Head of Technology", linkedIn: "https://www.linkedin.com", image: "" },
]

// ============================
// Timeline Data
// ============================
const timeline = [
  { year: 2008, event: "Founded VasifyTech, focused on VAS services" },
  { year: 2012, event: "Expanded into AI & automation solutions" },
  { year: 2015, event: "Served 100+ enterprise clients globally" },
  { year: 2018, event: "Launched WhatsApp automation platform" },
  { year: 2021, event: "Expanded to mobile & web app development" },
  { year: 2024, event: "Trusted by 500+ clients, 15+ years of innovation" },
]

// ============================
// Timeline Item Component
// ============================
function TimelineItem({ year, event, index }: { year: number; event: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 0.6 } })
    }
  }, [isInView, controls])

  const sideClass = index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={controls}
      className={`mb-10 flex flex-col md:flex-row items-center w-full relative ${sideClass}`}
    >
      <div className="md:w-1/2">
        <span className="text-green-500 font-bold text-lg">{year}</span>
        <p className="text-gray-700 mt-2">{event}</p>
      </div>
      <div className="w-8 h-8 bg-green-500 rounded-full z-10 mx-auto my-4 md:my-0"></div>
      <div className="md:w-1/2"></div>
    </motion.div>
  )
}

// ============================
// About Page
// ============================
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Driven by <span className="text-green-500">Innovation</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Building trust and excellence in VAS & AI solutions for over 15 years.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 font-semibold">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/schedule-call">
            <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 font-semibold">
              Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600">15+ years of innovation in VAS & AI solutions.</p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block border-l-2 border-green-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {timeline.map((item, index) => (
            <TimelineItem key={index} year={item.year} event={item.event} index={index} />
          ))}
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <Briefcase className="mx-auto h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p className="text-gray-700">To deliver cutting-edge VAS & AI solutions that empower businesses worldwide.</p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <Flag className="mx-auto h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-gray-700">To be the global leader in AI-driven automation and communication services.</p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <Users className="mx-auto h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Values</h3>
            <p className="text-gray-700">Innovation, Integrity, Customer Success, and Continuous Growth.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">Experts driving our vision forward.</p>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
              className="rounded-lg overflow-hidden cursor-pointer bg-white border border-gray-100"
            >
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-3xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              )}
              <CardContent className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <Link href={member.linkedIn} target="_blank" className="text-green-500 font-semibold hover:underline">
                  LinkedIn
                </Link>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
          <p className="text-gray-600">Trusted by numerous organizations worldwide.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Partner With Us?</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 font-semibold">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/schedule-call">
            <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 font-semibold">
              Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
