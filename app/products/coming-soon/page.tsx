import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Microscope, Clock } from "lucide-react"

export default function ComingSoonPage() {
  const upcomingProducts = [
    {
      name: "CD33 Detection Reagent",
      description:
        "Detection reagent for CD33-targeting CAR T cells, designed for acute myeloid leukemia (AML) therapeutic monitoring applications.",
      target: "CD33",
      indication: "AML",
    },
    {
      name: "CD20 Detection Reagent",
      description:
        "Optimized reagent for CD20-directed CAR T cells, supporting monitoring workflows in B-cell lymphoma treatments.",
      target: "CD20",
      indication: "B-cell Lymphoma",
    },
    {
      name: "GPRC5D Detection Reagent",
      description:
        "Novel detection reagent for GPRC5D-targeting CAR T cells, addressing emerging multiple myeloma treatment modalities.",
      target: "GPRC5D",
      indication: "Multiple Myeloma",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Coming Soon</h1>
          <p className="text-xl text-muted-foreground">
            Expanding our portfolio to support emerging CAR T cell therapies
          </p>
        </div>
      </section>

      {/* Products in Development */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Products in Development</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We are actively developing detection reagents for additional CAR T cell targets to meet the evolving needs
            of cell therapy monitoring.
          </p>

          <div className="space-y-6">
            {upcomingProducts.map((product) => (
              <Card key={product.target} className="border-2 border-dashed">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary/10 text-secondary">
                          IN DEVELOPMENT
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{product.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Target: </span>
                          <span className="font-medium">{product.target}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Indication: </span>
                          <span className="font-medium">{product.indication}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-background">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Join Our Early Access Program</h2>
              <p className="text-muted-foreground mb-6">
                Be among the first to evaluate these new detection reagents. Early access participants receive:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Priority access to products as they become available</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Introductory pricing and evaluation samples</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Opportunity to provide feedback during product development
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Direct technical support from our development team</span>
                </li>
              </ul>

              <Link href="/contact">
                <Button size="lg">Express Interest in Early Access</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Custom Development Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Different Target?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are open to discussing custom development projects for additional CAR targets. If you have specific
            monitoring needs not addressed by our current or planned portfolio, we'd like to hear from you.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Discuss Custom Development
            </Button>
          </Link>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Development Timeline</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center mb-4">
                While we cannot provide specific launch dates, we anticipate making these products available over the
                next 12-18 months as development and validation activities are completed.
              </p>
              <p className="text-sm text-muted-foreground text-center">
                Join our mailing list or early access program to receive updates on product availability and development
                milestones.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
