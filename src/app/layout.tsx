import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deo Aryan | Premium Web Developer & AI Automation Expert",
  description: "I build fast, high-converting websites and custom AI bots that automate your business. Let's scale your digital presence with clean code and no fluff.",
  keywords: ["Deo Aryan", "Web Developer", "AI Automation", "Next.js", "Freelance Developer", "Custom Websites", "Chatbots"],
  openGraph: {
    title: "Deo Aryan | Premium Web Developer & AI Automation Expert",
    description: "I build fast, high-converting websites and custom AI bots that automate your business.",
    url: "https://aryweb.in",
    siteName: "Deo Aryan Portfolio",
    images: [
      {
        url: "/profile.png", // This will be used when sharing the link on WhatsApp/LinkedIn
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deo Aryan | Premium Web Developer",
    description: "I build fast, high-converting websites and custom AI bots.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
