import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { theme } from "@/lib/theme"; 
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReset from "@/components/utils/ScrollReset";
import GlobalBackButton from "@/components/layout/BackButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arshan ",
  description: "High-performance infrastructure for finance, marketing, and HR.",
  metadataBase: new URL('https://arshan.de'), 
  openGraph: {
    title: "Arshan",
    description: "Building data-driven tools and high-performance applications.",
    type: "website",
    images: ['/og-image.png'], 
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </head>
      <body 
        className={`
          ${inter.className} 
          bg-white 
          ${theme.text.main}
          antialiased 
          min-h-screen 
          flex 
          flex-col
        `}
      >
        {/* This component now handles global click listening and scroll logic */}
        <ScrollReset />

        <Navbar />
        <GlobalBackButton />
        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}