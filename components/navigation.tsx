"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="BlueRay Precision" width={240} height={60} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/technology"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Technology
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>

              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2"
                >
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    All Products
                  </Link>
                  <div className="border-t border-border my-2"></div>
                  <Link
                    href="/products/cd19-detection"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    CD19 Detection Reagent
                  </Link>
                  <Link
                    href="/products/bcma-detection"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    BCMA Detection Reagent
                  </Link>
                  <Link
                    href="/products/reference-cells"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    SCOPE Reference Cells
                  </Link>
                  <Link
                    href="/products/coming-soon"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
                  >
                    Coming Soon
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/applications"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Applications
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact">
              <Button size="sm">Request a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/technology" className="block text-sm font-medium text-foreground hover:text-primary">
              Technology
            </Link>
            <Link href="/products" className="block text-sm font-medium text-foreground hover:text-primary">
              Products
            </Link>
            <Link href="/applications" className="block text-sm font-medium text-foreground hover:text-primary">
              Applications
            </Link>
            <Link href="/about" className="block text-sm font-medium text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/contact">
              <Button size="sm" className="w-full">
                Request a Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
