//

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { theme } from "@/lib/theme"; 
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koushik Babu | Solution Architect & Developer",
  description: "Portfolio and insights on AI, Full-stack development, and System Optimization.",
  metadataBase: new URL('https://yourportfolio.com'), 
  openGraph: {
    title: "Koushik Babu",
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
      <body 
        className={`
          ${inter.className} 
          bg-gray-100 
          ${theme.text.main}
          antialiased 
          min-h-screen 
          flex 
          flex-col
        `}
      >
        {/* Navigation Layer */}
        <Navbar />

        {/* The 'flex-grow' on main ensures that if a page has little content, 
          the Footer is still pushed to the very bottom of the screen.
        */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}