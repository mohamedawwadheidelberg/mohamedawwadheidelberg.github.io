import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Shield, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BlueRay Precision</h1>
          <p className="text-xl text-muted-foreground">
            Advancing standardization in cell therapy diagnostics through innovative flow cytometry solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              BlueRay Precision GmbH is dedicated to making global standardization in cell therapy diagnostics both
              accessible and affordable. We develop high-quality flow cytometry reagents and reference materials that
              enable consistent, reproducible CAR T cell detection across laboratories and instrument platforms.
            </p>
            <p className="mb-4">
              By focusing on batch-to-batch consistency, universal workflow compatibility, and validated performance, we
              help laboratories generate comparable data that supports meaningful scientific and clinical insights. Our
              commitment extends beyond providing reagents — we aim to foster a community of practice around
              standardized cell therapy monitoring.
            </p>
            <p>
              Operating from Heidelberg, Germany, we combine scientific rigor with practical understanding of laboratory
              workflows to deliver solutions that address real-world challenges in CAR T cell detection.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Accuracy</h3>
                <p className="text-sm text-muted-foreground">
                  Precision in design, manufacturing, and performance validation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Clear documentation and open communication with customers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Reproducibility</h3>
                <p className="text-sm text-muted-foreground">
                  Consistent performance you can rely on across batches and time
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cost-Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Making standardization accessible through optimized production
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p>
              BlueRay Precision was founded by an interdisciplinary team of scientists and engineers with deep expertise
              in immunology, flow cytometry, analytical chemistry, and bioprocess development. Our team brings together
              decades of combined experience in cell therapy research, diagnostic development, and quality control
              systems.
            </p>
            <p className="mt-4">
              This diverse background enables us to understand both the scientific fundamentals and the practical
              realities of laboratory workflows, resulting in products that are not only technically sophisticated but
              also straightforward to implement.
            </p>
          </div>

          {/* Team Photo Placeholder */}
          <Card className="bg-muted">
            <CardContent className="pt-6">
              <div className="h-80 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">Team Photo</p>
                  <p className="text-sm">Professional team or laboratory image placeholder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Location</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Heidelberg, Germany</h3>
                  <p className="text-muted-foreground mb-4">
                    We are based in Heidelberg, one of Europe's leading life science hubs. This location provides access
                    to world-class research institutions, clinical centers, and biotechnology expertise.
                  </p>
                  <p className="text-muted-foreground">
                    The region's concentration of cell therapy research and development activities makes it an ideal
                    environment for developing and validating our standardization solutions.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Company:</strong> BlueRay Precision GmbH
                    </p>
                    <p>
                      <strong className="text-foreground">Location:</strong> Heidelberg, Germany
                    </p>
                    <p>
                      <strong className="text-foreground">Email:</strong>{" "}
                      <a href="mailto:info@blueray-precision.com" className="text-primary hover:underline">
                        info@blueray-precision.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* IP Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Intellectual Property</h2>
          <Card className="border-2 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    The SCOPE platform is built on a foundation of protected intellectual property and proprietary
                    production know-how. Our IP portfolio safeguards the innovative approaches that enable the unique
                    performance characteristics of our products.
                  </p>
                  <p className="text-muted-foreground">
                    This intellectual property protection ensures long-term product availability and continued
                    development of the SCOPE ecosystem. We are committed to maintaining our IP rights while making our
                    standardization solutions accessible to the cell therapy community.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
