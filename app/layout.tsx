import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inzpektor - The Proof of Clean Hands Protocol",
  description: "Inzpektor is a revolutionary blockchain-based protocol that ensures transparency and accountability through verifiable proof of clean hands. Build trust in your transactions with our decentralized verification system.",
  keywords: ["blockchain", "proof of clean hands", "transparency", "accountability", "verification", "decentralized", "protocol", "trust"],
  authors: [{ name: "Inzpektor Team" }],
  creator: "Inzpektor",
  publisher: "Inzpektor",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://inzpektor-web.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Inzpektor - The Proof of Clean Hands Protocol",
    description: "Inzpektor is a revolutionary blockchain-based protocol that ensures transparency and accountability through verifiable proof of clean hands.",
    siteName: "Inzpektor",
    images: [
      {
        url: "/inzpektor.png",
        width: 1200,
        height: 630,
        alt: "Inzpektor - The Proof of Clean Hands Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inzpektor - The Proof of Clean Hands Protocol",
    description: "Revolutionary blockchain protocol ensuring transparency and accountability through verifiable proof of clean hands.",
    images: ["/inzpektor.png"],
    creator: "@inzpektor",
  },
  icons: {
    icon: "/inzpektor.png",
    shortcut: "/inzpektor.png",
    apple: "/inzpektor.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here when available
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Inzpektor',
    description: 'The Proof of Clean Hands Protocol - Revolutionary blockchain protocol ensuring transparency and accountability',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://inzpektor-web.vercel.app',
    image: '/inzpektor.png',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://inzpektor-web.vercel.app'}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
