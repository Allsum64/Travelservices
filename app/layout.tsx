import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel Services Limited | PNG's Premier Travel Partner",
  description:
    "Papua New Guinea's largest travel agency offering bespoke corporate, leisure, and logistics travel solutions. Over 20 years of local expertise.",
  keywords: "Papua New Guinea travel, PNG travel agency, corporate travel PNG, leisure packages PNG, TSL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface overflow-x-hidden">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
