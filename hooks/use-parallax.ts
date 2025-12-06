"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function useParallax(ref: React.RefObject<HTMLElement>, speed = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementTop = rect.top
        const windowHeight = window.innerHeight

        // Only calculate parallax when element is in view
        if (elementTop < windowHeight) {
          const scrollProgress = 1 - elementTop / windowHeight
          setOffset(scrollProgress * speed * 100)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ref, speed])

  return offset
}
