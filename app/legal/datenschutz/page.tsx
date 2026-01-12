import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>

                <h3 className="font-semibold mb-2 mt-4">Allgemeine Hinweise</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>

                <h3 className="font-semibold mb-2">Datenerfassung auf dieser Website</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                  um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch
                  der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                  Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">2. Hosting</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Diese Website wird auf GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St,
                  San Francisco, CA 94107, USA. GitHub verarbeitet möglicherweise IP-Adressen und andere technische
                  Daten beim Zugriff auf diese Website. Weitere Informationen finden Sie in der Datenschutzerklärung von
                  GitHub:{" "}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                <h3 className="font-semibold mb-2 mt-4">Datenschutz</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>

                <h3 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  BlueRay Precision GmbH
                  <br />
                  [Adresse]
                  <br />
                  Heidelberg, Deutschland
                  <br />
                  E-Mail: info@blu-ray-precision.com
                </p>

                <h3 className="font-semibold mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
                  eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                  erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3 className="font-semibold mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                  Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                  Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">4. Datenerfassung auf dieser Website</h2>

                <h3 className="font-semibold mb-2 mt-4">Kontaktformular</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                  Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                  Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
                  Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
                  oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>

                <h3 className="font-semibold mb-2">Cookies</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Diese Website verwendet keine Cookies für Tracking oder Marketing-Zwecke. Technisch notwendige Cookies
                  können zum Betrieb der Website eingesetzt werden. Diese dienen ausschließlich der Funktionalität und
                  werden nicht zur Nachverfolgung des Nutzerverhaltens verwendet.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">5. Ihre Rechte</h2>
                <p className="text-sm text-muted-foreground mb-2">Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4">
                  <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten</li>
                  <li>Einschränkung der Datenverarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerspruch gegen die Datenverarbeitung</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften,
                  Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an: info@blu-ray-precision.com
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">Stand: Januar 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
