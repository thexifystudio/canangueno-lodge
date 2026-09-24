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
    title: { es: "Planear tu viaje", en: "Planning your trip",
    de: "Reiseplanung",
    fr: "Préparer votre voyage" },
    items: [
      {
        q: {
          es: "¿Dónde está ubicado Canangueno Lodge?",
          en: "Where is Canangueno Lodge located?",
          de: "Wo liegt die Canangueno Lodge?",
          fr: "Où se trouve le Canangueno Lodge ?",
        },
        a: {
          es: "En la comunidad Siona–Seoqueya, dentro de la Reserva de Producción Faunística de Cuyabeno, provincia de Sucumbíos, al noreste de la Amazonía ecuatoriana. Estamos en el corazón de la selva, donde se concentra la mayor variedad de flora y fauna de Cuyabeno.",
          en: "In the Siona–Seoqueya community, inside the Cuyabeno Wildlife Production Reserve, province of Sucumbíos, in the north-east of the Ecuadorian Amazon. We are in the heart of the rainforest, where Cuyabeno's greatest variety of plant and animal life is concentrated.",
          de: "In der Gemeinschaft Siona–Seoqueya, innerhalb des Cuyabeno-Wildreservats in der Provinz Sucumbíos, im Nordosten des ecuadorianischen Amazonasgebiets. Wir befinden uns mitten im Regenwald, dort wo sich die größte Pflanzen- und Tiervielfalt des Cuyabeno konzentriert.",
          fr: "Dans la communauté Siona–Seoqueya, à l’intérieur de la réserve de production faunique de Cuyabeno, province de Sucumbíos, au nord-est de l’Amazonie équatorienne. Nous sommes au cœur de la forêt, là où se concentre la plus grande variété végétale et animale du Cuyabeno.",
        },
      },
      {
        q: {
          es: "¿Cómo es el clima en la reserva?",
          en: "What is the weather like in the reserve?",
          de: "Wie ist das Wetter im Reservat?",
          fr: "Quel temps fait-il dans la réserve ?",
        },
        a: {
          es: "Es bosque tropical: entre 3.000 y 4.000 mm de lluvia al año y una humedad de 85 a 95 %. De diciembre a marzo hay una temporada seca marcada; de abril a julio es la temporada lluviosa; y de agosto a noviembre la lluvia es moderada. La temperatura ronda los 25 °C durante todo el año.",
          en: "It is tropical rainforest: between 3,000 and 4,000 mm of rain a year and humidity of 85 to 95%. December to March is a marked dry season; April to July is the rainy season; and from August to November rainfall is moderate. Temperature stays around 25 °C all year.",
          de: "Es handelt sich um tropischen Regenwald: zwischen 3.000 und 4.000 mm Niederschlag im Jahr und eine Luftfeuchtigkeit von 85 bis 95 %. Von Dezember bis März herrscht eine ausgeprägte Trockenzeit, von April bis Juli die Regenzeit, und von August bis November fallen mäßige Niederschläge. Die Temperatur liegt das ganze Jahr über bei etwa 25 °C.",
          fr: "Il s’agit d’une forêt tropicale humide : entre 3 000 et 4 000 mm de pluie par an et une humidité de 85 à 95 %. De décembre à mars, la saison sèche est marquée ; d’avril à juillet, c’est la saison des pluies ; et d’août à novembre, les précipitations sont modérées. La température reste autour de 25 °C toute l’année.",
        },
      },
      {
        q: { es: "¿Qué debo llevar?", en: "What should I bring?",
        de: "Was soll ich mitnehmen?",
        fr: "Que dois-je emporter ?" },
        a: {
          es: "La ropa es informal y cómoda: pantalones cortos o largos y camisetas ligeras, preferentemente de manga larga. Recomendamos: dos o más pantalones largos (no jeans), dos o más shorts, tres o más camisetas de algodón, un par de calcetines por día, zapatos y sandalias cómodos para caminar, cortavientos o suéter, traje de baño, ropa interior de algodón, gafas de sol, cámara, mochila pequeña impermeable, repelente de insectos, bolsas herméticas para mantener la ropa seca, binoculares (opcional), linterna con pilas de repuesto, bloqueador solar, botella de agua reutilizable, libro y cuaderno, toalla, botiquín de primeros auxilios, jabón y champú biodegradables, sombrero o gorra, y el pasaporte original.",
          en: "Clothing is casual and comfortable: shorts or long trousers and light shirts, preferably long-sleeved. We recommend: two or more pairs of long trousers (not jeans), two or more pairs of shorts, three or more cotton shirts, a pair of socks per day, comfortable walking shoes and sandals, a windbreaker or sweater, swimwear, cotton underwear, sunglasses, a camera, a small waterproof backpack, insect repellent, sealable bags to keep clothes dry, binoculars (optional), a torch with spare batteries, sunscreen, a reusable water bottle, a book and notebook, a towel, a first-aid kit, biodegradable soap and shampoo, a hat or cap, and your original passport.",
          de: "Die Kleidung ist leger und bequem: kurze oder lange Hosen und leichte Hemden, vorzugsweise langärmelig. Wir empfehlen: zwei oder mehr lange Hosen (keine Jeans), zwei oder mehr kurze Hosen, drei oder mehr Baumwollhemden, ein Paar Socken pro Tag, bequeme Wanderschuhe und Sandalen, eine Windjacke oder einen Pullover, Badekleidung, Unterwäsche aus Baumwolle, eine Sonnenbrille, eine Kamera, einen kleinen wasserdichten Rucksack, Insektenschutzmittel, verschließbare Beutel, um die Kleidung trocken zu halten, ein Fernglas (optional), eine Taschenlampe mit Ersatzbatterien, Sonnencreme, eine wiederverwendbare Trinkflasche, ein Buch und ein Notizheft, ein Handtuch, eine Reiseapotheke, biologisch abbaubare Seife und Shampoo, einen Hut oder eine Kappe sowie deinen Reisepass im Original.",
          fr: "La tenue est décontractée et confortable : short ou pantalon long et chemises légères, de préférence à manches longues. Nous recommandons : deux pantalons longs ou plus (pas de jean), deux shorts ou plus, trois chemises en coton ou plus, une paire de chaussettes par jour, des chaussures de marche confortables et des sandales, un coupe-vent ou un pull, un maillot de bain, des sous-vêtements en coton, des lunettes de soleil, un appareil photo, un petit sac à dos imperméable, un répulsif anti-insectes, des sacs refermables pour garder les vêtements au sec, des jumelles (facultatif), une lampe torche avec des piles de rechange, de la crème solaire, une gourde réutilisable, un livre et un carnet, une serviette, une trousse de premiers secours, du savon et du shampoing biodégradables, un chapeau ou une casquette, et votre passeport original.",
        },
      },
      {
        q: {
          es: "¿Necesito alguna vacuna?",
          en: "Do I need any vaccinations?",
          de: "Brauche ich Impfungen?",
          fr: "Ai-je besoin de vaccins ?",
        },
        a: {
          es: "Consulta con un profesional de salud del viajero antes de ir a la Amazonía. Las recomendaciones y los requisitos de entrada, incluida la fiebre amarilla, dependen de tu itinerario y pueden cambiar. Revisa la información oficial vigente antes de viajar.",
          en: "Consult a travel-health professional before travelling to the Amazon. Recommendations and entry requirements, including yellow fever, depend on your itinerary and can change. Check current official guidance before travelling.",
          de: "Wende dich vor einer Reise in den Amazonas an eine reisemedizinische Fachperson. Empfehlungen und Einreisebestimmungen, einschließlich Gelbfieber, hängen von deiner Reiseroute ab und können sich ändern. Prüfe vor der Abreise die aktuellen offiziellen Hinweise.",
          fr: "Consultez un professionnel de santé spécialisé en médecine des voyages avant de partir en Amazonie. Les recommandations et les conditions d’entrée, y compris pour la fièvre jaune, dépendent de votre itinéraire et peuvent évoluer. Vérifiez les consignes officielles en vigueur avant de partir.",
        },
      },
      {
        q: {
          es: "¿Hay cajeros automáticos en Cuyabeno?",
          en: "Are there ATMs in Cuyabeno?",
          de: "Gibt es Geldautomaten in Cuyabeno?",
          fr: "Y a-t-il des distributeurs de billets à Cuyabeno ?",
        },
        a: {
          es: "En el Puente de Cuyabeno no hay bancos ni cajeros: es la entrada a la selva. Conviene retirar efectivo antes, en cualquier ciudad del país; en Lago Agrio sí hay bancos y cajeros. Recomendamos traer efectivo en cantidades y denominaciones pequeñas.",
          en: "There are no banks or ATMs at the Cuyabeno Bridge — it is the entrance to the rainforest. Withdraw cash beforehand in any city; Lago Agrio does have banks and ATMs. We recommend bringing cash in small amounts and denominations.",
          de: "An der Cuyabeno-Brücke gibt es weder Banken noch Geldautomaten — sie ist der Eingang zum Regenwald. Hebe Bargeld vorher in einer Stadt ab; in Lago Agrio gibt es Banken und Geldautomaten. Wir empfehlen, Bargeld in kleinen Beträgen und Scheinen mitzunehmen.",
          fr: "Il n’y a ni banque ni distributeur au pont de Cuyabeno — c’est l’entrée de la forêt. Retirez de l’argent au préalable dans une ville ; Lago Agrio dispose de banques et de distributeurs. Nous recommandons d’emporter des espèces en petites sommes et en petites coupures.",
        },
      },
      {
        q: {
          es: "¿El precio incluye seguro médico?",
          en: "Does the price include medical insurance?",
          de: "Ist eine Krankenversicherung im Preis enthalten?",
          fr: "Le prix comprend-il une assurance médicale ?",
        },
        a: {
          es: "No. Es obligatorio contar con un seguro de salud de viaje propio para cubrir cualquier emergencia.",
          en: "No. Travel health insurance of your own is mandatory to cover any emergency.",
          de: "Nein. Eine eigene Reisekrankenversicherung ist verpflichtend, um im Notfall abgesichert zu sein.",
          fr: "Non. Une assurance santé voyage personnelle est obligatoire pour couvrir toute urgence.",
        },
      },
    ],
  },
  {
    id: "reservas",
    title: { es: "Reservas y pagos", en: "Bookings and payments",
    de: "Buchung und Zahlung",
    fr: "Réservations et paiements" },
    items: [
      {
        q: {
          es: "¿Cómo funciona el proceso de reserva?",
          en: "How does the booking process work?",
          de: "Wie läuft die Buchung ab?",
          fr: "Comment se déroule la réservation ?",
        },
        a: {
          es: "La reserva se confirma únicamente cuando Canangueno Lodge te lo confirma por escrito y te envía el voucher de servicio. Los pagos se reciben por transferencia bancaria, depósito o cheque a nombre de EMOTIONPLANET CIA. LTDA.; los datos bancarios te los enviamos junto con la confirmación. Los gastos bancarios de la transacción corren por cuenta del pasajero.",
          en: "A booking is confirmed only when Canangueno Lodge confirms it in writing and sends you the service voucher. Payments are accepted by bank transfer, deposit or cheque made out to EMOTIONPLANET CIA. LTDA.; we send the bank details along with the confirmation. Bank transaction fees are paid by the traveller.",
          de: "Eine Buchung gilt erst dann als bestätigt, wenn die Canangueno Lodge sie schriftlich bestätigt und dir den Leistungsvoucher zusendet. Zahlungen werden per Banküberweisung, Einzahlung oder Scheck auf den Namen EMOTIONPLANET CIA. LTDA. akzeptiert; die Bankdaten senden wir zusammen mit der Bestätigung. Die Bankgebühren trägt der Reisende.",
          fr: "Une réservation n’est confirmée que lorsque le Canangueno Lodge la confirme par écrit et vous envoie le voucher de services. Les paiements sont acceptés par virement bancaire, dépôt ou chèque à l’ordre d’EMOTIONPLANET CIA. LTDA. ; nous envoyons les coordonnées bancaires avec la confirmation. Les frais bancaires sont à la charge du voyageur.",
        },
      },
      {
        q: {
          es: "¿Qué datos necesitan para la reserva y la factura?",
          en: "What details do you need for the booking and invoice?",
          de: "Welche Angaben braucht ihr für Buchung und Rechnung?",
          fr: "Quelles informations vous faut-il pour la réservation et la facture ?",
        },
        a: {
          es: "Apellidos y nombres, número de pasaporte, nacionalidad, fecha de nacimiento, alergias o enfermedades, restricciones alimenticias, teléfono de contacto, tipo de habitación y fecha de viaje con el número de noches.",
          en: "Surname and first name, passport number, nationality, date of birth, allergies or medical conditions, dietary restrictions, contact phone number, room type, and travel date with the number of nights.",
          de: "Nachname und Vorname, Passnummer, Staatsangehörigkeit, Geburtsdatum, Allergien oder Vorerkrankungen, Ernährungseinschränkungen, Telefonnummer für Rückfragen, Zimmertyp sowie Reisedatum mit der Anzahl der Nächte.",
          fr: "Nom et prénom, numéro de passeport, nationalité, date de naissance, allergies ou problèmes de santé, restrictions alimentaires, numéro de téléphone de contact, type de chambre, et date de voyage avec le nombre de nuits.",
        },
      },
      {
        q: {
          es: "¿Los precios están en dólares?",
          en: "Are prices in US dollars?",
          de: "Sind die Preise in US-Dollar angegeben?",
          fr: "Les prix sont-ils en dollars américains ?",
        },
        a: {
          es: "Sí, todos nuestros precios se cotizan en dólares estadounidenses, la moneda oficial del Ecuador.",
          en: "Yes, all our prices are quoted in US dollars, Ecuador's official currency.",
          de: "Ja, alle unsere Preise sind in US-Dollar angegeben, der offiziellen Währung Ecuadors.",
          fr: "Oui, tous nos prix sont indiqués en dollars américains, la monnaie officielle de l’Équateur.",
        },
      },
      {
        q: {
          es: "¿Cuándo se paga y qué pasa si cancelo?",
          en: "When do I pay and what if I cancel?",
          de: "Wann zahle ich, und was passiert bei einer Stornierung?",
          fr: "Quand dois-je payer et que se passe-t-il en cas d’annulation ?",
        },
        a: {
          es: "La reserva requiere el pago completo por adelantado y un voucher del lodge. Solicita las condiciones de cancelación por escrito para tus fechas antes de pagar.",
          en: "Booking requires full payment in advance and a lodge voucher. Ask for the cancellation terms for your dates in writing before paying.",
          de: "Für die Buchung sind die vollständige Zahlung im Voraus und ein Voucher der Lodge erforderlich. Lass dir die Stornierungsbedingungen für deine Termine vor der Zahlung schriftlich geben.",
          fr: "La réservation exige le paiement intégral à l’avance et un voucher du lodge. Demandez par écrit les conditions d’annulation pour vos dates avant de payer.",
        },
      },
    ],
  },
];
