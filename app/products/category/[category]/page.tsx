"use client"

import { useState, useEffect } from 'react'
import { Suspense } from 'react'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import PageLoader from "@/components/page-loader"

interface Product {
  name: string
  dosage: string
  category: string
  type?: string
  indication?: string
}

import { useParams } from 'next/navigation'

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    }>
      <CategoryContent category={category} />
    </Suspense>
  )
}

// Client Component that handles the actual rendering
function CategoryContent({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/category/${category}`)
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
        setShowContent(true)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  const categoryTitle = category
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <PageLoader />
      <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Categories
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-amber-900 mb-4">{categoryTitle} Products</h1>
            <p className="text-xl text-amber-700">{products.length} products in this category</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100 hover:border-amber-100 overflow-hidden"
              >
                {/* Decorative left border accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col">
                  {/* Product Name with subtle underline */}
                  <div className="relative pb-3 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-16"></div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4 mb-6 flex-grow">
                    {product.dosage && (
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-500">Dosage</p>
                          <p className="text-gray-800">{product.dosage}</p>
                        </div>
                      </div>
                    )}

                    {product.type && (
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-500">Type</p>
                          <p className="text-gray-800">{product.type}</p>
                        </div>
                      </div>
                    )}

                    {product.indication && (
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-500">Indication</p>
                          <p className="text-gray-700">{product.indication}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom section with enhanced type badge */}
                  <div className="mt-auto pt-4">
                    <div className="flex items-center">
                      {product.type && (
                        <div className="w-full">
                          <div className="text-xs font-medium text-gray-500 mb-1">Category</div>
                          <div className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border border-amber-100 shadow-sm">
                            <svg className="w-4 h-4 mr-1.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            {product.type}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-24">
          <Contact />
        </div>

        <Footer />
      </div>
    </main>
  )
}