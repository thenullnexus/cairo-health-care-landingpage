import React from 'react';
import { motion } from 'framer-motion';
import { Plane, PlaneTakeoff, Ship } from 'lucide-react';
import Image from 'next/image';

const DeliverySection = () => {
  return (
    <section className="w-full pt-8 pb-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.35em]">
              Air & Sea Freight
            </span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            We Deliver by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Air & Sea Cargo
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            We provide fast, reliable, and cost-effective cargo solutions across air, courier, and sea routes—ensuring secure delivery for everything from express parcels to large-scale shipments.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Air Cargo Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6">
              <div className="flex items-start space-x-4">
                <div className="relative z-10">
                  <div className="relative h-16 w-16">
                    <div className="impact-pie relative h-full w-full">
                      <div className="impact-pie-inner absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600">
                        <Plane className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-1">Air Cargo</h3>
                  <p className="text-white/90 text-sm leading-relaxed">Rapid and Reliable Shipment Solutions</p>
                </div>
              </div>
            </div>
            <div className="p-8 group">
              <ul className="space-y-3 text-[#475569] mb-6 text-left">
                <li className="flex items-start">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Direct Shipment</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Parallel Shipment</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Cold Chain Shipment</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                You can count on us for timely delivery and even expedited shipping options
              </p>
            </div>
          </div>

          {/* Air Courier Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6">
              <div className="flex items-start space-x-4">
                <div className="relative z-10">
                  <div className="relative h-16 w-16">
                    <div className="impact-pie relative h-full w-full">
                      <div className="impact-pie-inner absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600">
                        <PlaneTakeoff className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-1">Air Courier</h3>
                  <p className="text-white/90 text-sm leading-relaxed">Express Courier Services</p>
                </div>
              </div>
            </div>
            <div className="p-8 group">
              <p className="text-[#475569] mb-8 leading-relaxed text-center">
                Fast and reliable air courier services ensuring timely and secure delivery to your doorstep.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['fedex', 'dhl', 'tnt', 'ems'].map((logo) => (
                  <div key={logo} className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300">
                    <Image
                      src={`/images/${logo}.png`}
                      alt={logo.toUpperCase()}
                      width={80}
                      height={80}
                      className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sea Cargo Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6">
              <div className="flex items-start space-x-4">
                <div className="relative z-10">
                  <div className="relative h-16 w-16">
                    <div className="impact-pie relative h-full w-full">
                      <div className="impact-pie-inner absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600">
                        <Ship className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-1">Sea Cargo</h3>
                  <p className="text-white/90 text-sm leading-relaxed">Efficient Large-scale Shipment Handling</p>
                </div>
              </div>
            </div>
            <div className="p-8 group">
              <p className="text-[#475569] mb-6 leading-relaxed">
                Reliable sea cargo mode for shipping large-scale shipments, ensuring efficient and cost-effective transportation via sea routes.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap justify-center gap-3">
                  {['Full Container Load', 'Less than Container', 'Bulk Cargo', 'Project Cargo'].map((service) => (
                    <span key={service} className="px-3 py-1.5 bg-amber-50 text-amber-800 text-xs font-medium rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
