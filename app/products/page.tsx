"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageLoader from "@/components/page-loader"
import Contact from "@/components/contact"

export default function ProductsOverviewPage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const categories = [
    {
      name: "Oncology",
      slug: "oncology",
      description: "Premium anti-cancer and chemotherapy products",
      icon: "🔬",
      count: 11,
    },
    {
      name: "General Tablets",
      slug: "general-tablets",
      description: "Oral pharmaceutical formulations",
      icon: "💊",
      count: 8,
    },
    {
      name: "General Injectables",
      slug: "general-injectables",
      description: "Injectable pharmaceutical solutions",
      icon: "💉",
      count: 8,
    },
    {
      name: "IV Fluids",
      slug: "iv-fluids",
      description: "Intravenous hydration and therapy solutions",
      icon: "🩸",
      count: 8,
    },
    {
      name: "Lyophilized Injectables",
      slug: "lyophilized",
      description: "Freeze-dried powder for injection",
      icon: "🧪",
      count: 7,
    },
    {
      name: "Cephalosporins",
      slug: "cephalosporins",
      description: "Advanced antibiotic formulations",
      icon: "🛡️",
      count: 6,
    },
    {
      name: "Beta Lactam Injectables",
      slug: "beta-lactam",
      description: "Beta lactam antibiotic injections",
      icon: "⚗️",
      count: 6,
    },
    {
      name: "Cosmetics Range",
      slug: "cosmetics",
      description: "Premium skincare and beauty products",
      icon: "✨",
      count: 13,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <PageLoader />
      <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="h-px w-8 bg-amber-400"></span>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.35em]">
                Our Products
              </span>
              <span className="h-px w-8 bg-amber-400"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Product Categories
              </span>
            </h2>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">
              Discover our comprehensive range of pharmaceutical and healthcare products across multiple therapeutic areas
            </p>
          </motion.div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => {
              // Map category names to their corresponding images
              const categoryImageMap: Record<string, string> = {
                'Oncology': '/oncology-drugs-cancer-treatment.jpg',
                'General Tablets': '/pharmaceutical-tablets-capsules.jpg',
                'IV Fluids': '/intravenous-iv-solutions-drip.jpg',
                'Lyophilized Injectables': '/lyo-med.png',
                'Cephalosporins': '/chemotherapy-injection.png',
                'Beta Lactam Injectables': '/beta.png',
                'Cosmetics Range': '/cosmetics-skincare-beauty-products.jpg',
                'General Injectables': '/medical-injection-vial.jpg'
              };

              return (
                <Link 
                  key={category.slug} 
                  href={`/products/category/${category.slug}`}
                  className="group h-full block"
                >
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Background Image with Gradient Overlay */}
                    <div className="absolute inset-0">
                      <img
                        src={categoryImageMap[category.name] || '/pharmacy-placeholder.jpg'}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-amber-700/30" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      <div className="w-16 h-16 rounded-xl bg-amber-600/90 backdrop-blur-sm flex items-center justify-center mb-6">
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{category.name}</h3>
                        <p className="text-amber-100 text-base md:text-lg mb-4">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
            <Contact />
        <Footer />
      </div>
    </main>
  )
}
