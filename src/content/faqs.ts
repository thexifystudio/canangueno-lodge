import type { Localized } from "@/lib/i18n";

/**
 * Preguntas frecuentes — contenido real, transcrito de cananguenolodge.com/faqs
 * (acordeones "Planear un viaje" y "Proceso de pago y reservas").
 *
 * ⚠️ Decisión tomada: NO se publican los datos bancarios (banco, número de
 * cuenta, RUC) aunque hoy estén en la web actual. Publicar una cuenta bancaria
 * en una web abierta invita a suplantación y fraude — los datos se envían por
 * canal privado junto al voucher. Confirmar con el cliente antes del launch.
 */

export type FaqGroup = {
  id: string;
  title: Localized;
  items: { q: Localized; a: Localized }[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "viaje",
    title: { es: "Planear tu viaje", en: "Planning your trip" },
    items: [
      {
        q: {
          es: "¿Dónde está ubicado Canangueno Lodge?",
          en: "Where is Canangueno Lodge located?",
        },
        a: {
          es: "En la comunidad Siona–Seoqueya, dentro de la Reserva de Producción Faunística de Cuyabeno, provincia de Sucumbíos, al noreste de la Amazonía ecuatoriana. Estamos en el corazón de la selva, donde se concentra la mayor variedad de flora y fauna de Cuyabeno.",
          en: "In the Siona–Seoqueya community, inside the Cuyabeno Wildlife Production Reserve, province of Sucumbíos, in the north-east of the Ecuadorian Amazon. We are in the heart of the rainforest, where Cuyabeno's greatest variety of plant and animal life is concentrated.",
        },
      },
      {
        q: {
          es: "¿Cómo es el clima en la reserva?",
          en: "What is the weather like in the reserve?",
        },
        a: {
          es: "Es bosque tropical: entre 3.000 y 4.000 mm de lluvia al año y una humedad de 85 a 95 %. De diciembre a marzo hay una temporada seca marcada; de abril a julio es la temporada lluviosa; y de agosto a noviembre la lluvia es moderada. La temperatura ronda los 25 °C durante todo el año.",
          en: "It is tropical rainforest: between 3,000 and 4,000 mm of rain a year and humidity of 85 to 95%. December to March is a marked dry season; April to July is the rainy season; and from August to November rainfall is moderate. Temperature stays around 25 °C all year.",
        },
      },
      {
        q: { es: "¿Qué debo llevar?", en: "What should I bring?" },
        a: {
          es: "La ropa es informal y cómoda: pantalones cortos o largos y camisetas ligeras, preferentemente de manga larga. Recomendamos: dos o más pantalones largos (no jeans), dos o más shorts, tres o más camisetas de algodón, un par de calcetines por día, zapatos y sandalias cómodos para caminar, cortavientos o suéter, traje de baño, ropa interior de algodón, gafas de sol, cámara, mochila pequeña impermeable, repelente de insectos, bolsas herméticas para mantener la ropa seca, binoculares (opcional), linterna con pilas de repuesto, bloqueador solar, botella de agua reutilizable, libro y cuaderno, toalla, botiquín de primeros auxilios, jabón y champú biodegradables, sombrero o gorra, y el pasaporte original.",
          en: "Clothing is casual and comfortable: shorts or long trousers and light shirts, preferably long-sleeved. We recommend: two or more pairs of long trousers (not jeans), two or more pairs of shorts, three or more cotton shirts, a pair of socks per day, comfortable walking shoes and sandals, a windbreaker or sweater, swimwear, cotton underwear, sunglasses, a camera, a small waterproof backpack, insect repellent, sealable bags to keep clothes dry, binoculars (optional), a torch with spare batteries, sunscreen, a reusable water bottle, a book and notebook, a towel, a first-aid kit, biodegradable soap and shampoo, a hat or cap, and your original passport.",
        },
      },
      {
        q: {
          es: "¿Necesito alguna vacuna?",
          en: "Do I need any vaccinations?",
        },
        a: {
          es: "No hay requisitos obligatorios de vacunación para ingresar a la Reserva de Cuyabeno ni para visitar Canangueno Lodge. De todos modos conviene consultar con tu médico sobre la vacuna de la fiebre amarilla y tener al día el esquema que recomienda la Organización Mundial de la Salud para viajeros.",
          en: "There are no mandatory vaccination requirements to enter the Cuyabeno Reserve or to visit Canangueno Lodge. Even so, it is worth asking your doctor about the yellow fever vaccine and keeping up to date with the schedule the World Health Organization recommends for travellers.",
        },
      },
      {
        q: {
          es: "¿Hay cajeros automáticos en Cuyabeno?",
          en: "Are there ATMs in Cuyabeno?",
        },
        a: {
          es: "En el Puente de Cuyabeno no hay bancos ni cajeros: es la entrada a la selva. Conviene retirar efectivo antes, en cualquier ciudad del país; en Lago Agrio sí hay bancos y cajeros. Recomendamos traer efectivo en cantidades y denominaciones pequeñas.",
          en: "There are no banks or ATMs at the Cuyabeno Bridge — it is the entrance to the rainforest. Withdraw cash beforehand in any city; Lago Agrio does have banks and ATMs. We recommend bringing cash in small amounts and denominations.",
        },
      },
      {
        q: {
          es: "¿El precio incluye seguro médico?",
          en: "Does the price include medical insurance?",
        },
        a: {
          es: "No. Es obligatorio contar con un seguro de salud de viaje propio para cubrir cualquier emergencia.",
          en: "No. Travel health insurance of your own is mandatory to cover any emergency.",
        },
      },
    ],
  },
  {
    id: "reservas",
    title: { es: "Reservas y pagos", en: "Bookings and payments" },
    items: [
      {
        q: {
          es: "¿Cómo funciona el proceso de reserva?",
          en: "How does the booking process work?",
        },
        a: {
          es: "La reserva se confirma únicamente cuando Canangueno Lodge te lo confirma por escrito y te envía el voucher de servicio. Los pagos se reciben por transferencia bancaria, depósito o cheque a nombre de EMOTIONPLANET CIA. LTDA.; los datos bancarios te los enviamos junto con la confirmación. Los gastos bancarios de la transacción corren por cuenta del pasajero.",
          en: "A booking is confirmed only when Canangueno Lodge confirms it in writing and sends you the service voucher. Payments are accepted by bank transfer, deposit or cheque made out to EMOTIONPLANET CIA. LTDA.; we send the bank details along with the confirmation. Bank transaction fees are paid by the traveller.",
        },
      },
      {
        q: {
          es: "¿Qué datos necesitan para la reserva y la factura?",
          en: "What details do you need for the booking and invoice?",
        },
        a: {
          es: "Apellidos y nombres, número de pasaporte, nacionalidad, fecha de nacimiento, alergias o enfermedades, restricciones alimenticias, teléfono de contacto, tipo de habitación y fecha de viaje con el número de noches.",
          en: "Surname and first name, passport number, nationality, date of birth, allergies or medical conditions, dietary restrictions, contact phone number, room type, and travel date with the number of nights.",
        },
      },
      {
        q: {
          es: "¿Los precios están en dólares?",
          en: "Are prices in US dollars?",
        },
        a: {
          es: "Sí, todos nuestros precios se cotizan en dólares estadounidenses, la moneda oficial del Ecuador.",
          en: "Yes, all our prices are quoted in US dollars, Ecuador's official currency.",
        },
      },
      {
        q: {
          es: "¿Cuándo se paga y qué pasa si cancelo?",
          en: "When do I pay and what if I cancel?",
        },
        a: {
          es: "Se solicita el 100 % del valor del tour por adelantado para garantizar el cupo. Si cancelas con 31 días o más de anticipación se devuelve el 100 %; entre 30 y 16 días, el 50 %; con menos de 15 días no hay devolución.",
          en: "Full payment is requested in advance to secure your place. If you cancel 31 days or more in advance you are refunded in full; between 30 and 16 days, 50%; less than 15 days, no refund.",
        },
      },
    ],
  },
];
