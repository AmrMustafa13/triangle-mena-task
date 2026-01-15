import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Hub71 - Sessions",
  description: "Hub71 Info Sessions - A Deep Dive into the Hub71 Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rocGroteskWide.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
