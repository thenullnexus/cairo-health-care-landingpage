"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const parallaxOffset = useParallax(heroRef, 0.5)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-amber-50 via-white to-amber-50"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pharmaceutical-laboratory-healthcare.png"
          alt="Pharmaceutical laboratory"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 via-white/50 to-amber-50/60" />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute top-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center min-h-screen z-10">
        {/* Main Headline with Letter Hover Effect */}
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transform: `translateY(${isVisible ? 0 : 40}px) translateY(${parallaxOffset * 0.2}px)` }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {/* First line: Premium Pharmaceutical */}
            <div className="mb-2 text-amber-900">
              {['Premium', 'Pharmaceutical'].map((word, wordIdx) => (
                <span key={wordIdx} className="hero-word">
                  {word.split('').map((letter, letterIdx) => (
                    <span key={letterIdx} className="hero-letter">
                      {letter}
                    </span>
                  ))}
                  {wordIdx === 0 && <span className="hero-space" />}
                </span>
              ))}
            </div>

            {/* Second line: Excellence Worldwide */}
            <div className="block text-amber-700 pb-2">
              {['Excellence', 'Worldwide'].map((word, wordIdx) => (
                <span key={wordIdx} className="hero-word">
                  {word.split('').map((letter, letterIdx) => (
                    <span key={letterIdx} className="hero-letter">
                      {letter}
                    </span>
                  ))}
                  {wordIdx === 0 && <span className="hero-space" />}
                </span>
              ))}
            </div>
          </h1>
        </div>

        {/* Subheadline */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transform: `translateY(${isVisible ? 0 : 40}px) translateY(${parallaxOffset * 0.15}px)` }}
        >
          <p className="text-lg sm:text-xl text-amber-800 max-w-2xl mb-8">
            Leading global exporter of innovative oncology, HIV, and general medicines trusted by healthcare providers
            worldwide.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transform: `translateY(${isVisible ? 0 : 40}px) translateY(${parallaxOffset * 0.1}px)` }}
        >
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-slide-fill inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 group"
          >
            Explore Products
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-600 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
