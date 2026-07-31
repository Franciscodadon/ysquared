import type { Metadata } from "next";
import { Spectral, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ysquared.org"),
  title: "Y Squared Youth Services — Today's Youth, Tomorrow's Leaders",
  description:
    "Y Squared multiplies what young people can do. S.T.E.A.M. academies and creative programs building the next generation of innovators in Tampa Bay, Florida.",
  openGraph: {
    title: "Y Squared Youth Services",
    description:
      "Today's youth. Tomorrow's leaders. S.T.E.A.M. academies and creative programs for youth in Tampa Bay.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
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
      className={`${spectral.variable} ${outfit.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
