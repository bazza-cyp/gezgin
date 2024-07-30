import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit', weight: ['400', '500', '600', '700', '800'] });
const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: "Gezgin",
  description: "A Dynamic Trip Itinerary Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          <main className="relative overflow-hidden">
          {children}
          </main>
          <Footer />
      </body>
    </html>
  );
};

