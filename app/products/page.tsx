"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Microscope, FlaskConical } from "lucide-react"

type ProductCategory = "all" | "detection" | "reference" | "coming-soon"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all")

  const products = [
    {
      id: "cd19",
      name: "CD19 Detection Reagent",
      category: "detection",
      description:
        "Highly specific antigen-based detection reagent for CD19-targeting CAR T cells with excellent batch-to-batch reproducibility.",
      tags: ["High consistency", "Standardization-ready", "Flow cytometry"],
      link: "/products/cd19-detection",
      icon: Microscope,
      status: "active",
    },
    {
      id: "bcma",
      name: "BCMA Detection Reagent",
      category: "detection",
      description:
        "Optimized detection reagent for BCMA-targeting CAR T cells, enabling precise monitoring across multiple instrument platforms.",
      tags: ["High consistency", "Standardization-ready", "Flow cytometry"],
      link: "/products/bcma-detection",
      icon: Microscope,
      status: "active",
    },
    {
      id: "reference-cells",
      name: "SCOPE Reference Cells",
      category: "reference",
      description:
        "Standardized control cells designed for instrument validation, staining verification, and inter-laboratory normalization.",
      tags: ["Standardization-ready", "Quality control", "Flow cytometry"],
      link: "/products/reference-cells",
      icon: FlaskConical,
      status: "active",
    },
    {
      id: "cd33",
      name: "CD33 Detection Reagent",
      category: "coming-soon",
      description: "Currently in development. Detection reagent for CD33-targeting CAR T cells.",
      tags: ["Coming Soon"],
      link: "/products/coming-soon",
      icon: Microscope,
      status: "coming-soon",
    },
    {
      id: "cd20",
      name: "CD20 Detection Reagent",
      category: "coming-soon",
      description: "Currently in development. Detection reagent for CD20-targeting CAR T cells.",
      tags: ["Coming Soon"],
      link: "/products/coming-soon",
      icon: Microscope,
      status: "coming-soon",
    },
    {
      id: "gprc5d",
      name: "GPRC5D Detection Reagent",
      category: "coming-soon",
      description: "Currently in development. Detection reagent for GPRC5D-targeting CAR T cells.",
      tags: ["Coming Soon"],
      link: "/products/coming-soon",
      icon: Microscope,
      status: "coming-soon",
    },
  ]

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions for standardized CAR T cell detection and monitoring
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant={activeCategory === "all" ? "default" : "outline"} onClick={() => setActiveCategory("all")}>
              All Products
            </Button>
            <Button
              variant={activeCategory === "detection" ? "default" : "outline"}
              onClick={() => setActiveCategory("detection")}
            >
              Detection Reagents
            </Button>
            <Button
              variant={activeCategory === "reference" ? "default" : "outline"}
              onClick={() => setActiveCategory("reference")}
            >
              Reference Cells
            </Button>
            <Button
              variant={activeCategory === "coming-soon" ? "default" : "outline"}
              onClick={() => setActiveCategory("coming-soon")}
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className={`hover:shadow-lg transition-shadow ${product.status === "coming-soon" ? "opacity-75" : ""}`}
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${product.status === "coming-soon" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"} flex items-center justify-center mb-4`}
                  >
                    <product.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={product.link}>
                    <Button variant={product.status === "coming-soon" ? "outline" : "default"} className="w-full">
                      {product.status === "coming-soon" ? "Learn More" : "Request Quote"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
