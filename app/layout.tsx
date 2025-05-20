import type { Metadata } from 'next'

import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';


import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
