import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlueRay Precision | CAR T Cell Detection & Flow Cytometry Standardization",
  description:
    "Precision detection reagents and reference materials for standardized CAR T cell monitoring. Developed in Heidelberg, Germany for diagnostic labs and cell therapy manufacturers.",
  keywords: [
    "CAR T cell detection",
    "flow cytometry",
    "cell therapy diagnostics",
    "CD19 detection",
    "BCMA detection",
    "laboratory standardization",
  ],
  generator: "v0.app",
  openGraph: {
    title: "BlueRay Precision | CAR T Cell Detection Reagents",
    description:
      "Next-generation standardization for cell therapy flow cytometry. Affordable, consistent, globally standardized reagents.",
    type: "website",
    locale: "en_US",
  },
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
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
