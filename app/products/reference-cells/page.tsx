import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RUODisclaimer } from "@/components/ruo-disclaimer"
import { FlaskConical, Target, CheckCircle2, TrendingUp } from "lucide-react"

export default function ReferenceCellsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <RUODisclaimer variant="banner" />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <FlaskConical className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Reference Material</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SCOPE Reference Cells</h1>
          <p className="text-xl text-muted-foreground">
            Standardized control cells for instrument validation, workflow verification, and inter-laboratory
            normalization in CAR T cell detection.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p>
              SCOPE Reference Cells are engineered control materials designed to standardize CAR T cell detection across
              laboratories and instrument platforms. These cells mimic CAR-like surface recognition behavior, providing
              a consistent reference point for validating staining procedures and normalizing flow cytometry results.
            </p>
            <p className="mt-4">
              By incorporating reference cells into routine quality control workflows, laboratories can monitor
              instrument performance over time, troubleshoot unexpected results, and ensure that data generated at
              different sites or time points remains comparable. This systematic approach to standardization is
              particularly valuable in multi-center research studies and distributed manufacturing settings.
            </p>
          </div>

          <RUODisclaimer />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Defined Positive Fraction</h3>
                <p className="text-sm text-muted-foreground">
                  Available in configurable formats with specified percentages of positive cells to match your
                  application needs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Repeatable Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Lot-to-lot consistency ensures reliable reference values across extended time periods
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <FlaskConical className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Easy Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Simple protocol integration with existing workflow requires minimal method modification
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Long-Term Stability</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized formulation and storage conditions maintain stability throughout shelf life
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Use Cases</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Instrument Qualification</h3>
                <p className="text-muted-foreground">
                  Verify cytometer performance during installation qualification (IQ), operational qualification (OQ),
                  and routine performance checks. Reference cells provide a consistent test material for assessing
                  detector sensitivity, resolution, and optical alignment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Staining Control</h3>
                <p className="text-muted-foreground">
                  Include reference cells alongside research samples to verify that staining procedures are performing
                  as expected. Deviations from established reference values can indicate reagent degradation, protocol
                  drift, or instrument issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Inter-Laboratory Comparability</h3>
                <p className="text-muted-foreground">
                  Enable meaningful comparison of results across different laboratories by normalizing to common
                  reference materials. Particularly valuable in multi-center research studies where data harmonization
                  is critical for valid statistical analysis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Method Development</h3>
                <p className="text-muted-foreground">
                  Use reference cells during assay optimization to evaluate different staining conditions, gating
                  strategies, and data analysis approaches. The consistent starting material facilitates method
                  refinement and validation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Format Options Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Available Formats</h2>

          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                SCOPE Reference Cells can be configured to meet specific application requirements. Standard formats
                include:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Low positive fraction</span>
                    <span className="text-muted-foreground">
                      {" "}
                      – Simulates minimal residual disease detection scenarios
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Medium positive fraction</span>
                    <span className="text-muted-foreground">
                      {" "}
                      – Represents typical early post-infusion CAR T levels
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">High positive fraction</span>
                    <span className="text-muted-foreground"> – Models peak CAR T expansion scenarios</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Custom configurations</span>
                    <span className="text-muted-foreground">
                      {" "}
                      – Tailored positive fractions available for specific research needs
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <RUODisclaimer variant="footer" />
                <p className="text-sm text-muted-foreground mt-4 mb-4">
                  Contact our technical team to discuss which format best suits your quality control and standardization
                  objectives.
                </p>
                <Link href="/contact">
                  <Button>Discuss Format Options</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Data Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Performance Documentation</h2>

          <div className="space-y-6">
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <FlaskConical className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Figure 1: Reference cell characterization</p>
                    <p className="text-sm">Flow cytometry profiles showing positive fraction stability</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <FlaskConical className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Figure 2: Inter-laboratory study results</p>
                    <p className="text-sm">Comparative data demonstrating normalization effectiveness</p>
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
          <h2 className="text-3xl font-bold mb-4">Enhance Your Quality Control with Reference Cells</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Speak with our team to learn how SCOPE Reference Cells can improve the reliability and comparability of your
            CAR T detection workflows.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              Request Information
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
