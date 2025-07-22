import { MercadoPagoConfig, Preference } from "mercadopago"

const mercadopagoAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN

if (!mercadopagoAccessToken) {
  throw new Error("MERCADOPAGO_ACCESS_TOKEN is not defined in environment variables.")
}

const client = new MercadoPagoConfig({
  accessToken: mercadopagoAccessToken,
})

export const preference = new Preference(client)
// Puedes exportar 'client' si necesitas acceder a otras APIs de MercadoPago
export const mercadopagoClient = client
