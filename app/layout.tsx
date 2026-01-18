import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const rocGroteskWide = localFont({
  src: [
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Roc-Grotesk/Demo_Fonts/Fontspring-DEMO-rocgroteskwide-black.otf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-roc-grotesk-wide",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hub71.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hub71 Sessions | Abu Dhabi's Global Tech Ecosystem",
    template: "%s | Hub71",
  },
  description:
    "Join Hub71 Info Sessions to explore Abu Dhabi's leading tech ecosystem. Connect with startups, investors, and industry experts. Register for upcoming sessions and access recordings.",
  keywords: [
    "Hub71",
    "Abu Dhabi",
    "tech ecosystem",
    "startup",
    "innovation",
    "ADGM",
    "venture capital",
    "tech hub",
    "UAE startups",
    "info sessions",
  ],
  authors: [{ name: "Hub71" }],
  creator: "Hub71",
  publisher: "Hub71",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_AE",
    url: siteUrl,
    siteName: "Hub71",
    title: "Hub71 Sessions | Abu Dhabi's Global Tech Ecosystem",
    description:
      "Join Hub71 Info Sessions to explore Abu Dhabi's leading tech ecosystem. Connect with startups, investors, and industry experts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hub71 - Abu Dhabi's Global Tech Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub71 Sessions | Abu Dhabi's Global Tech Ecosystem",
    description:
      "Join Hub71 Info Sessions to explore Abu Dhabi's leading tech ecosystem. Connect with startups, investors, and industry experts.",
    images: ["/og-image.png"],
    creator: "@Hub71AD",
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
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/en`,
      "ar-AE": `${siteUrl}/ar`,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rocGroteskWide.className} ${poppins.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
