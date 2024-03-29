import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import { getBlogName } from "@/lib/requests";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const data = await getBlogName();

  return {
    title: data.displayTitle || data.title,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getBlogName();
  return (
    <html lang="en">
      <link rel="icon" href={data.favicon || "/favicon.ico"}></link>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
