import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SearchProvider} from "../context/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pays Info",
  description: "Obtenez des informations sur les pays du monde entier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <SearchProvider>
        <body className={inter.className}>{children}</body>
      </SearchProvider>
    </html>
  );
}
