import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/Header"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-opensans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Interests - Find Your Matches",
  description: "Select your interests to find your perfect matches",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-white min-h-screen font-sans bg-black lg:bg-gradient-to-r lg:from-[#1a1a1a] lg:via-black lg:to-[#1a1a1a]">
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
