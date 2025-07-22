import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GsapScrollFadeIn } from "@/components/animations/gsap-scroll-fade-in" // Nuevo componente GSAP
import { Heart, Users, Palette, Star, Clock } from "lucide-react"

// Placeholder para PatternBackground, ValueCard, ContactForm
const PatternBackground = ({
  variant,
  opacity,
  color,
  className,
}: { variant: string; opacity?: number; color?: string; className?: string }) => (
  <div
    className={`absolute inset-0 -z-10 ${className}`}
    style={{ opacity: opacity || 0.1, backgroundColor: color || "transparent" }}
  >
    <p className="text-xs">Pattern: {variant}</p>
  </div>
)

// ValueCard ahora usará GsapScrollFadeIn internamente o como wrapper
const ValueCard = ({
  icon: Icon,
  title,
  description,
  color,
  delay,
}: { icon: React.ElementType; title: string; description: string; color: string; delay?: number }) => (
  <GsapScrollFadeIn
    delay={delay}
    y={30}
    className={`p-6 rounded-lg shadow-feeltrados-card bg-crema-punta-indio/70 border-2 border-${color}/30 hover:border-${color} transition-all`}
  >
    <div className={`text-${color} mb-3 inline-block p-3 bg-${color}/10 rounded-full`}>
      <Icon size={32} />
    </div>
    <h3 className={`font-primary text-2xl mb-2 text-cafe-jujuy`}>{title}</h3>
    <p className="font-secondary text-cafe-jujuy/80">{description}</p>
  </GsapScrollFadeIn>
)

const ContactForm = () => (
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-crema-punta-indio/80">
        Nombre
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="mt-1 block w-full bg-crema-punta-indio/10 border-caminito-radiante/50 rounded-md p-3 text-crema-punta-indio focus:ring-caminito-radiante focus:border-caminito-radiante"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-crema-punta-indio/80">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="mt-1 block w-full bg-crema-punta-indio/10 border-caminito-radiante/50 rounded-md p-3 text-crema-punta-indio focus:ring-caminito-radiante focus:border-caminito-radiante"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-crema-punta-indio/80">
        Mensaje
      </label>
      <textarea
        name="message"
        id="message"
        rows={4}
        className="mt-1 block w-full bg-crema-punta-indio/10 border-caminito-radiante/50 rounded-md p-3 text-crema-punta-indio focus:ring-caminito-radiante focus:border-caminito-radiante"
      ></textarea>
    </div>
    <Button
      type="submit"
      className="w-full bg-caminito-radiante text-cafe-jujuy hover:bg-caminito-radiante/90 font-bold py-3"
    >
      Enviar Mensaje
    </Button>
  </form>
)

