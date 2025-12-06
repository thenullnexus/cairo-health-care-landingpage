"use client"

import React, { useEffect, useRef, useState } from "react"
import { useParallax } from "@/hooks/use-parallax"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const parallaxOffset = useParallax(ref as React.RefObject<HTMLElement>, 0.3)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const products = [
    {
      name: "Carfilzomib (CAIROMIB)",
      image: "/products/cairomib.jpg",
      dosage: "60mg Injection",
      indication: "Multiple myeloma",
      color: "from-amber-100 to-amber-200",
    },
    {
      name: "Cladribine (CAIROBINE)",
      image: "/products/cairobine.jpg",
      dosage: "10mg/10ml Injection",
      indication: "Hairy cell leukemia",
      color: "from-amber-200 to-orange-200",
    },
    {
      name: "Dacarbazine (CAIREX)",
      image: "/products/cairex.jpg",
      dosage: "500mg Lyophilized Injection",
      indication: "Melanoma, Hodgkin's lymphoma, soft tissue sarcomas",
      color: "from-orange-100 to-orange-200",
    },
    {
      name: "Dactinomycin (DACIRO)",
      image: "/products/daciro.jpg",
      dosage: "0.5mg Lyophilized Injection",
      indication: "Wilms' tumor, Ewing's sarcoma, melanoma, testicular cancer",
      color: "from-amber-100 to-amber-200",
    },
    {
      name: "Docetaxel (CAIROXEL)",
      image: "/products/cairoxel.jpg",
      dosage: "80mg Liquid Injection",
      indication: "Breast, lung, prostate, head and neck cancer",
      color: "from-orange-100 to-orange-200",
    },
    {
      name: "Fludarabine (FLUAIRO)",
      image: "/products/fluiro.jpg",
      dosage: "10mg, 50mg Lyophilized Injection",
      indication: "Chronic lymphocytic leukemia (CLL)",
      color: "from-amber-200 to-orange-200",
    },
    {
      name: "Hydroxyurea (CAROERA)",
      image: "/products/caroera.jpg",
      dosage: "500mg Capsules",
      indication: "Sickle cell anemia, cancer",
      color: "from-orange-100 to-orange-200",
    },
    {
      name: "Nilotinib (NILORIB)",
      image: "/products/nilorib.jpg",
      dosage: "150mg, 200mg Capsules",
      indication: "Chronic myeloid leukemia (CML)",
      color: "from-amber-100 to-amber-200",
    },
    {
      name: "Paclitaxel (PACRO)",
      image: "/products/pacro.jpg",
      dosage: "30mg/5ml, 100mg/16.7ml, 300mg/50ml Injection",
      indication: "Breast cancer, ovarian cancer, lung cancer",
      color: "from-amber-200 to-orange-200",
    },
    {
      name: "Topotecan (CAIROTECAN)",
      image: "/products/cairotecan.jpg",
      dosage: "1mg, 2.5mg, 4mg Lyophilized Injection",
      indication: "Ovarian cancer, small cell lung cancer",
      color: "from-amber-100 to-amber-200",
    },
    {
      name: "Vinblastine (VINCABLAS)",
      image: "/products/vincablas.jpg",
      dosage: "10mg/10ml Liquid Injection",
      indication: "Hodgkin's lymphoma, testicular cancer",
      color: "from-orange-100 to-orange-200",
    },
  ]

  return (
    <section id="products" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.35em]">
              Our Products
            </span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Oncology & Pharma</span>
          </h2>
          <p className={`text-lg text-gray-900 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Leading oncology and pharmaceutical solutions trusted by healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group modern-product-card product-shimmer relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } hover:-translate-y-1 hover:scale-[1.02]`}
              style={{
                transitionDelay: isVisible ? `${300 + index * 50}ms` : "0ms",
                transform: `translateY(${parallaxOffset * (0.1 + index * 0.02)}px)`,
              }}
            >
              {/* Card border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-300/50 transition-colors duration-500 pointer-events-none" />

              {/* Image section */}
              <div className="relative h-64 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    style={{ maxWidth: '95%', maxHeight: '95%' }}
                    onError={(e) => {
                      e.currentTarget.src = '';
                      e.currentTarget.className = `max-w-full max-h-full bg-gradient-to-r ${product.color} flex items-center justify-center rounded-lg`;
                      const fallbackText = document.createElement('div');
                      fallbackText.className = 'text-4xl font-bold text-white';
                      fallbackText.textContent = product.name.charAt(0);
                      e.currentTarget.replaceWith(fallbackText);
                    }}
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/0 via-transparent to-transparent group-hover:from-amber-500/5 transition-all duration-500" />
              </div>

              {/* Content section */}
              <div className="p-6 space-y-3">
                {/* Product name */}
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-amber-900 transition-colors leading-tight">
                  {product.name}
                </h3>

                {/* Dosage badge */}
                <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full">
                  <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                    {product.dosage}
                  </span>
                </div>

                {/* Indication */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {product.indication}
                </p>

              </div>
            </div>
          ))}

          {/* 12th Card - View All Products */}
          <Link href="/products" className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
            {/* Animated Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 transition-transform duration-700 group-hover:scale-110" />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-0" />

            {/* Decorative Circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/30 rounded-full blur-3xl transition-transform duration-700 group-hover:translate-y-10 group-hover:-translate-x-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-800/40 rounded-full blur-3xl transition-transform duration-700 group-hover:-translate-y-10 group-hover:translate-x-10" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
              {/* Icon Container with Pulse and Morph */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                  <ArrowRight className="w-8 h-8 text-white transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Text Content with Slide Up */}
              <div className="space-y-3 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-white tracking-tight">View All Products</h3>
                <p className="text-amber-100/80 font-medium max-w-[200px] mx-auto">
                  Explore our complete range of pharmaceutical solutions
                </p>
              </div>

              {/* Button that appears/activates on hover */}
              <div className="mt-8 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 font-bold rounded-full shadow-lg shadow-black/20 hover:bg-amber-50 transition-colors">
                  Browse Catalog
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
