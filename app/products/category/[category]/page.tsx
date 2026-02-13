import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import CategoryClient from "./category-client"
import { getCategoryProducts } from "./data"

interface Product {
  name: string
  dosage: string
  category: string
  type?: string
  indication?: string
}

export async function generateStaticParams() {
  const { getAllCategorySlugs } = await import("./data")
  return await getAllCategorySlugs()
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const products = await getCategoryProducts(category)
  
  const categoryTitle = category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {categoryTitle} Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality pharmaceutical products in the {categoryTitle} category
            </p>
          </div>

          <CategoryClient initialProducts={products} category={category} />
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  )
}
