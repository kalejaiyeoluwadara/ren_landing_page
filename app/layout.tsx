import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/shared/Nav";



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
      </body>
    </html>
  );
}
