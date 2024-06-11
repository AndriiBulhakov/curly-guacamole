import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const baseUrl = "https://www.finalroundai.com" || "http://localhost:3000"

export const metadata: Metadata = {
  title: "Final Round AI: Interview Copilot",
  description:
    "Final Round AI is the first and only AI copilot for interviewees. It works like a magical teleprompter in real-time and helps you unlock interview God Mode from Day 1 to Final Rounds. #finalroundai #finalround #ai",
  openGraph: {
    images: `${baseUrl}/og-image.jpg`,
  },
  metadataBase: new URL(baseUrl),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
