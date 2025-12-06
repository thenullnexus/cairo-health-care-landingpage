"use client"

import { useEffect, useState } from "react"

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [followerPosition, setFollowerPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Hide cursor on touch interaction and scroll
    const handleHideCursor = () => setIsVisible(false)
    window.addEventListener("touchstart", handleHideCursor)
    window.addEventListener("scroll", handleHideCursor)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchstart", handleHideCursor)
      window.removeEventListener("scroll", handleHideCursor)
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.2,
        y: prev.y + (mousePosition.y - prev.y) * 0.2,
      }))
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [mousePosition])

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? "opacity-60" : "opacity-0"
          }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-6 h-6 border-2 border-amber-400 rounded-full" />
      </div>

      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-400/50" />
      </div>
    </>
  )
}
