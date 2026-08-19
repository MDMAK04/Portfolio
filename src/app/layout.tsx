import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "El MAKHLOUFI MOHAMMED | AI / ML Engineer",
  description:
    "Portfolio of El MAKHLOUFI MOHAMMED, AI / ML Engineer focused on RAG, LLMs, Agentic AI and Multimodal AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
