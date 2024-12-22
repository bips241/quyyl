import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}