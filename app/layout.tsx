import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import MouseFollower from "@/components/mouse-follower"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thenullnexus.github.io/cairo-health-care-landingpage/'),
  title: "Cairo Healthcare - Premium Pharmaceutical Products",
  description:
    "Leading global exporter of innovative oncology, HIV, and general pharmaceutical products. Trusted by healthcare providers worldwide.",
  icons: {
    icon: [
      {
        url: "/cairo-health-care-landingpage/images/1763704668517.png",
        sizes: "any",
      },
    ],
    apple: "/cairo-health-care-landingpage/images/1763704668517.png",
    shortcut: "/cairo-health-care-landingpage/images/1763704668517.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <MouseFollower />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
