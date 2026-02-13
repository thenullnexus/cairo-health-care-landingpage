import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Pill, Truck, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  content: string;
  isActive: boolean;
  onClick: (id: number) => void;
  onClose: () => void;
  isMobile: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  icon: Icon,
  image,
  content,
  isActive,
  onClick,
  onClose,
  isMobile,
}) => {
  const desktopVariants = {
    active: {
      width: '66.666%',
      height: '100%',
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
    },
    inactiveLeft: {
      width: '16.666%',
      height: '100%',
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
    },
    inactiveRight: {
      width: '16.666%',
      height: '100%',
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
    },
    initial: {
      width: '33.333%',
      height: '100%',
      x: 0,
      opacity: 1,
    },
  };

  const mobileVariants = {
    active: {
      width: '100%',
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
    },
    inactive: {
      width: '100%',
      height: '160px',
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
    },
    initial: {
      width: '100%',
      height: '160px',
      opacity: 1,
    },
  };

  const getVariant = () => {
    if (isMobile) {
      return isActive ? 'active' : 'inactive';
    }

    if (isActive) return 'active';
    if (id === 1) return 'inactiveLeft';
    if (id === 3) return 'inactiveRight';
    return 'initial';
  };

  return (
    <motion.div
      layout
      variants={isMobile ? mobileVariants : desktopVariants}
      initial="initial"
      animate={getVariant()}
      className={`relative bg-white rounded-2xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col md:flex-row ${isMobile ? 'w-full' : 'md:h-[600px]'
        } ${isActive ? 'z-10' : 'z-0 cursor-pointer hover:shadow-xl transition-shadow'
        }`}
      onClick={(e) => {
        if (!(e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement)) {
          !isActive && onClick(id);
        }
      }}
    >
      {/* Image Section */}
      <div className={`relative transition-all duration-500 ${isActive
        ? (isMobile ? 'h-48 w-full' : 'w-1/2 h-full')
        : 'w-full h-full'
        }`}>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover mix-blend-multiply"
        />
        {isActive && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all z-20 hover:scale-110 hover:shadow-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* Content Section */}
      <div
        className={`bg-white transition-all duration-500 ${isActive
          ? (isMobile ? 'h-auto w-full p-6' : 'w-1/2 h-full p-8 overflow-y-auto')
          : 'hidden'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-6 pt-2">
          <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
            <Icon className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="prose max-w-none text-gray-600">
          {content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-4 text-sm md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Collapsed State Content Overlay */}
      {!isActive && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6 z-20 pointer-events-none">
          <div className="text-white w-full pointer-events-auto">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            {!isMobile && (
              <p className="text-sm text-white/90 line-clamp-2">
                {content.split('. ').slice(0, 2).join('. ') + '.'}
              </p>
            )}
            <button
              className="group mt-3 text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 hover:from-amber-600 hover:to-amber-700"
              onClick={(e) => {
                e.stopPropagation();
                onClick(id);
              }}
            >
              <span className="flex items-center gap-1">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      id: 1,
      title: "Wide Network",
      icon: Link,
      image: "/cairo-health-care-landingpage/images/globe-network.png",
      content: `At Cairo Health Care, we have established an expansive and robust network that extends across the globe. Our wide network of trusted partners and suppliers enables us to ensure a reliable supply chain for pharmaceutical products. With our global reach, we are able to source high-quality medicines and healthcare products from various regions, catering to the diverse needs of our customers.

Through strategic collaborations and strong relationships with reputable pharmaceutical companies, we offer an extensive range of products to healthcare providers, pharmacies, and distributors worldwide. Our network covers a broad spectrum of therapeutic categories, including both branded and generic medications. This comprehensive range allows us to meet the specific requirements and demands of our clients effectively.`
    },
    {
      id: 2,
      title: "Quality Products",
      icon: Pill,
      image: "/cairo-health-care-landingpage/images/quality-products.png",
      content: `Cairo Health Care places utmost importance on delivering only high-quality pharmaceutical products to our valued customers. We understand that the efficacy and safety of medications directly impact patient outcomes. Therefore, we have established stringent quality control measures throughout our process to ensure the highest standards of quality.

We collaborate with renowned manufacturers who adhere to rigorous quality assurance protocols and comply with international regulatory standards. Every product that enters our network undergoes meticulous quality checks and verification procedures. These measures ensure the authenticity, efficacy, and safety of the medications we deliver.`
    },
    {
      id: 3,
      title: "Express Delivery",
      icon: Truck,
      image: "/cairo-health-care-landingpage/images/express-delivery.png",
      content: `At Cairo Health Care, we recognize the importance of timely solutions for urgent healthcare needs. Our express delivery services are designed to address the time-sensitive requirements of healthcare professionals and patients, ensuring that essential medications and healthcare products reach their destinations promptly.

With a focus on efficiency and reliability, we have established a streamlined logistics system that is dedicated to handling urgent shipments with precision. Our experienced team of professionals works closely with shipping partners and carriers to ensure the swift and secure delivery of critical supplies.`
    }
  ];

  const handleCardClick = (id: number) => {
    setActiveCard(id === activeCard ? null : id);
  };

  const handleClose = () => {
    setActiveCard(null);
  };

  return (
    <section className="pt-16 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.35em]">
              Why Choose Us
            </span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Healthcare Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Discover what sets us apart in the pharmaceutical industry with our exceptional services and commitment to excellence.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full flex gap-4 flex-col h-auto md:flex-row md:h-[600px] md:items-center md:justify-center">
          <AnimatePresence>
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                title={feature.title}
                icon={feature.icon}
                image={feature.image}
                content={feature.content}
                isActive={activeCard === feature.id}
                onClick={handleCardClick}
                onClose={handleClose}
                isMobile={isMobile}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
