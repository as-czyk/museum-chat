import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Häufig gestellte Fragen
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Finden Sie Antworten auf Ihre Fragen zu unseren Dienstleistungen und
          Prozessen
        </p>
      </div>

      <Tabs defaultValue="external" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="external">Externe FAQs</TabsTrigger>
          <TabsTrigger value="internal">Interne FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="external" className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Externe FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="external-1">
                <AccordionTrigger>
                  Was ist der digitale Museumsmitarbeiter?
                </AccordionTrigger>
                <AccordionContent>
                  Es handelt sich um einen KI-gestützten Chatbot, der auf Fragen
                  rund um das Museum, die Geschichte von Eintracht Frankfurt und
                  Ausstellungen antworten kann – automatisiert, verständlich und
                  sofort.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="external-2">
                <AccordionTrigger>
                  Wie kann ich den Chatbot nutzen?
                </AccordionTrigger>
                <AccordionContent>
                  Aktuell ist der Chatbot intern für das Museumsteam verfügbar.
                  Eine öffentliche Version ist in Planung und soll künftig über
                  die Website des Museums erreichbar sein.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="external-3">
                <AccordionTrigger>
                  Wie sicher sind meine Daten bei der Nutzung?
                </AccordionTrigger>
                <AccordionContent>
                  In der späteren öffentlichen Version werden keine
                  personenbezogenen Daten gespeichert. Die Nutzung ist anonym,
                  DSGVO-konform und ausschließlich zur Beantwortung von Anfragen
                  gedacht.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="external-4">
                <AccordionTrigger>
                  Wie kann ich eine Bestellung stornieren?
                </AccordionTrigger>
                <AccordionContent>
                  Sie können Ihre Bestellung innerhalb von 24 Stunden nach dem
                  Kauf stornieren, indem Sie sich in Ihr Konto einloggen und den
                  Abschnitt "Meine Bestellungen" aufrufen. Klicken Sie auf die
                  entsprechende Bestellung und wählen Sie "Stornieren".
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="external-5">
                <AccordionTrigger>
                  Wer hat den Chatbot entwickelt?
                </AccordionTrigger>
                <AccordionContent>
                  Das System wurde gemeinsam vom Eintracht Frankfurt Museum und
                  einem spezialisierten KI-Entwicklungsteam realisiert. Es
                  basiert auf modernster Technologie aus dem Bereich Künstliche
                  Intelligenz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="internal" className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Interne FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="internal-1">
                <AccordionTrigger>
                  Wie kann ich den Chatbot nutzen?
                </AccordionTrigger>
                <AccordionContent>
                  Der Chatbot ist über das Intranet des Museums erreichbar. Du
                  kannst ihn im Browser öffnen und direkt deine Fragen eingeben
                  – ganz ohne spezielle Schulung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="internal-2">
                <AccordionTrigger>
                  Welche Themen kann der Chatbot abdecken?
                </AccordionTrigger>
                <AccordionContent>
                  Er beantwortet Fragen rund um: Vereinsgeschichte & Historische
                  Ereignisse Spielerbiografien Ausstellungen & Exponate
                  Veranstaltungen Interne Abläufe (z. B. Öffnungszeiten,
                  Ansprechpartner, Protokolle)
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="internal-3">
                <AccordionTrigger>
                  Woher stammen die Informationen im Chatbot?
                </AccordionTrigger>
                <AccordionContent>
                  Die Inhalte basieren auf einer internen Wissensdatenbank, die
                  aus PDF-Dokumenten, Archiven, Protokollen, FAQ-Dokumenten und
                  anderen textbasierten Quellen besteht, die wir dem System
                  bereitgestellt haben.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="internal-4">
                <AccordionTrigger>
                  Was ist ein RAG-System und warum wurde es eingesetzt?
                </AccordionTrigger>
                <AccordionContent>
                  RAG steht für Retrieval-Augmented Generation. Das System
                  kombiniert die klassische Dokumentensuche mit KI-generierter
                  Sprache. Es sorgt dafür, dass Antworten nicht frei erfunden,
                  sondern auf echte Quellen gestützt werden.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="internal-5">
                <AccordionTrigger>
                  Kann ich dem Chatbot vertrauen? Macht er Fehler?
                </AccordionTrigger>
                <AccordionContent>
                  Der Chatbot arbeitet mit hoher Genauigkeit, aber er ersetzt
                  kein menschliches Urteil. Bei Unsicherheiten oder kritischen
                  Anfragen sollte das Ergebnis gegengeprüft werden.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="internal-6">
                <AccordionTrigger>
                  Biete der Chatbot Unterstützung beim Anzeigen der verwendeten
                  Quellen?
                </AccordionTrigger>
                <AccordionContent>
                  Aktuell werden die verwendeten Quellen nicht angezeigt. In
                  Zukunft wird der Chatbot diese Funktion erweitern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
