
'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DSGVOPage() {
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
              <Shield className="w-4 h-4 mr-2" />
              Datenschutz
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Datenschutzerklärung <span className="text-gradient">(DSGVO)</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {/* Verantwortlicher */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="w-5 h-5 mr-2 text-petrol" />
                    1. Verantwortlicher
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2"><strong>GermanAIAgent</strong></p>
                    <p className="mb-2">Musterstraße 123</p>
                    <p className="mb-2">10115 Berlin, Deutschland</p>
                    <p className="mb-2">E-Mail: hello@germanaiagent.com</p>
                    <p>Telefon: +49 (0) 123 456 789</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Datenerfassung */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-petrol" />
                    2. Welche Daten erfassen wir?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>2.1 Automatisch erfasste Daten</h4>
                  <p>
                    Beim Besuch unserer Website werden automatisch folgende Daten erfasst:
                  </p>
                  <ul>
                    <li>IP-Adresse</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Aufgerufene Seiten</li>
                    <li>Browser-Typ und -Version</li>
                    <li>Betriebssystem</li>
                    <li>Referrer-URL</li>
                  </ul>

                  <h4>2.2 Von Ihnen bereitgestellte Daten</h4>
                  <p>
                    Folgende Daten werden erfasst, wenn Sie diese freiwillig eingeben:
                  </p>
                  <ul>
                    <li>E-Mail-Adresse (bei Newsletter-Anmeldung)</li>
                    <li>Name (bei Kontaktformular)</li>
                    <li>Nachricht (bei Kontaktformular)</li>
                    <li>Hochgeladene Texte zur Analyse</li>
                    <li>Account-Informationen (bei Registrierung)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Zweck der Datenverarbeitung */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-petrol" />
                    3. Zweck der Datenverarbeitung
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Wir verarbeiten Ihre Daten für folgende Zwecke:</p>
                  
                  <h4>3.1 Bereitstellung der Website</h4>
                  <ul>
                    <li>Technische Bereitstellung und Sicherheit der Website</li>
                    <li>Analyse und Verbesserung der Website-Performance</li>
                    <li>Fehlerdiagnose und -behebung</li>
                  </ul>

                  <h4>3.2 AI-Schreibcoach-Service</h4>
                  <ul>
                    <li>Analyse Ihrer TestDaF-Texte</li>
                    <li>Bereitstellung von KI-gestütztem Feedback</li>
                    <li>Fortschrittsverfolgung und Leistungsanalyse</li>
                    <li>Personalisierte Lernempfehlungen</li>
                  </ul>

                  <h4>3.3 Kommunikation</h4>
                  <ul>
                    <li>Beantwortung von Anfragen</li>
                    <li>Newsletter-Versand (nur mit Einwilligung)</li>
                    <li>Wichtige Service-Updates</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rechtsgrundlage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-petrol" />
                    4. Rechtsgrundlage
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Die Verarbeitung Ihrer Daten erfolgt auf folgenden Rechtsgrundlagen:</p>
                  
                  <ul>
                    <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung (z.B. Newsletter)</li>
                    <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung (Service-Bereitstellung)</li>
                    <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen (Website-Sicherheit, Analyse)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ihre Rechte */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-petrol" />
                    5. Ihre Rechte
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  
                  <ul>
                    <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Information über verarbeitete Daten</li>
                    <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Korrektur unrichtiger Daten</li>
                    <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Löschung Ihrer Daten</li>
                    <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung</li>
                    <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Übertragung Ihrer Daten</li>
                    <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen Verarbeitung</li>
                    <li><strong>Widerruf der Einwilligung:</strong> Jederzeit möglich</li>
                  </ul>

                  <p>
                    Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: 
                    <strong> hello@germanaiagent.com</strong>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Datensicherheit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-petrol" />
                    6. Datensicherheit
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen:</p>
                  
                  <ul>
                    <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
                    <li>Sichere Server in Deutschland/EU</li>
                    <li>Regelmäßige Sicherheitsupdates</li>
                    <li>Zugriffsbeschränkungen für Mitarbeiter</li>
                    <li>Regelmäßige Backups</li>
                    <li>Monitoring und Intrusion Detection</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-petrol" />
                    7. Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Unsere Website verwendet Cookies für folgende Zwecke:</p>
                  
                  <h4>7.1 Technisch notwendige Cookies</h4>
                  <ul>
                    <li>Session-Management</li>
                    <li>Sicherheitsfunktionen</li>
                    <li>Grundlegende Website-Funktionalität</li>
                  </ul>

                  <h4>7.2 Analyse-Cookies (nur mit Einwilligung)</h4>
                  <ul>
                    <li>Website-Nutzungsstatistiken</li>
                    <li>Performance-Monitoring</li>
                    <li>Verbesserung der Benutzererfahrung</li>
                  </ul>

                  <p>
                    Sie können Cookies in Ihren Browser-Einstellungen verwalten oder deaktivieren.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kontakt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-petrol" />
                    8. Kontakt
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns:
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2"><strong>E-Mail:</strong> hello@germanaiagent.com</p>
                    <p className="mb-2"><strong>Telefon:</strong> +49 (0) 123 456 789</p>
                    <p><strong>Post:</strong> GermanAIAgent, Musterstraße 123, 10115 Berlin</p>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    <strong>Letzte Aktualisierung:</strong> 1. Juni 2024
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
