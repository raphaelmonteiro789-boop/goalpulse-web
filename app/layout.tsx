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
  title: {
    default: "GoalPulse — A Inteligência do Futebol",
    template: "%s | GoalPulse",
  },
  description: "Futebol em tempo real com Inteligência Artificial. Notícias, placares ao vivo, estatísticas e Pulse AI.",
  keywords: ["futebol", "placar ao vivo", "Copa do Mundo 2026", "inteligência artificial", "GoalPulse"],
  openGraph: {
    title: "GoalPulse — A Inteligência do Futebol",
    description: "Futebol em tempo real com Inteligência Artificial.",
    siteName: "GoalPulse",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoalPulse — A Inteligência do Futebol",
    description: "Futebol em tempo real com Inteligência Artificial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b1020] text-white">
        {children}
      </body>
    </html>
  );
}
