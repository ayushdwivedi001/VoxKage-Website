import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "VoxKage — The Living Agentic OS Framework",
  description:
    "VoxKage hijacks the Gemini CLI, injecting an 18-MCP Honeycomb Brain to give it untethered, autonomous access to your OS, the live web, and your external APIs.",
  openGraph: {
    title: "VoxKage — The Living Agentic OS Framework",
    description: "Untethered. Autonomous. Living.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
