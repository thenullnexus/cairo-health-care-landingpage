"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-amber-100 to-white z-50">
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-5px); }
        }
        
        .spinner {
          animation: spin 3s linear infinite;
        }
        
        .pulse-ring {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .bounce-logo {
          animation: bounce 1s ease-in-out infinite;
        }
        
        .dot {
          animation: dotPulse 1.4s ease-in-out infinite;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>

      <div className="flex flex-col items-center gap-8">
        {/* Rotating border */}
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-400 border-r-amber-300 spinner"></div>

          {/* Pulsing inner circle */}
          <div className="absolute inset-4 rounded-full border-2 border-amber-200 pulse-ring"></div>

          {/* Logo container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bounce-logo">
              <Image src="/images/1763704668517.png" alt="Cairo Healthcare" width={80} height={80} priority />
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 items-end h-6">
          <span className="w-2 h-2 bg-amber-500 rounded-full dot"></span>
          <span className="w-2 h-2 bg-amber-500 rounded-full dot"></span>
          <span className="w-2 h-2 bg-amber-500 rounded-full dot"></span>
        </div>
      </div>
    </div>
  )
}
