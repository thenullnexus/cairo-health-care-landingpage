"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()
  
  // Determine if we're on a page that has its own contact section
  const hasLocalContact = ['/about', '/products', '/products/category/'].some(route => 
    pathname === route || pathname.startsWith(route + '/') || pathname.startsWith(route + '?') || pathname === route.slice(0, -1)
  )
  
  const contactHref = hasLocalContact ? '#contact' : '/#contact'

  const productCategories = [
    { name: "Oncology", slug: "oncology" },
    { name: "General Tablets", slug: "general-tablets" },
    { name: "General Injectables", slug: "general-injectables" },
    { name: "IV Fluids", slug: "iv-fluids" },
    { name: "Lyophilized", slug: "lyophilized" },
    { name: "Cephalosporins", slug: "cephalosporins" },
    { name: "Beta Lactam", slug: "beta-lactam" },
    { name: "Cosmetics", slug: "cosmetics" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
            <img src="/images/1763704668517.png" alt="Cairo Healthcare Logo" className="w-16 h-16 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-amber-900 tracking-tight group-hover:text-amber-700 transition-colors">Cairo</span>
            <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">Healthcare</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-all duration-300">
            About Us
          </Link>
          <div className="relative group px-2">
            <Link
              href="/products"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-all duration-300 flex items-center gap-1 group-hover:bg-amber-50 group-hover:text-amber-700"
            >
              Products
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl border border-amber-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 overflow-hidden">
              <div className="p-2">
                {productCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/products/category/${category.slug}`}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-700 rounded-xl transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href={contactHref}
            className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 hover:bg-amber-50 rounded-full transition-colors active:scale-95"
        >
          {isOpen ? <X className="w-6 h-6 text-amber-700" /> : <Menu className="w-6 h-6 text-amber-700" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-amber-100 rounded-3xl shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
            <div className="flex flex-col p-4 space-y-2">
              <Link href="/" className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-xl transition-colors">
                Home
              </Link>
              <Link href="/about" className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-xl transition-colors">
                About Us
              </Link>
              <div className="space-y-2">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-xl transition-colors"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 pr-2 space-y-1 bg-amber-50/50 rounded-xl py-2 mx-2">
                    {productCategories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/products/category/${category.slug}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href={contactHref}
                className="mt-2 px-4 py-3 text-base font-semibold text-center text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
