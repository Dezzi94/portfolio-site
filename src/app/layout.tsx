import type { Metadata } from "next";
import { Space_Grotesk, Lato } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://desmonddigital.com'),
  title: {
    default: "Jack Desmond | Digital Marketing Consultant & Automation Strategist",
    template: "%s | Jack Desmond"
  },
  description: "T-shaped digital marketing consultant and automation strategist. Building smarter systems for sustainable growth through marketing automation, funnel optimization, and strategic thinking.",
  keywords: ["digital marketing", "marketing automation", "funnel optimization", "paid advertising", "growth strategy", "neurodivergent consultant"],
  authors: [{ name: "Jack Desmond" }],
  creator: "Jack Desmond",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://desmonddigital.com",
    siteName: "Jack Desmond",
    title: "Jack Desmond | Digital Marketing Consultant & Automation Strategist",
    description: "T-shaped digital marketing consultant and automation strategist. Building smarter systems for sustainable growth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jack Desmond - Digital Marketing Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Desmond | Digital Marketing Consultant & Automation Strategist",
    description: "T-shaped digital marketing consultant and automation strategist. Building smarter systems for sustainable growth.",
    images: ["/og-image.jpg"],
    creator: "@jackdesmond",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${lato.variable}`}>
      <body className={`${lato.className} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
            <MobileCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