export default function LandingPage() {
  const values = [
    {
      icon: Heart,
      title: "Auténticos",
      description: "Filtramos lo superfluo y servimos solo autenticidad.",
      color: "pasion-humahuaca",
      delay: 0,
    },
    {
      icon: Users,
      title: "Cercanos",
      description: "Te hablamos con la calidez de un abrazo en forma de café.",
      color: "caminito-radiante",
      delay: 0.1,
    },
    {
      icon: Star,
      title: "Apasionados",
      description: "Vivimos cada detalle con pasión para conmover tus sentidos.",
      color: "verde-bariloche",
      delay: 0.2,
    },
    {
      icon: Palette,
      title: "Sensibles",
      description: "Creemos en la belleza de lo artesanal",
      color: "turquesa-el-paraiso",
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "Memoriosos",
      description: "Respetamos lo que fuimos para ser quienes somos",
      color: "cafe-jujuy",
      delay: 0.4,
    },
  ]

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section - "El Momento Feeltrados" */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-gradient-norte text-crema-punta-indio py-20 overflow-hidden"
      >
        <PatternBackground variant="fileteado" opacity={0.05} className="mix-blend-overlay" />
        <div className="container mx-auto text-center z-10">
          <GsapScrollFadeIn delay={0.2} y={30}>
            <Image
              src="/logos/feeltrados-logo-completo.svg"
              alt="Feeltrados Logo"
              width={500}
              height={125}
              priority
              className="mx-auto mb-8"
            />
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.4} y={30}>
            <h1 className="text-4xl md:text-6xl font-primary mb-6 vintage-text">Reconectá con el disfrute cotidiano</h1>
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.6} y={30}>
            <p className="text-xl md:text-2xl font-secondary mb-10 max-w-2xl mx-auto text-crema-punta-indio/90">
              Cada taza es un viaje a tus memorias más cálidas.
            </p>
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.8} y={30}>
            <Button
              asChild
              size="lg"
              className="bg-caminito-radiante text-cafe-jujuy hover:bg-caminito-radiante/90 font-bold text-lg px-10 py-4 rounded-md"
            >
              <Link href="#filosofia">Conocé nuestra historia</Link>
            </Button>
          </GsapScrollFadeIn>
        </div>
      </section>

      {/* 2. "¿Por Qué Existimos?" - Filosofía Central */}
      <section id="filosofia" className="py-20 md:py-32 bg-crema-punta-indio text-cafe-jujuy">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <GsapScrollFadeIn className="order-2 md:order-1" x={-50}>
            <h2 className="text-3xl md:text-5xl font-primary mb-6">
              Más que café, evocamos <span className="text-verde-bariloche">recuerdos</span>
            </h2>
            <p className="font-secondary text-lg leading-relaxed mb-6">
              Invitamos a las personas a reconectar con el disfrute cotidiano a través de una taza de café.
              Feeltrados nace del deseo de revivir emociones auténticas, de detener el tiempo por un momento y volver a
              sentir.
            </p>
            <h2 className="text-3xl md:text-5xl font-primary mb-6">
              ¿Te acordas de esa <span className="text-verde-bariloche">primera vez?</span>
            </h2>
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.2} className="order-1 md:order-2" x={50}>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Paisaje patagónico con café"
              width={500}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
            />
          </GsapScrollFadeIn>
        </div>
      </section>

      {/* 3. "Nuestros Valores" - Cards Interactivas */}
      <section id="valores" className="py-20 md:py-32 bg-turquesa-el-paraiso/20 text-cafe-jujuy">
        <div className="container mx-auto">
          <GsapScrollFadeIn>
            <h2 className="text-3xl md:text-5xl font-primary text-center mb-16">
              Lo que nos hace <span className="text-turquesa-el-paraiso">únicos</span>
            </h2>
          </GsapScrollFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.slice(0, 3).map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto lg:hidden">
            {" "}
            {/* Solo para mobile/tablet */}
            {values.slice(3, 5).map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {" "}
            {/* Solo para desktop */}
            {values.slice(3, 5).map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Quiénes Somos" - Identidad Visual */}
      <section id="quienes-somos" className="py-20 md:py-32 bg-caminito-radiante/20 text-cafe-jujuy">
        <PatternBackground variant="fileteado" opacity={0.03} color="var(--cafe-jujuy)" />
        <div className="container mx-auto text-center relative">
          <GsapScrollFadeIn>
            <h2 className="text-3xl md:text-5xl font-primary mb-6">
              Somos el <span className="text-caminito-radiante">detalle emocional</span> en tu día
            </h2>
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.2}>
            <p className="font-secondary text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Servimos a quienes valoran lo simple y verdadero. Personas sensibles a la estética, amantes del buen café,
              que buscan marcas con alma.
            </p>
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.4} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=200&width=200&query=elemento+marca+feeltrados+${i}`}
                alt={`Elemento marca ${i}`}
                width={200}
                height={200}
                className="rounded-md shadow-lg"
              />
            ))}
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.6}>
            <blockquote className="font-primary text-2xl md:text-3xl italic text-cafe-jujuy/80 border-l-4 border-caminito-radiante pl-6 max-w-2xl mx-auto">
              "Somos esa marca que te hace sonreír con un cartel, recordar con un aroma y volver con ganas."
            </blockquote>
          </GsapScrollFadeIn>
        </div>
      </section>

      {/* 5. "Conectá con Nosotros" - CTA Final */}
      <section id="contacto" className="py-20 md:py-32 bg-gradient-norte text-crema-punta-indio">
        <PatternBackground variant="geometric" opacity={0.05} className="mix-blend-overlay" />
        <div className="container mx-auto text-center max-w-xl relative">
          <GsapScrollFadeIn>
            <h2 className="text-3xl md:text-5xl font-primary mb-6 vintage-text">
              Vamos a construir memoria emocional juntos
            </h2>
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.2}>
            <ContactForm />
          </GsapScrollFadeIn>
          <GsapScrollFadeIn delay={0.4}>
            <p className="mt-10 font-secondary">
              Próximamente nuestra tienda online. ¡Seguinos en redes para no perderte nada!
            </p>
          </GsapScrollFadeIn>
        </div>
      </section>
    </div>
  )
}
