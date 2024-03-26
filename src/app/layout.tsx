import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Acortador de enlaces - Rubert Gonzalez',
  description: 'Abrevia y personaliza tu URL de manera totalmente gratuita. Podrás realizar un seguimiento de todos los clics que se hagan en tu enlace y ver la fecha en que se llevaron a cabo. Además, tienes la opción de utilizar enlaces abreviados de otros usuarios para mayor comodidad. Desarrollado por Rubert Gonzalez'
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
