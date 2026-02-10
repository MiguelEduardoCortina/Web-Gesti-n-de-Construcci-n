import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gestor de Construcción Profesional | Project Manager',
  description: 'Gestor de proyectos de construcción profesional. Planificación, coordinación y supervisión de obras de principio a fin.',
  keywords: ['construcción', 'project manager', 'gestor de obras', 'supervisión', 'planificación'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  )
}
