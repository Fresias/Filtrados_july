"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button" // Asumiendo que tienes shadcn/ui Button
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  imageUrl: string | null
  category?: string | null
  isFeeltrados?: boolean // Para aplicar estilos especiales de marca
}

export function ProductCard({ id, name, price, imageUrl, category, isFeeltrados }: ProductCardProps) {
  const cardStyle = isFeeltrados
    ? "border-2 border-pasion-humahuaca shadow-fileteado-light hover:shadow-fileteado-dark"
    : "border border-turquesa-el-paraiso/50 hover:shadow-lg"

  return (
    <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out group ${cardStyle}`}>
      <Link href={`/productos/${id}`} className="block">
        <div className="relative w-full h-56 sm:h-64">
          <Image
            src={imageUrl || "/placeholder.svg?height=400&width=400&query=cafe+producto"}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <span className="absolute top-2 left-2 bg-caminito-radiante text-cafe-jujuy px-2 py-1 text-xs font-semibold rounded font-nobel-uno">
              {category}
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/productos/${id}`}>
          <h3 className="text-xl font-serif font-bold text-cafe-jujuy mb-1 truncate group-hover:text-pasion-humahuaca transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-2xl font-sans font-semibold text-pasion-humahuaca mb-3">${price.toFixed(2)}</p>
        {/* El botón "Agregar al carrito" será un Client Component separado para manejar la lógica con Zustand */}
        <Button
          variant="default"
          className="w-full bg-pasion-humahuaca hover:bg-pasion-humahuaca/90 text-crema-punta-indio font-nobel-uno"
          // onClick={() => addToCart({ id, name, price, imageUrl })} // Lógica a implementar en Client Component
        >
          <ShoppingCart size={18} className="mr-2" />
          Agregar al Carrito
        </Button>
      </div>
    </div>
  )
}
