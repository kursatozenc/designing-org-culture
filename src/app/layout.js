import { Archivo, DM_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://designingorgculture.com";
const DESCRIPTION =
  "A Stanford d.school course on human-centered organizational culture design — current cohort, past years, and partner organizations, all in one place.";

export const metadata = {
  // Absolute URLs for social cards and canonicals. Set NEXT_PUBLIC_SITE_URL in
  // Vercel if the canonical domain ever changes.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Designing Org Culture",
    template: "%s — Designing Org Culture",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Designing Org Culture",
    description: DESCRIPTION,
    url: "/",
    siteName: "Designing Org Culture",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Designing Org Culture — Stanford d.school, Design 276.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing Org Culture",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
