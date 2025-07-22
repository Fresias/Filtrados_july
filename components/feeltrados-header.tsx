import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export function FeeltradosHeader() {
  return (
    <header className="bg-cafe-jujuy text-crema-punta-indio shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            {/* Usamos el SVG del logo completo */}
            <Image
              src="/logos/feeltrados-logo-completo.svg"
              alt="Feeltrados Logo"
              width={180} // Ajusta el tamaño según sea necesario
              height={50} // Ajusta el tamaño según sea necesario
              priority // Cargar el logo con prioridad
              className="h-10 sm:h-12 w-auto" // Ajusta la altura responsiva
            />
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/productos" className="font-serif text-lg hover:text-caminito-radiante transition-colors">
              Cafés
            </Link>
            <Link href="/nosotros" className="font-serif text-lg hover:text-caminito-radiante transition-colors">
              Nosotros
            </Link>
            <Link href="/contacto" className="font-serif text-lg hover:text-caminito-radiante transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Aquí iría el componente de login/perfil de Supabase Auth */}
            <Link href="/perfil" className="font-serif text-lg hover:text-caminito-radiante transition-colors">
              Perfil
            </Link>
            <Link href="/carrito" className="relative group">
              <ShoppingCart
                size={28}
                className="text-crema-punta-indio group-hover:text-caminito-radiante transition-colors"
              />
              <span className="absolute -top-2 -right-2 bg-pasion-humahuaca text-crema-punta-indio text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0 {/* Este contador vendrá de Zustand */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
