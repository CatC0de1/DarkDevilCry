import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { montserrat } from "@/assets/fonts";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Dark Devil Cry",
  description: "The Devil Shall Cry, Not Us! Powerfull Guild in Toram that can make dark devil crying.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
