"use client"

import { useState } from 'react'
import Image from "next/image"
import { Sparkles } from "lucide-react"

interface Product {
  name: string
  dosage: string
  category: string
  type?: string
  indication?: string
}

interface CategoryClientProps {
  initialProducts: Product[]
  category: string
}

export default function CategoryClient({ initialProducts, category }: CategoryClientProps) {
  const [products] = useState<Product[]>(initialProducts)
  const [showContent] = useState(true)

  const categoryTitle = category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          We don't currently have any products in the {categoryTitle} category. 
          Please check back later or contact us for more information.
        </p>
      </div>
    )
  }

  return (
    <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 hover:border-amber-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-amber-600 font-medium text-sm">
                    {product.dosage}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              
              {product.type && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                    {product.type}
                  </span>
                </div>
              )}
              
              {product.indication && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.indication}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
