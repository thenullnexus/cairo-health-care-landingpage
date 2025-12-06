"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  
  // Refs for animation and form
  const sectionRef = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS Configuration
    const SERVICE_ID = 'service_p0ny5md'; 
    const TEMPLATE_ID = 'template_l6qls8l';
    const PUBLIC_KEY = '2hxxGl45gxJjSO6_S';

    if (!formRef.current) {
      console.error('Form reference is not available');
      setStatus('error');
      return;
    }

    try {
      // Get form data for debugging
      const formData = new FormData(formRef.current);
      const formProps = Object.fromEntries(formData);
      console.log('Form Data:', formProps);

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('EmailJS Success:', result);
      setStatus('success');
      formRef.current.reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error Details:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        publicKey: PUBLIC_KEY ? 'Key exists' : 'Missing key'
      });
      
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-900 to-amber-800 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 z-0">
        <Image src="/office-building-contact-us-professional.png" alt="Background" fill className="object-cover" priority={false} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-lg text-amber-100 mb-8">
              Have questions about our products or services? Our team is ready to help.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-amber-100 text-sm">
                    New No:54, Old No:86, Ground Floor, Moore st, Mannady, Chennai-600 001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <div className="text-amber-100 text-sm">
                    <p>+91 87782 79149</p>
                    <p>+91 91505 12241</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-amber-100 text-sm">cairohealthcare92@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <form 
              ref={formRef} 
              onSubmit={sendEmail} 
              className="bg-amber-800/50 backdrop-blur border border-amber-700 rounded-2xl p-8"
            >
              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded text-green-200 text-sm">
                  Message sent successfully! We will contact you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-200 text-sm">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  name="user_name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-amber-700/50 border border-amber-600 text-white placeholder-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  name="user_email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-amber-700/50 border border-amber-600 text-white placeholder-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  name="message" 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-amber-700/50 border border-amber-600 text-white placeholder-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="btn-slide-fill w-full py-3 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-amber-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
