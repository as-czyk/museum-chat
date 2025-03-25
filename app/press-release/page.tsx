import Image from "next/image";

import Museum from "@/public/museum.jpeg";
import Logo from "@/public/icon.svg";
import Laptop from "@/public/laptop.png";
import { ArrowRight } from "lucide-react";

export default function PressRelease() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
          Die Zukunft des kulturellen Wissensmanagements
        </h1>
        <p className="text-xl text-muted-foreground mb-6 md:text-2xl">
          KI-gestützter Chatbot zur internen Unterstützung der Mitarbeiter:innen
          des Eintracht Frankfurt Museums eingeführt.
        </p>
      </header>

      <div className="mb-10">
        <Image
          src={Museum}
          alt="Press Release Featured Image"
          width={1000}
          height={500}
          className="rounded-lg w-full object-cover"
        />
        <p className="text-sm text-muted-foreground mt-2 italic text-center">
          Bildunterschrift: Das Eintracht Museum am Waldstadion
        </p>
      </div>

      {/* Press Release Content */}
      <div className="prose prose-lg max-w-none">
        {/* Chapter 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Ein digitaler Museumsmitarbeiter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <p>
                Das Eintracht Frankfurt Museum hat einen KI-basierten Chatbot
                entwickelt, der auf einem Retrieval-Augmented Generation
                (RAG)-System basiert. Ziel ist es, interne Anfragen von
                Kolleg:innen rund um die Vereinsgeschichte, Archivdokumente und
                organisatorische Abläufe schnell, präzise und automatisiert zu
                beantworten.
              </p>
              <p className="mt-4">
                Der Chatbot greift dabei auf eine Vielzahl digitalisierter
                Quellen wie PDFs, Archivdateien und strukturierte Texte zu.
                Durch diese Lösung wird die tägliche Arbeit des Museumsteams
                deutlich effizienter und der Zugriff auf Wissen zentralisiert.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  src={Laptop}
                  alt="Detailansicht der Innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 italic">
                Detailansicht: Der neue Chatbot im Einsatz
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Problemstellung</h2>
          <p>
            Das Eintracht Frankfurt Museum erhält intern regelmäßig Anfragen zu
            historischen Ereignissen, Spielern, Vereinsdaten oder auch
            organisatorischen Prozessen, die zeitaufwendige manuelle Recherchen
            erfordern. Die Verteilung des Wissens über verschiedene Dokumente,
            Archivsysteme und Personen führt zu Engpässen, Redundanz und
            ineffizientem Wissenstransfer.
          </p>
          <div className="mt-4">
            Das Eintracht Museum stand somit u.a vor folgenden
            Herausforderungen:
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <strong className="mr-2">Engpässe im Wissenstransfer:</strong>
                Die Zerstreuung von Wissen auf unterschiedliche Dokumente,
                Archivsysteme und Personen verursacht Engpässe, doppelte
                Arbeiten und einen ineffizienten Transfer von Wissen.
              </li>
              <li>
                <strong className="mr-2">Abhängigkeit von Personen:</strong>
                Durch die Abhängigkeit von Personen, die das Wissen kennen,
                besteht die Gefahr, dass das Wissen verloren geht, wenn diese
                Personen aus dem Unternehmen ausscheiden.
              </li>
              <li>
                <strong className="mr-2">Zeitaufwand:</strong>
                Die manuelle Recherche von Informationen dauert länger und ist
                fehleranfällig.
              </li>
            </ul>
          </div>
        </section>

        {/* Chapter 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Lösung</h2>
          <p>
            Mit dem neuen Chatbot steht den Mitarbeitenden ein intelligentes
            System zur Verfügung, das auf natürliche Spracheingaben reagiert und
            fundierte Antworten auf Basis des Museumsarchivs liefert. Das
            zugrunde liegende RAG-System kombiniert dokumentenbasiertes
            Retrieval mit KI-generierter Antwortformulierung, um schnell und
            präzise Hilfestellung zu leisten. Dadurch wird die interne
            Kommunikation entlastet, Wissen zentral gebündelt und die tägliche
            Arbeit erheblich vereinfacht.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Stimmen zur Innovation</h2>

          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={Logo}
                  alt="Eintracht Frankfurt Museum Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-primary"
                />
              </div>
              <div className="flex-1">
                <div className="bg-muted p-4 rounded-lg rounded-tl-none shadow-sm relative">
                  <div className="absolute -left-2 top-3 w-3 h-3 rotate-45 bg-muted"></div>
                  <p className="italic mb-2">
                    "Früher musste ich in fünf verschiedenen Ordnern nach einer
                    Spielerliste aus den 80ern suchen – jetzt frage ich einfach
                    den Chatbot. Das spart mir täglich locker eine halbe
                    Stunde."
                  </p>
                  <p className="text-sm font-semibold">Sabine M.</p>
                  <p className="text-xs text-muted-foreground">
                    Archiv & Dokumentation
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={Logo}
                  alt="Eintracht Frankfurt Museum Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-primary"
                />
              </div>
              <div className="flex-1">
                <div className="bg-muted p-4 rounded-lg rounded-tl-none shadow-sm relative">
                  <div className="absolute -left-2 top-3 w-3 h-3 rotate-45 bg-muted"></div>
                  <p className="italic mb-2">
                    „Ich war anfangs skeptisch, aber der Bot kennt wirklich
                    Details, die sonst nur langjährige Kolleg:innen wissen. Es
                    ist wie ein digitales Gedächtnis des Museums.“
                  </p>
                  <p className="text-sm font-semibold">Matthias</p>
                  <p className="text-xs text-muted-foreground">
                    Leiter Eintracht Frankfurt Museum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p>
            Der Chatbot ist ab sofort im internen System des Museums integriert
            und kann über das Intranet aufgerufen werden. Eine kurze Einführung
            und ein FAQ stehen ebenfalls bereit, um den Einstieg für alle
            Mitarbeitenden so einfach wie möglich zu gestalten.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-16 mb-8">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Erleben Sie die Innovation selbst
              </h2>
              <p className="text-lg md:text-2xl opacity-90">
                Chatten Sie mit dem Eintracht Frankfurt Museum Chatbot und
                erleben Sie die Geschichte von Eintracht Frankfurt.
              </p>
              <div className="pt-4">
                <a
                  href="/chat"
                  className="inline-flex items-center justify-center h-14 px-10 py-4 text-lg font-medium bg-white text-primary rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md"
                >
                  Jetzt ausprobieren
                  <ArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
