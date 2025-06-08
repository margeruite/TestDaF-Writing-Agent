
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "TestDaF AI Agent Suite - Your AI-Powered German Writing Coach",
    template: "%s | TestDaF AI Agent Suite"
  },
  description: "Master TestDaF writing with AI-powered feedback in your native language. Get instant corrections, personalized learning plans, and achieve your target TDN score with our advanced German writing coach.",
  keywords: [
    "TestDaF",
    "German writing",
    "AI tutor",
    "language learning",
    "TDN score",
    "German exam preparation",
    "writing feedback",
    "native language support",
    "adaptive learning",
    "German language test"
  ],
  authors: [{ name: "TestDaF AI Agent Suite" }],
  creator: "TestDaF AI Agent Suite",
  publisher: "TestDaF AI Agent Suite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://testdaf-ai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://testdaf-ai.com",
    title: "TestDaF AI Agent Suite - Your AI-Powered German Writing Coach",
    description: "Master TestDaF writing with AI-powered feedback in your native language. Get instant corrections, personalized learning plans, and achieve your target TDN score.",
    siteName: "TestDaF AI Agent Suite",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TestDaF AI Agent Suite - AI-Powered German Writing Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TestDaF AI Agent Suite - Your AI-Powered German Writing Coach",
    description: "Master TestDaF writing with AI-powered feedback in your native language. Get instant corrections and achieve your target TDN score.",
    images: ["/og-image.jpg"],
    creator: "@testdaf_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "TestDaF AI Agent Suite",
  "description": "AI-powered German writing coach for TestDaF exam preparation",
  "url": "https://testdaf-ai.com",
  "logo": "https://i.ytimg.com/vi/SLRom3dX-so/maxresdefault.jpg",
  "sameAs": [
    "https://twitter.com/testdaf_ai",
    "https://linkedin.com/company/testdaf-ai"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Education",
    "description": "AI-powered TestDaF writing preparation courses"
  },
  "educationalCredentialAwarded": "TestDaF Writing Proficiency",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "TestDaF Writing Certification",
    "description": "Certification for German academic writing proficiency"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#006D77" />
        <meta name="msapplication-TileColor" content="#006D77" />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
