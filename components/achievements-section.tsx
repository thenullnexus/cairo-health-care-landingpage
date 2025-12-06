"use client"

import { useRef } from "react"
import CountUp from 'react-countup'
import { Globe, Award, Package, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"

const milestones = [
  {
    id: 1,
    end: 120,
    suffix: '+',
    label: 'Countries Served Worldwide',
    icon: Globe,
    // Brand gold gradient
    color: "from-amber-400 to-amber-600"
  },
  {
    id: 2,
    end: 235385,
    suffix: '+',
    label: 'Product Lines Supplied',
    icon: Package,
    // Brand gold gradient
    color: "from-amber-400 to-amber-600"
  },
  {
    id: 3,
    end: 100,
    suffix: '+',
    label: 'Tons Of Medicines Shipped',
    icon: Users, // Using Users as a placeholder, maybe Truck would be better if available, but keeping it simple
    // Deeper brand tone for contrast
    color: "from-amber-500 to-orange-700"
  },
  {
    id: 4,
    end: 12,
    suffix: 'M+',
    label: 'Dose Cycles Catered',
    icon: Award,
    // Highlighted brand gold
    color: "from-amber-300 to-amber-600"
  },
]

const milestoneAccentColors: Record<number, string> = {
  // Brand primary (golden yellow) and secondary (reddish-brown)
  1: "#E0A43D",
  2: "#E0A43D",
  3: "#8B4613",
  4: "#E0A43D",
}

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.35em]">
              Our Impact
            </span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Milestones That Define{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
  Excellence
</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Recognized globally for our commitment to healthcare, these numbers represent the lives we've touched and the trust we've built.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14"
        >
          {milestones.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              className="relative group flex items-center justify-center"
              style={
                {
                  ["--impact-color" as string]: milestoneAccentColors[item.id],
                } as React.CSSProperties
              }
            >
              <div className="impact-card w-full max-w-[230px] aspect-square">
                <div className="impact-card-inner relative z-10 flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-amber-50/90 via-white to-amber-50/80 backdrop-blur-xl shadow-sm border border-amber-100 px-6 text-center">
                  {/* Soft inner glow */}
                  <div
                    className={`pointer-events-none absolute inset-10 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-500`}
                  ></div>

                  {/* Central base with sliding orange slice hover effect */}
                  <div className="relative mb-6 h-16 w-16">
                    <div className="impact-pie">
                      <div className="impact-pie-inner">
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="relative text-4xl md:text-5xl font-extrabold text-slate-900 mb-1 tracking-tight">
                    {isInView && (
                      <CountUp
                        start={0}
                        end={item.end}
                        duration={2.5}
                        separator=","
                        enableScrollSpy={false}
                        scrollSpyOnce={true}
                      />
                    )}
                    <span className="ml-1 text-amber-500">{item.suffix}</span>
                  </h3>

                  <p className="relative mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500 max-w-[11rem]">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
