// Este archivo es principalmente para la inicialización en el lado del cliente,
// que usualmente se hace directamente en el componente de checkout.
// Pero podemos exportar la clave pública si es necesaria en otros lugares.

export const mercadopagoPublicKey = process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY!

// La inicialización `initMercadoPago(mercadopagoPublicKey)` se llamará
// en el componente de UI que use el SDK de React de MercadoPago.
