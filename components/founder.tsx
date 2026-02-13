"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Founder() {
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

  return (
    <section id="founder" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Leadership</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
              Syed Abu Tahir
              <span className="block text-2xl text-amber-600 font-normal mt-2">Founder & CEO</span>
            </h2>
            <p className="text-lg text-amber-800 mb-6 leading-relaxed">
              Syed Abu Tahir's journey from a humble retailer to a visionary leader in global pharmaceuticals is nothing
              short of inspiring. With an innate entrepreneurial spirit and deep commitment to healthcare excellence, he
              has transformed Cairo Healthcare into a trusted exporter serving millions worldwide.
            </p>
            <p className="text-lg text-amber-800 mb-6 leading-relaxed">
              His leadership is characterized by strategic thinking, empathy, and a profound understanding of the
              healthcare industry. Beyond business success, Syed Abu actively supports initiatives to improve healthcare
              infrastructure in underserved regions.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold">
                  20+
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Years</p>
                  <p className="text-sm text-amber-700">Industry Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold">
                  100+
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Countries</p>
                  <p className="text-sm text-amber-700">Global Reach</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl transform -rotate-3 opacity-30" />
              <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/cairo-health-care-landingpage/CEO.png"
                  alt="Syed Abu Tahir, Founder & CEO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
