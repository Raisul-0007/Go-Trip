import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Navber from "@/app/components/Navber";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const getJost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Go trip",
  description: "Go trip - Your travel companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${getJost.variable} antialiased`}
      >
        <Navber/>
        {children}
      </body>
    </html>
  );
}
