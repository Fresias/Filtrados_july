import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function AppFooter() {
  return (
    <footer className="bg-cafe-jujuy text-crema-punta-indio py-12">
      <div className="container mx-auto text-center">
        <p className="font-display text-2xl mb-4">Feeltrados</p>
        <p className="font-secondary mb-6">
          Av. Siempreviva 742, Springfield | (011) 1234-5678 | hola@feeltrados.com.ar
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="#" aria-label="Facebook Feeltrados" className="hover:text-caminito-radiante transition-colors">
            <Facebook size={24} />
          </Link>
          <Link href="#" aria-label="Instagram Feeltrados" className="hover:text-caminito-radiante transition-colors">
            <Instagram size={24} />
          </Link>
          <Link href="#" aria-label="Twitter Feeltrados" className="hover:text-caminito-radiante transition-colors">
            <Twitter size={24} />
          </Link>
        </div>
        <p className="font-secondary text-sm">
          © {new Date().getFullYear()} Feeltrados - Construyendo memoria emocional.
        </p>
      </div>
    </footer>
  )
}
