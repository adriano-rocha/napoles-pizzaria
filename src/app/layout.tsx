import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cart } from "@/components/cart/cart";
import { LoginAreaDialog } from "@/components/login-area/login-area-dialog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Napoles Pizzaria",
  description: "Sistema de delivery de pizzaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/pizzas/bg-pizzaria.jpg')" }}
          />

          <div className="absolute inset-0 bg-black/70" />
        </div>

        {children}
        <Cart />
        <LoginAreaDialog />
      </body>
    </html>
  );
}
