
'use client';

import { motion } from 'framer-motion';
import { FileText, Users, CreditCard, Shield, AlertTriangle, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AGBPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-petrol/5 via-transparent to-petrol-light/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Rechtliches
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Allgemeine Geschäftsbedingungen <span className="text-gradient">(AGB)</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Die Nutzungsbedingungen für unseren TestDaF AI-Schreibcoach Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {/* Geltungsbereich */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-petrol" />
                    1. Geltungsbereich
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der 
                    GermanAIAgent, die über die Website germanaiagent.com angeboten werden.
                  </p>
                  
                  <p>
                    Durch die Nutzung unserer Dienste erklären Sie sich mit diesen AGB einverstanden. 
                    Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, 
                    wir haben ihrer Geltung ausdrücklich schriftlich zugestimmt.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Leistungen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-petrol" />
                    2. Leistungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>2.1 Serviceangebot</h4>
                  <p>GermanAIAgent bietet folgende Leistungen an:</p>
                  <ul>
                    <li>AI-gestützte Analyse von TestDaF-Schreibaufgaben</li>
                    <li>Feedback und Verbesserungsvorschläge in der Muttersprache</li>
                    <li>TDN-Score-Vorhersagen</li>
                    <li>Personalisierte Lernpläne</li>
                    <li>Fortschrittsverfolgung</li>
                  </ul>

                  <h4>2.2 Verfügbarkeit</h4>
                  <p>
                    Wir bemühen uns um eine hohe Verfügbarkeit unserer Dienste, können jedoch 
                    keine 100%ige Verfügbarkeit garantieren. Wartungsarbeiten werden nach 
                    Möglichkeit außerhalb der Hauptnutzungszeiten durchgeführt.
                  </p>

                  <h4>2.3 Leistungsumfang</h4>
                  <p>
                    Der konkrete Leistungsumfang richtet sich nach dem gewählten Tarif. 
                    Detaillierte Informationen finden Sie auf unserer Preisseite.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vertragsschluss */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-petrol" />
                    3. Vertragsschluss
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>3.1 Angebot und Annahme</h4>
                  <p>
                    Die Darstellung unserer Leistungen auf der Website stellt kein bindendes 
                    Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.
                  </p>

                  <h4>3.2 Vertragsabschluss</h4>
                  <p>
                    Der Vertrag kommt durch Ihre Bestellung und unsere Bestätigung zustande. 
                    Bei kostenpflichtigen Diensten erfolgt die Bestätigung nach erfolgreichem 
                    Zahlungseingang.
                  </p>

                  <h4>3.3 Minderjährige</h4>
                  <p>
                    Verträge mit Minderjährigen bedürfen der Zustimmung der Erziehungsberechtigten.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Preise und Zahlung */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-petrol" />
                    4. Preise und Zahlung
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>4.1 Preise</h4>
                  <p>
                    Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen Preise. 
                    Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
                  </p>

                  <h4>4.2 Zahlungsbedingungen</h4>
                  <ul>
                    <li>Zahlung erfolgt im Voraus</li>
                    <li>Akzeptierte Zahlungsmethoden: Kreditkarte, PayPal, SEPA-Lastschrift</li>
                    <li>Bei Zahlungsverzug können wir den Zugang sperren</li>
                  </ul>

                  <h4>4.3 Preisänderungen</h4>
                  <p>
                    Preisänderungen für laufende Verträge werden mindestens 30 Tage im Voraus 
                    angekündigt. Sie haben das Recht zur außerordentlichen Kündigung.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Nutzungsrechte und -pflichten */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-petrol" />
                    5. Nutzungsrechte und -pflichten
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>5.1 Nutzungsrechte</h4>
                  <p>
                    Sie erhalten ein nicht-exklusives, nicht-übertragbares Recht zur Nutzung 
                    unserer Dienste gemäß diesen AGB.
                  </p>

                  <h4>5.2 Nutzungspflichten</h4>
                  <p>Sie verpflichten sich:</p>
                  <ul>
                    <li>Die Dienste nur für legale Zwecke zu nutzen</li>
                    <li>Keine urheberrechtlich geschützten Inhalte ohne Berechtigung hochzuladen</li>
                    <li>Keine schädlichen oder illegalen Inhalte zu übermitteln</li>
                    <li>Ihre Zugangsdaten vertraulich zu behandeln</li>
                    <li>Uns über Missbrauch zu informieren</li>
                  </ul>

                  <h4>5.3 Verbotene Nutzung</h4>
                  <p>Untersagt sind insbesondere:</p>
                  <ul>
                    <li>Reverse Engineering oder Dekompilierung</li>
                    <li>Automatisierte Zugriffe ohne Genehmigung</li>
                    <li>Weitergabe von Zugangsdaten</li>
                    <li>Umgehung von Sicherheitsmaßnahmen</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Widerrufsrecht */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-petrol" />
                    6. Widerrufsrecht
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>6.1 Widerrufsfrist</h4>
                  <p>
                    Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen 
                    diesen Vertrag zu widerrufen.
                  </p>

                  <h4>6.2 Widerrufsfolgen</h4>
                  <p>
                    Im Falle eines wirksamen Widerrufs erstatten wir Ihnen alle erhaltenen 
                    Zahlungen unverzüglich zurück.
                  </p>

                  <h4>6.3 Ausschluss des Widerrufsrechts</h4>
                  <p>
                    Das Widerrufsrecht erlischt bei digitalen Inhalten, wenn die Leistung 
                    mit Ihrer Zustimmung vor Ablauf der Widerrufsfrist begonnen wurde.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Haftung */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-petrol" />
                    7. Haftung
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>7.1 Haftungsumfang</h4>
                  <p>
                    Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, 
                    des Körpers oder der Gesundheit sowie für Schäden aus vorsätzlichen 
                    oder grob fahrlässigen Pflichtverletzungen.
                  </p>

                  <h4>7.2 Haftungsbeschränkung</h4>
                  <p>
                    Im Übrigen ist unsere Haftung auf den vorhersehbaren, vertragstypischen 
                    Schaden begrenzt. Die Haftung für mittelbare Schäden und entgangenen 
                    Gewinn ist ausgeschlossen.
                  </p>

                  <h4>7.3 Keine Erfolgsgarantie</h4>
                  <p>
                    Wir übernehmen keine Garantie für das Erreichen bestimmter TestDaF-Scores 
                    oder Prüfungsergebnisse.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kündigung */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-petrol" />
                    8. Kündigung
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>8.1 Ordentliche Kündigung</h4>
                  <p>
                    Beide Parteien können den Vertrag jederzeit mit einer Frist von 
                    30 Tagen zum Monatsende kündigen.
                  </p>

                  <h4>8.2 Außerordentliche Kündigung</h4>
                  <p>
                    Das Recht zur außerordentlichen Kündigung aus wichtigem Grund 
                    bleibt unberührt.
                  </p>

                  <h4>8.3 Folgen der Kündigung</h4>
                  <p>
                    Nach Vertragsende wird Ihr Zugang gesperrt. Ihre Daten werden 
                    gemäß unserer Datenschutzerklärung behandelt.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Schlussbestimmungen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-petrol" />
                    9. Schlussbestimmungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>9.1 Anwendbares Recht</h4>
                  <p>
                    Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss 
                    des UN-Kaufrechts.
                  </p>

                  <h4>9.2 Gerichtsstand</h4>
                  <p>
                    Gerichtsstand für alle Streitigkeiten ist Berlin, sofern Sie 
                    Kaufmann, juristische Person des öffentlichen Rechts oder 
                    öffentlich-rechtliches Sondervermögen sind.
                  </p>

                  <h4>9.3 Salvatorische Klausel</h4>
                  <p>
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein, 
                    berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
                  </p>

                  <h4>9.4 Kontakt</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2"><strong>E-Mail:</strong> hello@germanaiagent.com</p>
                    <p className="mb-2"><strong>Telefon:</strong> +49 (0) 123 456 789</p>
                    <p><strong>Post:</strong> GermanAIAgent, Musterstraße 123, 10115 Berlin</p>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    <strong>Stand:</strong> 1. Juni 2024
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
