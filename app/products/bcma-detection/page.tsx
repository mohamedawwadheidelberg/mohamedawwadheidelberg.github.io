import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RUODisclaimer } from "@/components/ruo-disclaimer"
import { CheckCircle2, Microscope, TrendingUp, FlaskConical } from "lucide-react"

export default function BCMADetectionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <RUODisclaimer variant="banner" />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Detection Reagent</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">BCMA Detection Reagent</h1>
          <p className="text-xl text-muted-foreground">
            Specialized detection reagent for BCMA-targeting CAR T cells, enabling accurate monitoring in multiple
            myeloma research applications.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p>
              The SCOPE BCMA Detection Reagent provides specific recognition of B-cell maturation antigen
              (BCMA)-targeting CAR T cells. Designed for multiple myeloma research monitoring, this reagent enables
              quantification of CAR-modified cells throughout the manufacturing process and post-infusion follow-up.
            </p>
            <p className="mt-4">
              Optimized to work with diverse BCMA CAR constructs, the reagent maintains consistent performance
              characteristics across different design architectures. The formulation balances sensitivity and
              specificity to enable detection across the research-relevant concentration range.
            </p>
          </div>

          <RUODisclaimer />
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
                <h3 className="font-semibold mb-2">Target Specificity</h3>
                <p className="text-sm text-muted-foreground">
                  Engineered for selective detection of BCMA-directed CARs with minimal cross-reactivity
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Reproducible Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous quality control ensures consistent results across production batches
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Universal CAR Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Works across different BCMA CAR construct designs and generations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Cost-Effective Solution</h3>
                <p className="text-sm text-muted-foreground">
                  Competitive pricing enables routine monitoring without budget constraints
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
                      <span>30 tests per kit for standard workflow needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Convenient ready-to-use formulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Optimized storage conditions (2-8°C)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Complete documentation including staining protocols</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Larger kit sizes available for manufacturing QC and high-volume research applications. Contact us to
                    discuss custom configurations.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">
                      Inquire About Custom Formats
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

          <div className="mt-6">
            <RUODisclaimer />
          </div>

          <div className="mt-4 bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Prices may vary by region and order volume. For multi-site studies or manufacturing
              applications requiring multiple kits, please request a custom quote. Volume discounts and subscription
              models available.
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
                    <p className="font-medium">Figure 1: BCMA CAR detection specificity</p>
                    <p className="text-sm">Representative flow plots demonstrating positive/negative discrimination</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Figure 2: Linearity and dynamic range</p>
                    <p className="text-sm">Quantification performance across CAR expression levels</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Figure 3: Multi-instrument validation</p>
                    <p className="text-sm">Consistency data across different cytometer platforms</p>
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
          <h2 className="text-3xl font-bold mb-4">Get Started with BCMA CAR T Research</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact our team to request a quote or discuss technical specifications for your application.
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
