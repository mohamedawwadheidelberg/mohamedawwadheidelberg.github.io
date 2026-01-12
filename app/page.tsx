import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Microscope, FlaskConical, Target, TrendingUp, Shield, Globe, CheckCircle2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Video */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-[#0F1E3A]">
        {/* Video Background Placeholder - Replace with actual MP4 */}
        {/* To add your video: replace src="/videos/hero-background.mp4" with your video path */}
        {/* Suggested themes: flow cytometry visuals, clean lab pipetting, scientific cell imagery */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback: solid background will show if video is unavailable */}
        </video>

        {/* Solid navy overlay */}
        <div className="absolute inset-0 bg-[#0F1E3A]/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Next-Generation Standardization for Cell Therapy Flow Cytometry
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4 text-pretty">
            Precision detection reagents and reference materials enabling consistent CAR T monitoring across
            instruments, labs, and protocols.
          </p>
          <p className="text-lg text-slate-300 mb-8">Developed in Heidelberg, Germany</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8">
                Request a Quote
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Solve</h2>
            <p className="text-lg text-muted-foreground">
              Current CAR T cell detection faces critical challenges: proprietary reagents with high costs, inconsistent
              batch-to-batch performance, and limited inter-laboratory comparability — creating significant variability
              in clinical monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Cost Per Test</h3>
                <p className="text-muted-foreground">
                  Expensive proprietary reagents limit accessibility for routine monitoring and research applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Batch Variability</h3>
                <p className="text-muted-foreground">
                  Inconsistent performance between batches and platforms undermines reproducibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Limited Standardization</h3>
                <p className="text-muted-foreground">
                  Lack of global standards prevents meaningful data comparison across laboratories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The SCOPE platform delivers a comprehensive approach to standardized CAR T cell detection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SCOPE Detection Reagents</h3>
                <p className="text-muted-foreground">
                  Antigen-based CAR detection reagents optimized for stable, reproducible staining with low background
                  and robust specificity.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center text-primary font-medium mt-4 hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SCOPE Reference Cells</h3>
                <p className="text-muted-foreground">
                  Standardized cell controls for instrument checks and inter-lab normalization, ensuring consistent
                  calibration.
                </p>
                <Link
                  href="/products/reference-cells"
                  className="inline-flex items-center text-primary font-medium mt-4 hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-dashed">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SCOPE Certification</h3>
                <p className="text-muted-foreground">
                  Coming Soon: Proficiency-style program enabling routine external quality assessment and consistent
                  reporting.
                </p>
                <Link
                  href="/products/coming-soon"
                  className="inline-flex items-center text-secondary font-medium mt-4 hover:underline"
                >
                  Join early access →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why BlueRay Precision Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why BlueRay Precision</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Low Background & High Specificity</h3>
              <p className="text-sm text-muted-foreground">
                Designed for robust performance with minimal non-specific binding
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Manufacturing Reproducibility</h3>
              <p className="text-sm text-muted-foreground">
                Optimized production processes ensure batch-to-batch consistency
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Universal Compatibility</h3>
              <p className="text-sm text-muted-foreground">
                Workflow mindset compatible with standard flow cytometry platforms
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">IP-Protected Platform</h3>
              <p className="text-sm text-muted-foreground">Proprietary know-how and protected intellectual property</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8">
            Products are for research use unless otherwise stated.
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Microscope className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2">CD19 Detection Reagent</h3>
                <p className="text-muted-foreground mb-4">
                  Highly specific antigen-based detection reagent for CD19 CAR T cells with excellent reproducibility.
                </p>
                <Link href="/products/cd19-detection">
                  <Button>View Details</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Microscope className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2">BCMA Detection Reagent</h3>
                <p className="text-muted-foreground mb-4">
                  Optimized detection reagent for BCMA-targeting CAR T cells, enabling precise monitoring workflows.
                </p>
                <Link href="/products/bcma-detection">
                  <Button>View Details</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standardization Workflow Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Standardization Workflow</h2>
            <p className="text-lg text-muted-foreground">Four simple steps to consistent, comparable results</p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8 md:gap-6">
            {/* Connecting line - positioned behind the numbers */}
            <div
              className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border"
              style={{ width: "calc(100% - 8rem)", marginLeft: "4rem" }}
            ></div>

            <div className="relative">
              <div className="text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md">
                  1
                </div>
                <h3 className="font-semibold mb-2">Stain with SCOPE Reagent</h3>
                <p className="text-sm text-muted-foreground">Apply standardized detection reagent to your samples</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md">
                  2
                </div>
                <h3 className="font-semibold mb-2">Verify with Reference Cells</h3>
                <p className="text-sm text-muted-foreground">Run standardized controls alongside samples</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md">
                  3
                </div>
                <h3 className="font-semibold mb-2">Normalize Settings</h3>
                <p className="text-sm text-muted-foreground">Adjust gating and instrument parameters</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md">
                  4
                </div>
                <h3 className="font-semibold mb-2">Report Comparable Results</h3>
                <p className="text-sm text-muted-foreground">Generate data that can be meaningfully compared</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Consistent CAR T Monitoring Across Sites?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact our team to discuss how SCOPE reagents can support your workflow standardization needs.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-white text-base px-8"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
