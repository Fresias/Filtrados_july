import type { Config } from "tailwindcss"
// Asumiendo que shadcn/ui/tailwind.config no existe o no es necesario,
// si existe y lo necesitas, descomenta y ajusta.
// import defaultConfig from "shadcn/ui/tailwind.config"

const config = {
  // darkMode: ["class"], // Si no usas shadcn/ui, puedes quitar esto o ajustarlo
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        "pasion-humahuaca": "var(--pasion-humahuaca)",
        "cafe-jujuy": "var(--cafe-jujuy)",
        "crema-punta-indio": "var(--crema-punta-indio)",
        "caminito-radiante": "var(--caminito-radiante)",
        "turquesa-el-paraiso": "var(--turquesa-el-paraiso)",
        "verde-bariloche": "var(--verde-bariloche)",
        // Shadcn UI colors (si los usas, asegúrate que estén definidos en :root)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        primary: ["var(--font-primary)", "serif"], // The Foregen
        secondary: ["var(--font-secondary)", "sans-serif"], // Nobel Uno
        display: ["var(--font-display)", "cursive"], // Calcio
      },
      backgroundImage: {
        "gradient-norte": "var(--gradient-norte)",
        "gradient-centro": "var(--gradient-centro)",
        "gradient-sur": "var(--gradient-sur)",
      },
      boxShadow: {
        "feeltrados-card": "0 8px 32px rgba(87, 11, 10, 0.1)",
        "vintage-text": "2px 2px 4px rgba(87, 11, 10, 0.3)",
      },
      borderRadius: {
        // Si usas shadcn/ui, esto vendrá de su config
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Si usas shadcn/ui, esto vendrá de su config
} satisfies Config

export default config
