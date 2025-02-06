import type { Metadata } from "next";
import {Prompt } from "next/font/google";
import "./globals.css";


const prompt = Prompt({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday!!",
  description: "Happy Birthday!!",
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${prompt.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
