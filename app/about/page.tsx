"use client"

import Header from "@/components/header"
import Mission from "@/components/mission"
import Founder from "@/components/founder"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhoWeAreSection from "@/components/who-we-are-section"

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <Header />
      <div className="pt-20">
        <WhoWeAreSection showLearnMore={false} />
        <Mission />
        <Founder />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
