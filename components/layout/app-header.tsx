"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

export function AppHeader() {
  const [showHeader, setShowHeader] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // 1) Listener que dispara al primer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowHeader(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 2) Animación GSAP sólo cuando el header entra
  useEffect(() => {
    if (!showHeader || !headerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 },
      )
    }, headerRef)

    return () => ctx.revert()
  }, [showHeader])

  // 3) Mientras no haya scroll, no renderizamos nada
  if (!showHeader) return null

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-crema-punta-indio/80 backdrop-blur-md shadow-sm"
      style={{ opacity: 0 }} // Oculto inicialmente para GSAP
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/logos/feeltrados-logo-completo.svg"
            alt="Feeltrados Logo"
            width={150}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 font-secondary">
          <Link href="#inicio" className="hover:text-pasion-humahuaca transition-colors">
            Inicio
          </Link>
          <Link href="#filosofia" className="hover:text-pasion-humahuaca transition-colors">
            Historia
          </Link>
          <Link href="#valores" className="hover:text-pasion-humahuaca transition-colors">
            Valores
          </Link>
          <Link href="#contacto" className="hover:text-pasion-humahuaca transition-colors">
            Contacto
          </Link>
        </nav>
        <Button
          variant="outline"
          className="border-cafe-jujuy text-cafe-jujuy hover:bg-cafe-jujuy hover:text-crema-punta-indio"
        >
          Próximamente
        </Button>
      </div>
    </header>
  )
}
