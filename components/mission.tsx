"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, Lightbulb } from "lucide-react"

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

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

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To produce Premium Quality, Innovative, Specialized pharmaceutical products with constant refinement at all product development stages to ensure client satisfaction.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become the leading exporter in the global pharmaceutical industry with premium quality products that save lives and improve healthcare outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Therapeutic Focus",
      description:
        "Comprehensive treatment solutions across oncology, HIV, kidney diseases, generic pharmaceuticals, immunoglobulins, antivenins, and critical care products.",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-amber-900 mb-4 transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Purpose & Promise
          </h2>
          <p
            className={`text-lg text-amber-700 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Driven by innovation, quality, and a commitment to improving healthcare globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-amber-50 border-2 border-amber-200 hover:border-amber-500 transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } hover:shadow-lg hover:shadow-amber-500/20`}
                style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{card.title}</h3>
                <p className="text-amber-700 leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
