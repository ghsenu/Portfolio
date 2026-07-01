import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const title = "Gihansa Senukie | Software Engineer";
const description =
  "Software engineering undergraduate building full-stack and mobile projects. Looking for software engineering internship opportunities.";

export const metadata: Metadata = {
  // TODO: update this to the final production domain after deployment.
  metadataBase: new URL("https://gihansa-senukie.vercel.app"),
  title,
  description,
  keywords: [
    "software engineer",
    "software engineering intern",
    "Next.js developer",
    "Flutter developer",
    "portfolio",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    // TODO: create and add this image later. Ideal size: 1200x630.
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
