"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      title: "EU-GMP Certification",
      description: "EU-GMP Certified Facilities",
      icon: "/certifications/eu-gmp.jpg"
    },
    {
      id: 2,
      title: "WHO GMP Approval",
      description: "WHO GMP Approved Facilities",
      icon: "/certifications/who-gmp.jpeg"
    },
    {
      id: 3,
      title: "WHO Prequalification",
      description: "WHO PRE Approved Facilities",
      icon: "/certifications/pre-approved.jpeg"
    },
    {
      id: 4,
      title: "Private Labeling",
      description: "Personal Branding or Private Labeling",
      icon: "/certifications/private-label.jpeg"
    }
  ]

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
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
              Quality You Can Trust
            </span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Certifications
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Committed to the highest standards of quality and compliance in pharmaceutical manufacturing and distribution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-6 -mx-2 -mt-2">
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src={cert.icon}
                    alt={cert.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-center">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
