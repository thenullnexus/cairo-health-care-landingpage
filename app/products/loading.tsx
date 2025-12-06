"use client"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated background circles */}
        <div className="relative w-40 h-40">
          {/* Outer rotating circle */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#D4AF37] border-r-[#8B4513] animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>

          {/* Middle pulsing circle */}
          <div
            className="absolute inset-4 rounded-full border-2 border-[#D4AF37] opacity-50"
            style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
          ></div>

          {/* Inner circle with logo container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-24 h-24"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ animation: "bounce 2s ease-in-out infinite" }}
            >
              {/* Cairo Healthcare Camel Logo */}
              {/* Gold outer circle */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="#D4AF37" strokeWidth="8" opacity="0.8" />

              {/* Brown camel body */}
              <ellipse cx="100" cy="105" rx="45" ry="50" fill="#8B4513" />

              {/* Camel head */}
              <circle cx="100" cy="65" r="28" fill="#8B4513" />

              {/* Camel ears */}
              <ellipse cx="85" cy="45" rx="8" ry="15" fill="#8B4513" />
              <ellipse cx="115" cy="45" rx="8" ry="15" fill="#8B4513" />

              {/* Camel neck connection */}
              <rect x="95" y="85" width="10" height="20" fill="#8B4513" />
            </svg>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">Cairo Healthcare</h3>
          <div className="flex items-center justify-center gap-1">
            <span className="text-sm text-white/60">Loading Products</span>
            <div className="flex gap-1">
              <span
                className="w-1 h-1 rounded-full bg-[#D4AF37] animate-bounce"
                style={{ animationDelay: "0s" }}
              ></span>
              <span
                className="w-1 h-1 rounded-full bg-[#D4AF37] animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>
              <span
                className="w-1 h-1 rounded-full bg-[#D4AF37] animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CSS animations in style tag */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  )
}
