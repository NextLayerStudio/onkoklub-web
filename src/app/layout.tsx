import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnkoKlub",
  description:
    "Uzavretá platforma pre onkologických pacientov a ich blízkych. Videá, odborníci, podcasty, workshopy po celom Slovensku a komunita, ktorá vie, čím si prechádzaš.",
  applicationName: "OnkoKlub",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF3F9",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={leagueSpartan.variable}>
      <body>{children}</body>
    </html>
  );
}
