import type React from "react"
import type { Metadata } from "next"
import { AppHeader } from "@/components/layout/app-header" // Nuevo Header
import { AppFooter } from "@/components/layout/app-footer" // Nuevo Footer
import "./globals.css"

// Las fuentes ahora se cargan globalmente a través de @font-face en globals.css

export const metadata: Metadata = {
  title: "Feeltrados - Reconectá con el disfrute cotidiano",
  description: "Más que café, somos memoria emocional. Cada taza es un viaje a tus memorias más cálidas.",
  keywords: "café artesanal, marca argentina, memoria emocional, café nostálgico, Feeltrados",
  openGraph: {
    title: "Feeltrados - El café que despierta memorias",
    description: "Reconectá con el disfrute cotidiano a través de una taza de café auténtica.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/og-image-feeltrados.jpg`], // Crear esta imagen
  },
  // Añadir preloads para las fuentes locales si es necesario para LCP
  // Esto se haría en el <head> directamente, Next.js podría manejarlo con optimizaciones de fuente si se usa next/font/local
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Las variables de fuente (--font-primary, etc.) se definen en :root en globals.css
    // y se aplican a través de las clases de Tailwind (font-primary, font-secondary, font-display)
    // o directamente en los estilos de body, h1-h6.
    <html lang="es">
      <body>
        <AppHeader />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  )
}
