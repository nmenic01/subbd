import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Gradient } from "./components/gradient";
import "./globals.css";
import { Poppins, Bebas_Neue } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Subbd App",
  description: "Task for Subbd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bebasNeue.variable}`}>
        <div className="relative min-h-screen">
          <Navbar />
          {children}
          <Footer />
          <Gradient />
        </div>
      </body>
    </html>
  );
}
