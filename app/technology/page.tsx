import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Microscope, FlaskConical, CheckCircle2, Shield } from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Platform Technology</h1>
          <p className="text-xl text-muted-foreground">
            Scientific precision through innovative design, rigorous quality control, and systematic standardization
          </p>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Platform Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              The SCOPE platform employs antigen-based detection reagent design principles that enable robust and
              specific recognition of CAR-modified cells. Our approach focuses on creating reagents that maintain
              consistent performance across diverse flow cytometry workflows while minimizing non-specific interactions.
            </p>
            <p className="mb-4">
              By leveraging carefully selected target antigens and optimized conjugation chemistries, SCOPE reagents
              integrate seamlessly with standard flow cytometry protocols. This compatibility extends across common
              instrument platforms, buffer systems, and staining procedures, enabling straightforward adoption without
              extensive method redevelopment.
            </p>
            <p>
              The platform is designed with a systems-level perspective: reagents, reference materials, and quality
              assessment tools work together to create a comprehensive standardization ecosystem for CAR T cell
              detection.
            </p>
          </div>

          {/* Placeholder for figure */}
          <Card className="mt-8 bg-muted">
            <CardContent className="pt-6">
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Microscope className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">Insert figure: staining performance</p>
                  <p className="text-sm">Comparative data showing specificity and reproducibility</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Consistency by Design Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Consistency by Design</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p className="mb-4">
              Batch-to-batch reproducibility is achieved through comprehensive quality control throughout the
              manufacturing process. Each production lot undergoes rigorous performance verification against defined
              specifications, ensuring consistent behavior across different reagent batches.
            </p>
            <p className="mb-4">
              Our manufacturing approach emphasizes process control and stability testing. Critical parameters are
              monitored at every step, from raw material qualification through final product release. Extensive
              stability data guides storage recommendations and shelf-life assignments.
            </p>
            <p>
              Complete documentation accompanies every product, including lot-specific performance data, recommended
              staining protocols, and instrument setup guidance. This transparency enables users to validate reagent
              performance in their specific laboratory environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Process Control</h3>
                <p className="text-sm text-muted-foreground">
                  Monitored manufacturing with defined critical parameters
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Stability Testing</h3>
                <p className="text-sm text-muted-foreground">Comprehensive studies ensuring reliable shelf life</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Complete Documentation</h3>
                <p className="text-sm text-muted-foreground">Lot-specific data and detailed protocols provided</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reference Materials Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Reference Materials for Normalization</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              SCOPE Reference Cells provide a critical foundation for inter-laboratory comparability. These standardized
              control materials enable laboratories to verify instrument performance, validate staining procedures, and
              normalize results to a common reference point.
            </p>
            <p className="mb-4">
              The reference cell concept addresses a fundamental challenge in flow cytometry: ensuring that similar
              biological samples yield comparable results across different instruments and laboratories. By providing
              materials with defined staining characteristics, SCOPE Reference Cells enable systematic quality checks
              and method harmonization.
            </p>
            <p>
              Regular use of reference materials supports ongoing quality assurance programs and facilitates
              troubleshooting when unexpected results occur. This approach is particularly valuable in multi-center
              studies and clinical trial settings where data comparability is essential.
            </p>
          </div>

          {/* Placeholder for figure */}
          <Card className="mt-8 bg-muted">
            <CardContent className="pt-6">
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <FlaskConical className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">Insert figure: reference cell concept</p>
                  <p className="text-sm">Schematic showing normalization approach</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* IP and Development Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">IP and Development History</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              The SCOPE platform has been developed over multiple years by an interdisciplinary team of scientists and
              engineers combining expertise in immunology, flow cytometry, analytical chemistry, and bioprocess
              development.
            </p>
            <p className="mb-4">
              Our intellectual property portfolio includes protected methods and proprietary production know-how that
              enable the unique performance characteristics of SCOPE products. This IP foundation provides a sustainable
              competitive advantage while ensuring long-term availability and support for our customers.
            </p>
            <p>
              Ongoing research and development efforts focus on expanding the platform to additional CAR targets,
              optimizing manufacturing scalability, and developing complementary tools for workflow standardization.
            </p>
          </div>

          <Card className="mt-8 border-2 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Protected Intellectual Property</h3>
                  <p className="text-sm text-muted-foreground">
                    Proprietary platform technology and production methodologies safeguarded through comprehensive IP
                    protection. Specific patent information available upon request for qualified partners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for workflow figure */}
          <Card className="mt-8 bg-background">
            <CardContent className="pt-6">
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Microscope className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">Insert figure: workflow schematic</p>
                  <p className="text-sm">End-to-end standardization workflow diagram</p>
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
