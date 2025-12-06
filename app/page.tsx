"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductShowcase from "@/components/product-showcase"
import ProductCategories from "@/components/product-categories"
import ServicesSection from "@/components/services-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PageLoader from "@/components/page-loader"
import AchievementsSection from "@/components/achievements-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import CertificationsSection from "@/components/certifications-section"
import FeaturesGrid from "@/components/features-grid"
import DeliverySection from "@/components/delivery-section"
import WhyChooseUs from "@/components/why-choose-us"
// import GlobalReachSection from "@/components/global-reach-section"


export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <PageLoader />
      <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Header />
        <Hero />
        <WhoWeAreSection />
        <ProductShowcase />
        <ServicesSection />
        <WhyChooseUs />
        <AchievementsSection />
        <CertificationsSection />
        <FeaturesGrid />
        <DeliverySection />
        <ProductCategories />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
