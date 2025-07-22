"use client"

import type React from "react"
import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

gsap.registerPlugin(ScrollTrigger)

interface GsapScrollFadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number // Desplazamiento en Y
  x?: number // Desplazamiento en X
  scale?: number // Escala inicial
  start?: string // Ej: "top 80%"
  toggleActions?: string // Ej: "play none none reverse"
  batch?: boolean // Si es parte de un batch de ScrollTrigger
  stagger?: number // Para animaciones escalonadas dentro de un batch
  as?: keyof JSX.IntrinsicElements // Permite especificar el tipo de elemento HTML
}

export function GsapScrollFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 50,
  x = 0,
  scale = 1,
  start = "top 90%", // Anima cuando el 90% superior del elemento entra en la vista
  toggleActions = "play none none none", // Solo anima una vez al entrar
  as: ElementType = "div", // Por defecto es un div
}: GsapScrollFadeInProps) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start,
            toggleActions,
            // markers: process.env.NODE_ENV === "development", // Útil para debug
          },
        },
      )
    }, elementRef) // Scope de GSAP context al elemento

    return () => ctx.revert() // Limpieza al desmontar
  }, [delay, duration, y, x, scale, start, toggleActions])

  // Casteamos la ref al tipo de elemento correcto
  const typedRef = elementRef as React.RefObject<HTMLDivElement> & React.RefObject<HTMLElement>

  return (
    <ElementType ref={typedRef} className={className} style={{ opacity: 0 }}>
      {" "}
      {/* Inicialmente oculto para evitar FOUC */}
      {children}
    </ElementType>
  )
}
