import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Over Back Index',
  description: 'Over Back Index Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 