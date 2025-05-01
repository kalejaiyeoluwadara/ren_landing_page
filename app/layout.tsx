import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/shared/Nav";
import Footer from "./components/shared/Footer";


export const metadata: Metadata = {
  title: "Ren AI",
  description: "Ren AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
