import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Microscope, TrendingUp, FlaskConical } from "lucide-react"

export default function CD19DetectionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Detection Reagent</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CD19 Detection Reagent</h1>
          <p className="text-xl text-muted-foreground">
            Antigen-based detection reagent specifically designed for monitoring CD19-targeting CAR T cells with robust
            specificity and reproducible performance.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p>
              The SCOPE CD19 Detection Reagent enables specific identification and quantification of CD19-targeting
              CAR-modified T cells in flow cytometry applications. This reagent is designed to detect the
              antigen-binding domain of CD19-directed CARs, providing a universal detection approach that works across
              different CAR constructs targeting CD19.
            </p>
            <p className="mt-4">
              Optimized for clinical monitoring workflows, the reagent demonstrates consistent performance across common
              flow cytometry platforms and buffer systems. Its formulation minimizes background staining while
              maintaining high signal intensity for CAR-positive populations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">High Specificity</h3>
                <p className="text-sm text-muted-foreground">
                  Designed for low background and robust discrimination between CAR-positive and CAR-negative cells
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Batch-to-Batch Reproducibility</h3>
                <p className="text-sm text-muted-foreground">
                  Manufacturing processes optimized for consistent performance across different reagent lots
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Workflow Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Compatible with standard flow cytometry staining protocols and common instrument configurations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Cost-Efficient</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized formulation provides reliable performance at a competitive cost per test
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kit Format Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Kit Format</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Standard Kit</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>30 tests per kit (sufficient for typical clinical monitoring)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Ready-to-use format with recommended staining volume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Stable storage at 2-8°C (detailed storage guidance included)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Comprehensive technical documentation and protocols</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Custom kit sizes and bulk formats available upon request for high-throughput applications or
                    multi-site studies.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">
                      Contact for Custom Options
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">Standard List Price</div>
                <div className="text-3xl font-bold mb-1">€700</div>
                <div className="text-sm text-muted-foreground mb-4">per kit (30 tests)</div>
                <div className="text-sm text-muted-foreground">Approximately €23.33 per test</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="pt-6">
                <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded mb-2">
                  INTRODUCTORY OFFER
                </div>
                <div className="text-3xl font-bold mb-1">€599</div>
                <div className="text-sm text-muted-foreground mb-4">per kit (30 tests) - First order</div>
                <div className="text-sm text-muted-foreground">Approximately €20 per test (15% savings)</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-900">
              <strong>Note:</strong> Prices may vary by region, order volume, and shipping requirements. Contact us for
              an official quote tailored to your specific needs. Volume discounts available for multi-kit orders.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Data Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Performance Data</h2>

          <div className="space-y-6">
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Figure 1: Specificity and sensitivity</p>
                    <p className="text-sm">Flow cytometry plots showing CAR detection across titration range</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Figure 2: Batch-to-batch consistency</p>
                    <p className="text-sm">Reproducibility data across multiple reagent lots</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Figure 3: Platform compatibility</p>
                    <p className="text-sm">Performance across different flow cytometer models</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Standardize Your CD19 CAR T Monitoring?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Request a quote or speak with our technical team to discuss your specific requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
