"use client";
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname() || '';

  // Determine if we're on a page that has its own contact section
  const hasLocalContact = ['/about', '/products', '/products/category/'].some(route =>
    pathname === route || pathname.startsWith(route + '/') || pathname.startsWith(route + '?') || pathname === route.slice(0, -1)
  );

  const contactHref = hasLocalContact ? '#contact' : '/#contact';
  return (
    <footer id="contact-section" className="bg-amber-900 border-t border-amber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">Cairo Healthcare</h3>
            <p className="text-amber-100 text-sm">Premium pharmaceutical products for global healthcare excellence.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product Lines</h4>
            <ul className="space-y-2 text-sm text-amber-100">
              <li>
                <Link href="/products/category/oncology" className="hover:text-amber-300 transition-colors block">
                  Oncology
                </Link>
              </li>
              <li>
                <Link href="/products/category/general-tablets" className="hover:text-amber-300 transition-colors block">
                  General Tablets
                </Link>
              </li>
              <li>
                <Link href="/products/category/iv-fluids" className="hover:text-amber-300 transition-colors block">
                  IV Fluids
                </Link>
              </li>
              <li>
                <Link href="/products/category/cosmetics" className="hover:text-amber-300 transition-colors block">
                  Cosmetics Range
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-amber-100">
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#founder" className="hover:text-amber-300 transition-colors block">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href={contactHref} className="hover:text-amber-300 transition-colors block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-amber-100">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918778279149" className="hover:text-amber-300 transition-colors">+91 87782 79149</a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:cairohealthcare92@gmail.com" className="hover:text-amber-300 transition-colors">cairohealthcare92@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-amber-100 text-sm">© {new Date().getFullYear()} Cairo Healthcare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
