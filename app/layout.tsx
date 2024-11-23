import type { Metadata } from 'next'
import './globals.css'
import React from 'react';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '我的个人主页',
  description: '个人作品展示网站',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 