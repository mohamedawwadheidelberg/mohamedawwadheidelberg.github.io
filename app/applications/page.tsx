import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Building2, Users, Beaker } from "lucide-react"

export default function ApplicationsPage() {
  const applications = [
    {
      icon: Activity,
      title: "Clinical Monitoring Support Workflows",
      description:
        "Support laboratory workflows for monitoring CAR T cell persistence and phenotype throughout patient treatment courses. Enable consistent detection across serial time points to track therapeutic dynamics.",
      benefits: [
        "Standardized detection across patient monitoring visits",
        "Comparable results supporting clinical decision workflows",
        "Reduced variability in longitudinal tracking",
      ],
    },
    {
      icon: Building2,
      title: "Manufacturing & Process Monitoring",
      description:
        "Enable quality control testing during CAR T cell manufacturing processes. Verify CAR expression levels, assess transduction efficiency, and monitor product consistency.",
      benefits: [
        "In-process and release testing support",
        "Batch-to-batch comparison facilitation",
        "Process optimization and troubleshooting tools",
      ],
    },
    {
      icon: Users,
      title: "Multicenter Study Standardization",
      description:
        "Support data harmonization in multi-site clinical trials and translational research studies. Reference materials enable normalization across different laboratories and instrument platforms.",
      benefits: [
        "Inter-laboratory result comparability",
        "Reduced site-to-site variability",
        "Simplified data pooling and analysis",
      ],
    },
    {
      icon: Beaker,
      title: "Method Development & Assay Harmonization",
      description:
        "Facilitate development and optimization of CAR T detection methods. Standardized reagents and controls support method validation, transfer, and ongoing quality assurance.",
      benefits: [
        "Reproducible method development materials",
        "Simplified assay transfer between sites",
        "Ongoing quality control and trending",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Applications</h1>
          <p className="text-xl text-muted-foreground">
            SCOPE reagents and reference materials support diverse CAR T cell detection workflows across research,
            development, and clinical settings
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {applications.map((app, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <app.icon className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">{app.title}</h2>
                      <p className="text-muted-foreground mb-6">{app.description}</p>

                      <div className="space-y-2 mb-6">
                        <h3 className="font-semibold text-sm uppercase text-muted-foreground">Key Benefits</h3>
                        <ul className="space-y-2">
                          {app.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/contact">
                        <Button variant="outline">Discuss This Application</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Integration Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Seamless Workflow Integration</h2>
          <p className="text-lg text-muted-foreground mb-8">
            SCOPE products are designed to integrate smoothly with existing flow cytometry protocols. Whether you're
            running clinical monitoring assays, manufacturing QC tests, or translational research studies, our reagents
            work with your established procedures.
          </p>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Compatible</div>
                  <p className="text-sm text-muted-foreground">Works with common flow cytometry platforms</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Flexible</div>
                  <p className="text-sm text-muted-foreground">Adaptable to diverse staining protocols</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Supported</div>
                  <p className="text-sm text-muted-foreground">Comprehensive technical documentation provided</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RUO Disclaimer Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p className="text-sm text-muted-foreground">
                SCOPE products are intended for research use unless otherwise stated. They are designed to support
                laboratory workflows and research applications. For questions regarding specific use cases or regulatory
                considerations, please contact our team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Discuss Your Application Needs</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Our technical team can help you determine which SCOPE products best fit your specific workflow requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
