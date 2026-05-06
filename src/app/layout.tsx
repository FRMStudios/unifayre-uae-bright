import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Unifayre Foods | Frozen Food Partner for the UAE & Gulf",
  description:
    "Unifayre Foods, the export identity of Chatha Foods Limited. Over 30 years of frozen flatbreads, tortillas, Roti Canai, frozen-to-fry snacks, gravies, and retort rice. Now partnering with importers, QSR chains, HoReCa and cloud kitchens across the UAE and Gulf.",
  keywords: [
    "Unifayre Foods",
    "Chatha Foods",
    "frozen food UAE",
    "Roti Canai",
    "Malabar Paratha",
    "tortillas",
    "QSR supplier",
    "HoReCa",
    "Gulf",
    "Halal frozen food",
  ],
  openGraph: {
    title: "Unifayre Foods | Frozen Food Partner for the UAE & Gulf",
    description:
      "Honest frozen food, manufactured at scale. Over 30 years heritage. Now serving the UAE and Gulf.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
