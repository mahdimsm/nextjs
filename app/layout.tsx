import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const vazir = Vazirmatn({ 
  subsets: ["arabic"], 
  display: "swap"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa-Ir" >
      <body className={vazir.className} >
        <Navbar/>
        <div className="flex flex-col justify-between min-h-dvh">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
