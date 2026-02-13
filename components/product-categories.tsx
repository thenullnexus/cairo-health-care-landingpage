import React, { useEffect, useState } from 'react';
import { Beaker, Pill, Droplets, Plus } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllCategories } from '@/app/actions/getProductsByCategory';
import { useRouter } from 'next/navigation';

interface CategoryCard {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Oncology': Beaker,
  'General Tablets': Pill,
  'IV Fluids': Droplets,
  'Antibiotics': Beaker,
  'Vitamins': Pill,
  'Injectables': Droplets,
  'Cosmetics': Beaker,
  'Herbal Products': Pill,
};

const categoryImages: Record<string, string> = {
  'Oncology': '/oncology-drugs-cancer-treatment.jpg',
  'General Tablets': '/pharmaceutical-tablets-capsules.jpg',
  'IV Fluids': '/intravenous-iv-solutions-drip.jpg',
  'Antibiotics': '/antibiotics-medication.jpg',
  'Vitamins': '/vitamins-supplements.jpg',
  'Injectables': '/medical-injection-vial.jpg',
  'General Injectables': '/medical-injection-vial.jpg',
  'Cosmetics': '/cosmetics-skincare-beauty-products.jpg',
  'Herbal Products': '/herbal-natural-products.jpg',
};

const categoryDescriptions: Record<string, string> = {
  'Oncology': 'Advanced cancer treatments and therapies',
  'General Tablets': 'Wide range of oral medications',
  'IV Fluids': 'Essential intravenous solutions',
  'Antibiotics': 'Fight bacterial infections effectively',
  'Vitamins': 'Essential nutrients for health',
  'Injectables': 'Sterile medications for injection',
  'Cosmetics': 'Skincare and beauty products',
  'Herbal Products': 'Natural and herbal healthcare solutions',
};

const ProductCategories = () => {
  const [categories, setCategories] = useState<CategoryCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        console.log('Loading categories...');
        const productsByCategory = await getAllCategories();
        console.log('Products by category:', productsByCategory);

        if (!productsByCategory || Object.keys(productsByCategory).length === 0) {
          console.warn('No categories found in Excel file');
          // Fallback to default categories
          const defaultCategories = [
            {
              id: 1,
              title: 'Oncology',
              description: 'Advanced cancer treatments and therapies',
              image: '/oncology-drugs-cancer-treatment.jpg',
              icon: Beaker,
              count: 0
            },
            {
              id: 2,
              title: 'General Tablets',
              description: 'Wide range of oral medications',
              image: '/pharmaceutical-tablets-capsules.jpg',
              icon: Pill,
              count: 0
            },
            {
              id: 3,
              title: 'IV Fluids',
              description: 'Essential intravenous solutions',
              image: '/intravenous-iv-solutions-drip.jpg',
              icon: Droplets,
              count: 0
            }
          ];
          setCategories(defaultCategories);
          return;
        }

        const categoryCards = Object.entries(productsByCategory)
          .map(([category, products], index) => ({
            id: index + 1,
            title: category,
            description: categoryDescriptions[category] || `${category} products`,
            image: categoryImages[category] || '/pharmacy-placeholder.jpg',
            icon: categoryIcons[category] || Pill,
            count: Array.isArray(products) ? products.length : 0
          }));

        console.log('Mapped category cards:', categoryCards);
        setCategories(categoryCards);
      } catch (error) {
        console.error('Error loading categories:', error);
        // Fallback to default categories if Excel loading fails
        setCategories([
          {
            id: 1,
            title: 'Oncology',
            description: 'Advanced cancer treatments and therapies',
            image: '/oncology-drugs-cancer-treatment.jpg',
            icon: Beaker,
            count: 0
          },
          {
            id: 2,
            title: 'General Tablets',
            description: 'Wide range of oral medications',
            image: '/pharmaceutical-tablets-capsules.jpg',
            icon: Pill,
            count: 0
          },
          {
            id: 3,
            title: 'IV Fluids',
            description: 'Essential intravenous solutions',
            image: '/intravenous-iv-solutions-drip.jpg',
            icon: Droplets,
            count: 0
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
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
              Our Products
            </span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Pharmaceutical Range
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Explore our comprehensive range of pharmaceutical solutions and healthcare products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
            ))
          ) : (
            categories.slice(0, 3).map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="group h-full cursor-pointer"
                  onClick={() => {
                    const path = `/products/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`;
                    navigateTo(path);
                  }}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                    {/* Background Image with Gradient Overlay */}
                    <div className="absolute inset-0">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-amber-700/30" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <div className="w-12 h-12 rounded-lg bg-amber-600/90 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                        <p className="text-amber-100 text-sm">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}

          {/* Explore More Card */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="h-full cursor-pointer"
            onClick={() => navigateTo('/products')}
          >
            <div className="h-full rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/50 hover:bg-amber-100/50 transition-colors duration-300 p-6 flex flex-col items-center justify-center text-center group">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <Plus className="w-6 h-6 text-amber-700" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Explore More
              </h3>
              <p className="text-amber-700 text-sm mb-4">
                Discover our complete product range
              </p>
              <span className="inline-flex items-center text-amber-600 font-medium text-sm group-hover:text-amber-700 transition-colors">
                View all categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;