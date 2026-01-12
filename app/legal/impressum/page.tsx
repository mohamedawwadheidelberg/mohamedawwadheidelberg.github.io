import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl font-bold mb-8">Impressum</h1>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  BlueRay Precision GmbH
                  <br />
                  Tiergartenstraße 15
                  <br />
                  69121 Heidelberg
                  <br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
                <p className="text-muted-foreground">
                  Telefon: +49 6221 1234567
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:info@blueray-precision.com" className="text-primary hover:underline">
                    info@blueray-precision.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Vertreten durch</h2>
                <p className="text-muted-foreground">
                  Dr. Mohamed Awwad, MBA
                  <br />
                  Geschäftsführer
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Registereintrag</h2>
                <p className="text-muted-foreground">
                  Eintragung im Handelsregister
                  <br />
                  Registergericht: Amtsgericht Mannheim
                  <br />
                  Registernummer: HRB 756549
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
                  <br />
                  DE458945481
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="text-muted-foreground">
                  Dr. Mohamed Awwad, MBA
                  <br />
                  Tiergartenstraße 15
                  <br />
                  69121 Heidelberg
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Haftungsausschluss</h2>

                <h3 className="font-semibold mb-2 mt-4">Haftung für Inhalte</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="font-semibold mb-2">Haftung für Links</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="font-semibold mb-2">Urheberrecht</h3>
                <p className="text-sm text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
