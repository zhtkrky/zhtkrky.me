import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zahid Karakaya - Frontend Software Engineer",
  description:
    "Zahid Karakaya is a Frontend (UI/UX) Engineer and SEO Expert. Contact him here for frontend help with SEO, Engineering, Design & more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`mx-auto mt-12 max-w-[640px] bg-neutral-50 text-neutral-850  dark:bg-neutral-950 px-6 dark:text-neutral-300 antialiased sm:mt-32 md:mt-16 
        
        ${inter.className}`}
      >
        {children}
        <Footer />
      </body>
      <Script beforeInteractive src="https://zhtkrky-web-components.netlify.app/assets/index.js" />
    </html>
  );
}
