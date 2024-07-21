import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Test area // sans server',
  description: 'Testing area for non server related content',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen">
        <div className="" id="modal"></div>
        <Navigation />
        <div className="mx-2 my-8">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
