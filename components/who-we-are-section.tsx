"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

interface WhoWeAreSectionProps {
  showLearnMore?: boolean
}

export default function WhoWeAreSection({ showLearnMore = true }: WhoWeAreSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with Experience Badge */}
          <div className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/cargo-plane.png"
              alt="Cargo plane at airport"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Experience Badge */}
            <div className="absolute bottom-8 right-8 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-10 rounded-2xl max-w-sm shadow-2xl backdrop-blur-sm border border-amber-500/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">7+ Year Of Working Experience</h3>
              <p className="text-base md:text-lg opacity-90 leading-relaxed">Providing our pharmaceutical services since 2019</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 pl-0 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              Who We Are
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Lives Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Global Healthcare</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p className="leading-relaxed">
                Founded by <span className="font-semibold text-gray-900">Syed Abu Tahir</span>, Cairo Healthcare has evolved from humble retail beginnings into a <span className="font-semibold text-amber-700">global pharmaceutical powerhouse</span>. Under his visionary leadership, we bridge borders to deliver innovative healthcare solutions.
              </p>

              <div className="relative p-8 bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <Quote className="absolute top-4 right-4 w-24 h-24 text-amber-100/50 -z-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-amber-400"></div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Our Mission</span>
                  </div>
                  <p className="text-xl font-medium text-gray-800 italic leading-relaxed">
                    "Our mission is to ensure healthcare accessibility for everyone, leveraging medical advancements to enhance well-being worldwide."
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-base">
                We prioritize <span className="font-medium text-gray-900">innovation, quality, and customer satisfaction</span>, ensuring that essential medicines reach those in need, regardless of geographical constraints.
              </p>
            </div>

            {showLearnMore && (
              <div className="pt-2">
                <Link href="/about">
                  <button className="btn-slide-fill group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300">
                    Discover Our Story
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
