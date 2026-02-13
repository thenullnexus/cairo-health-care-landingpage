"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const services: ServiceItem[] = [
    {
      title: "Named Patient Supply",
      description: "We support patients with rare and life-threatening conditions by providing access to medicines to meet their treatment needs, including those not approved or commercially available in their home countries.",
      image: "/cairo-health-care-landingpage/services/named-patient.png"
    },
    {
      title: "Contract Manufacturing",
      description: "Robust manufacturing capabilities for customized healthcare solutions.",
      image: "/cairo-health-care-landingpage/services/contract-manufacturing.png"
    },
    {
      title: "Wholesaling & Distribution",
      description: "Extensive network for seamless pharmaceutical supply and distribution.",
      image: "/cairo-health-care-landingpage/services/wholesaling.png"
    },
    {
      title: "Stability & Quality Studies",
      description: "Rigorous testing and analysis to ensure product efficacy and safety.",
      image: "/cairo-health-care-landingpage/services/stability-studies.png"
    }
  ];

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.35em]">
              Our Services
            </span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <span className="text-gray-900">Global Pharma</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Services</span>
          </h2>
          <p className={`text-lg text-gray-900 max-w-3xl mx-auto mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            Comprehensive global pharma services covering patient access, manufacturing, distribution, and regulatory support.
          </p>
        </div>

        <div className="flex flex-col md:flex-row h-[800px] md:h-[500px] gap-2 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative h-full transition-all duration-500 ease-out overflow-hidden ${activeIndex === index
                ? 'flex-[3] md:flex-[4]'
                : 'flex-1 hover:flex-[1.5]'
                }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700"
                  style={{
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className={`absolute inset-0 ${activeIndex === index ? 'bg-black/5' : 'bg-black/10'
                  } transition-all duration-500`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                {/* Brand Badge - Only visible in expanded state */}
                <div className={`absolute top-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full shadow-md transition-all duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <span className="bg-gradient-to-r from-[#E0A43D] to-amber-500 bg-clip-text text-transparent">
                    CAIRO HEALTH CARE
                  </span>
                </div>

                {/* Collapsed State */}
                <div className={`flex items-center justify-center h-full transition-all duration-500 ${activeIndex === index ? 'opacity-0 -translate-y-4' : 'opacity-100'
                  }`}>
                  <h3 className="text-xl font-bold text-center text-gray-800 bg-white/90 px-4 py-2 rounded-lg shadow-sm w-4/5">
                    {service.title}
                  </h3>
                </div>

                {/* Expanded State */}
                <div className={`absolute bottom-6 left-0 right-0 px-6 transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}>
                  <div className="bg-white/90 p-6 rounded-lg shadow-lg mx-auto max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 text-center">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#E0A43D] rounded-full mb-4 mx-auto"></div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
