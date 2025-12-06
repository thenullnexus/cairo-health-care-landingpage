import React, { useRef } from 'react';
import { BadgeDollarSign, Pill, Package, Award, ScrollText, CircleCheck } from 'lucide-react';
import { motion } from 'framer-motion';

type FeatureItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
};

const features: FeatureItem[] = [
  {
    title: "Best Rates",
    icon: BadgeDollarSign,
  },
  {
    title: "Quality Medicine",
    icon: Pill,
  },
  {
    title: "Standard or Custom Packing",
    icon: Package,
  },
  {
    title: "Government Approvals",
    icon: Award,
  },
  {
    title: "Free-Sale Certificate",
    icon: ScrollText,
  },
  {
    title: "Product Registration",
    icon: CircleCheck,
  }
];

const FeaturesGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="h-px w-8 bg-amGovernment Approved & WHO-GMP Certifiedber-400"></span>
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.35em]">
            Our Services
          </span>
          <span className="h-px w-8 bg-amber-400"></span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Formulation Services That Define{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
  Excellence
</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          We deliver WHO-GMP certified, government-approved formulation services with quality medicines, best rates, and customizable packaging.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-white to-amber-50 p-6 rounded-xl border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon container with animated hover effect */}
              <div className="relative z-10 mb-6 h-20 w-20">
                <div className="impact-pie relative h-full w-full">
                  <div className="impact-pie-inner absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                {/* Soft glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"></div>
              </div>
              
              {/* Content */}
              <h3 className="relative z-10 text-xl font-semibold text-maroon-900 group-hover:text-amber-700 transition-colors duration-300 mb-2">
                {feature.title}
              </h3>
              
              {feature.description && (
                <p className="relative z-10 text-gray-600 mt-2 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
              )}
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-500/20 transition-all duration-500"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesGrid;
