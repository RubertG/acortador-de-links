import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Links cortos - Rubert Gonzalez',
  description: 'Acorta tus links como desees. Desarrollado por Rubert Gonzalez'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-primary text-white`}>
        {children}
      </body>
    </html>
  )
}
