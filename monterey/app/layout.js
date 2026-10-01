import { Geist, Instrument_Serif, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const displaySerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-advercase",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "Monterey Finance",
    "Sharia-compliant",
    "quantitative research",
    "Islamic finance",
    "factor investing",
    "backtesting",
  ],
  openGraph: {
    title: site.title,
    description: site.shortDescription,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: site.embed.src,
        alt: site.embed.alt,
        width: site.embed.width,
        height: site.embed.height,
        type: site.embed.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.shortDescription,
    images: [site.embed.src],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${displaySerif.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
